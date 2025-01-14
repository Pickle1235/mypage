import { useState } from 'react'
import RoundButton from './RoundButton.tsx';
import './App.css'
import './fonts/meiryo.ttf'
import './fonts/Eurostar.ttf'


function App() {

  return (
    <>
      <video loop autoPlay muted>
          <source src="https://dl.dropboxusercontent.com/scl/fi/o1fjuhd3q8dq5jjp7nv06/videoplayback.mp4?rlkey=kpgg55qfq26bu581btclrzxoo&st=gbbe0a92&dl=0" type="video/mp4" />
          Your browser does not support the video tag.
      </video>
      {/* <div style={{backgroundColor: "lightBlue", opacity: "50%", width: "100%", height: "100%", position: 'absolute', left: 0, top: 0}}></div> */}
      <RoundButton text="Test"></RoundButton>
        <div className='textDiv'>
          <button>World</button><br></br>
          <button className='fa'>Worlda</button>
          <button className='fb'>Worldb</button>
          <button className='fc'>Worldc</button>
          <button className='fd'>Worldd</button>
          <button className='fe'>AEGIS</button>
        </div>
    </>
  )
}

export default App
