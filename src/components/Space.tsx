import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

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

export default function Space() {
    const [spaces, setSpaces] = useState<any[]>([])
    const [floorPlan, setFloorPlan] = useState()

    const columns = [
        {
            title: 'Usage',
            dataIndex: 'usageName',
            key: 'usageName',
        },
        {
            title: 'Program',
            dataIndex: 'program',
            key: 'program',
        },
        {
            title: 'Area',
            dataIndex: 'area',
            key: 'area',
            render: (area: number) => Math.round(area),
        },
        {
            title: 'Actions',
            key: 'actions',
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            render: (record: any) => <Button type="primary" icon={<SearchOutlined />} onClick={() => selectSpace(record.id)}>View</Button> 
        },
    ];

    useEffect(() => {
        const sceneId = '940f2267-24a5-446e-8885-4ab76eab2585';
        const container = document.getElementById('space')
        const fp = new FloorPlanEngine(container, FloorPlanSettings)
        fp.loadScene(sceneId).then(() => {
            setSpaces(fp.resources.spaces)
            setFloorPlan(fp)
            fp.on('click', (event: any) => handleSpaceClick(event, fp));
        })
    }, []);

    // evento onclick
    const handleSpaceClick = (event: any, fp: any) => {
        const { spaces } = fp.getResourcesFromPosition(event.pos);
        spaces.forEach((space: any) => {
            space.node.setHighlight({
                fill: [236, 112, 99]
            })
        })
    }

    //select spaces on floor plan from "View" on table
    const selectSpace = (spaceId: string) => {
        const space = spaces?.find((space: any) => space.id === spaceId)
        spaces.forEach(() => {
            space.node.setHighlight({
                fill: [236, 112, 99]
            })
            setTimeout(() => {
                space.node.setHighlight()
              }, 2000)
        })
    }

    

    return (
        <div className="space__container">
            <div id="space"></div>
            <Table dataSource={spaces} columns={columns} pagination={{ defaultPageSize: 7 }} rowKey="id" className="data__table" />  
        </div>
    )
}
