import React, { useState, useEffect } from 'react';
import { Table } from 'antd';

const { Column, ColumnGroup } = Table;

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
    },
];


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
    const [spaces, setSpaces] = useState()

    useEffect(() => {
        const sceneId = '940f2267-24a5-446e-8885-4ab76eab2585';
        const container = document.getElementById('space')
        const fp = new FloorPlanEngine(container, FloorPlanSettings)
        fp.loadScene(sceneId).then(() => {
            setSpaces(fp.resources.spaces)
            fp.on('click', (event: any) => handleSpaceClick(event, fp));
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    return (
        <div>
            <div id="space"></div>
            <Table dataSource={spaces} columns={columns} pagination={{ defaultPageSize: 7 }} >
                <ColumnGroup title="Name">
                    <Column title="Usage" dataIndex="usageName" key="usageName" />
                    <Column title="Program" dataIndex="program" key="program" />
                </ColumnGroup>
                <Column title="Area" dataIndex="area" key="area" />
            </Table>
        </div>
    )
}
