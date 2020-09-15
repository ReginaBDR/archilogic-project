import React, {useEffect} from 'react'
import ArchilogicEmbed from '@archilogic/embed-api'

const viewer = new ArchilogicEmbed(document.body, {
    accessToken: process.env.REACT_APP_ARCHILOGIC_PUBLISHABLE_API_KEY,
    transparentBackground: true,
    minimap: true,
    showTitle: true,
    showLogo: false,
    uiButtons: { 
      birdMode: true, 
      personMode: true,
      fullscreen: true,
      bookmarkStrip: true,
      share: true,
      help: true,
      presentation: false
    }
  })

export default function ThreeDimensional() {
    useEffect(() => {
        const demoSceneId = '940f2267-24a5-446e-8885-4ab76eab2585';
        viewer.loadScene(demoSceneId)
    },[]);
    return (
        <div id="container"></div>  
    )
}
