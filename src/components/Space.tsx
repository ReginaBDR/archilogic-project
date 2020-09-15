import React, {useEffect} from 'react'

declare var FloorPlanEngine: any

export default function Space() {
    useEffect(() => {
        const sceneId = '940f2267-24a5-446e-8885-4ab76eab2585';
        const container = document.getElementById('space')
        const fp = new FloorPlanEngine(container)
        fp.loadScene(sceneId)/* .then(() => {
            setSpaces(fp.state.computed.spaces)
            onSpacesLoaded(fp.state.computed.spaces)
        }) */
    }, []);

    return (
        <div id="space"></div>
    )
}
