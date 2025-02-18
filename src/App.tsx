import { useState } from 'react'
import RightColumn from './components/RightColumn.tsx'
import LeftColumn from './components/LeftColumn.tsx'
import Content from './components/Content.tsx'
import DraggableWindow from './components/DraggableWindow.tsx'
import './css/App.css'
import './fonts/eurostar.ttf'
import './fonts/trump.ttf'
import { playHoverSound, playClickSound, playClickSoundTwo } from "./utils/soundPlayer";

function App() {
  const [muted, setMuted] = useState<boolean>(true);
  const [windowContent, setWindowContent] = useState<string>('');

  function onChangeMuted(muted: boolean) {
    setMuted(muted);
  }

  function onClickContentType(type: string ) {
    switch (type) {
        case 'athleda':
            setWindowContent('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur faucibus auctor. Cras accumsan arcu sed sapien dapibus viverra. Cras a enim efficitur, dapibus purus at, mollis dolor. Mauris quis commodo felis, id interdum nibh. Nulla eget lectus quis quam feugiat auctor eget sed justo. Nam commodo ligula laoreet, dapibus augue sit amet, eleifend risus. Fusce elementum suscipit mauris. Phasellus venenatis velit ac dignissim sodales. Suspendisse quis vulputate ex, vel vulputate est. Phasellus rutrum tristique purus. Proin tristique dolor a iaculis malesuada. Integer diam dolor, tempor et nisi vel, viverra ultricies risus. Donec consequat mi urna, ut blandit ipsum ornare ac. Nullam a tellus sit amet sapien facilisis finibus. Vestibulum eget scelerisque turpis. Sed molestie arcu at venenatis eleifend. Sed vitae dolor eros. Vivamus imperdiet leo lectus, ut tristique odio aliquet eu. In feugiat, lacus a facilisis congue, metus enim sagittis risus, sit amet bibendum nulla massa ac ex. Quisque eget dapibus enim. Curabitur fringilla aliquet ligula. Donec feugiat posuere scelerisque. Curabitur efficitur pharetra lorem vel molestie.');
            break;
        case 'ace':
            setWindowContent('ace')
            break;
        case 'education':
            setWindowContent('education')
            break;
        case 'summary':
              setWindowContent('summary')
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
    setWindowContent('');
    if (!muted) {
      playClickSound();
    }
  }

  return (
    <div>
      {/* <video loop autoPlay muted>
          <source src="https://dl.dropboxusercontent.com/scl/fi/o1fjuhd3q8dq5jjp7nv06/videoplayback.mp4?rlkey=kpgg55qfq26bu581btclrzxoo&st=gbbe0a92&dl=0" type="video/mp4" />
          Your browser does not support the video tag.
      </video> */}
      <div style={{zIndex: -99, backgroundColor: "lightBlue", opacity: "50%", width: "100%", height: "100%", position: 'absolute', left: 0, top: 0}}></div>
      <div className="main">
        <div className="left">
          <LeftColumn muted={muted}/>
        </div>
        <div className="center">
          <Content/>
        </div>
        {
          windowContent && 
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
    </div>
  )
}

export default App
