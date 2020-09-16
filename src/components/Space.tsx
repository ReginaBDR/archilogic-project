import React, {useEffect} from 'react'

declare var FloorPlanEngine: any

const FloorPlanSettings = {
    hideElements: [],
    panZoom: true,
    planRotation: null,
    roomStampSize: null,
    ui: {
        menu: false,
        scale: false,
        coordinates: false
    },
    theme: {
        background: {
            color: '#f3f5f8',
            showGrid: false
        },
        wallContours: false,
        elements: {
            roomstamp: { showArea: false }
        }
    },
    units: {
        system: 'metric',
        digits: 0,
        roomDimensions: 'area'
    }
}

interface FloorPlanProps {
    sceneId: string,
    tickets: any[],
    onSpacesLoaded: any
}

export default function Space() {
    useEffect(() => {
        const sceneId = '940f2267-24a5-446e-8885-4ab76eab2585';
        const container = document.getElementById('space')
        const fp = new FloorPlanEngine(container, FloorPlanSettings)
        fp.loadScene(sceneId)/* .then(() => {
            setSpaces(fp.state.computed.spaces)
            onSpacesLoaded(fp.state.computed.spaces)
            fp.on('click', (event: any) => onRoomClick(event, fp));
        }) */
    }, []);

    return (
        <div id="space"></div>
    )
}
