import { useState } from 'react'
import RightColumn from './components/RightColumn.tsx'
import LeftColumn from './components/LeftColumn.tsx'
import DraggableWindow from './components/DraggableWindow.tsx'
import './css/App.css'
import './fonts/eurostar.ttf'
import './fonts/trump.ttf'
import { playClickSound, playClickSoundTwo } from "./utils/soundPlayer";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [muted, setMuted] = useState<boolean>(true);
  const [windowContent, setWindowContent] = useState<string[]>([]);

  function onChangeMuted(muted: boolean) {
    setMuted(muted);
  }

  const athledaText : string[] = ['ath', 'leda'];
  const aceText : string[] = ['ace', 'rent', 'a', 'car'];
  const educationText : string[] = ['Purdue', 'University'];
  const summaryText : string[] = ['Summary', 'Text'];

  function onClickContentType(type: string ) {
    switch (type) {
        case 'athleda':
          setWindowContent(athledaText);
          break;
        case 'ace':
          setWindowContent(aceText);
          break;
        case 'education':
          setWindowContent(educationText);
          break;
        case 'summary':
          setWindowContent(summaryText);
          break;
    }
    if (!muted && !windowContent) {
      playClickSoundTwo();
    }
    if (!muted && windowContent) {
      playClickSound();
    }
  } 

  function onClickCloseWindow() {
    setWindowContent([]);
    if (!muted) {
      playClickSound();
    }
  }

  return (
    <div className='blue-background'>
      <video loop autoPlay muted onCanPlayThrough={() => setLoading(false)}>
            <source src="https://dl.dropboxusercontent.com/scl/fi/o1fjuhd3q8dq5jjp7nv06/videoplayback.mp4?rlkey=kpgg55qfq26bu581btclrzxoo&st=gbbe0a92&dl=0" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      {loading && 
        <div className='loading-text-div'>
          <a className='loading-text'>
            Loading...
          </a>
        </div>
      }
      {!loading && <div>
        {/* <div style={{zIndex: -99, backgroundColor: "lightBlue", opacity: "50%", width: "100%", height: "100%", position: 'absolute', left: 0, top: 0}}></div> */}
        <div className="main">
          <div className="left">
            <LeftColumn muted={muted}/>
          </div>
          <div className="center">
          </div>
          {
            windowContent.length > 0 && 
            <DraggableWindow
              muted={muted}
              onClickCloseWindow={onClickCloseWindow}
              windowContent={windowContent}
            />
            }
          <div className="right">
            <RightColumn
              muted={muted}
              onChangeMuted={onChangeMuted}
              onClickContentType={onClickContentType}
            />
          </div>
        </div>
      </div>}
    </div>
  )
}

export default App
