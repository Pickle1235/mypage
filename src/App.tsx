import { useState } from 'react'
import RightColumn from './components/RightColumn.tsx'
import LeftColumn from './components/LeftColumn.tsx'
import Content from './components/Content.tsx'
import './css/App.css'
import './fonts/meiryo.ttf'
import './fonts/Eurostar.ttf'

function App() {

  return (
    <div>
      {/* <video loop autoPlay muted>
          <source src="https://dl.dropboxusercontent.com/scl/fi/o1fjuhd3q8dq5jjp7nv06/videoplayback.mp4?rlkey=kpgg55qfq26bu581btclrzxoo&st=gbbe0a92&dl=0" type="video/mp4" />
          Your browser does not support the video tag.
      </video> */}
      <div style={{zIndex: -99, backgroundColor: "lightBlue", opacity: "50%", width: "100%", height: "100%", position: 'absolute', left: 0, top: 0}}></div>
      <div className="main">
        <div className="left">
          <LeftColumn/>
        </div>
        <div className="center">
          <Content/>
        </div>
        <div className="right">
          <RightColumn/>
        </div>
      </div>
    </div>
  )
}

export default App
