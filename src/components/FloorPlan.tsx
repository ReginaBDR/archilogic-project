import React, {useEffect} from 'react'


declare var FloorPlanEngine: any


export default function FloorPlan() {
    useEffect(() => {
        const demoSceneId = '940f2267-24a5-446e-8885-4ab76eab2585';
        const container = document.getElementById('floorplan')
        const fp = new FloorPlanEngine(container)
        fp.loadScene(demoSceneId)
    },[]);
    return (
        <div id="floorplan" className="col-md-10 col-sm-12 mx-auto"></div>
    )
}
