import React, {useEffect, useRef} from 'react'
import ArchilogicEmbed from '@archilogic/embed-api'


export default function ThreeDimensional() {
  const divRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  useEffect(() => {
    const demoSceneId = '940f2267-24a5-446e-8885-4ab76eab2585';
    const viewer = new ArchilogicEmbed(divRef.current, {
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
    viewer.loadScene(demoSceneId)
  }, [divRef]);
  return (
    <div ref={divRef} id="space"></div>
  )
}
