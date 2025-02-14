import '../css/RightColumn.css'
import { useState } from "react";
import RoundButton from './MiniComponents/RoundButton.tsx';
import '../fonts/meiryo.ttf'
import '../fonts/Eurostar.ttf'
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeOnIcon from '@mui/icons-material/VolumeUp';
import { playClickSound } from "../utils/soundPlayer";


export default function RightColumn({ onClickContentType, onChangeMuted, muted }: { onClickContentType? : (type: string) => void, onChangeMuted? : (type: boolean) => void, muted : boolean }) {
    const [isAboutMe, setIsAboutMe] = useState<boolean>(true);

    return (
        <div className="right-column">
            <div className="row center-vertical width-80">
                <RoundButton onClick={OnClickAboutMe} text="About Me" muted={muted}></RoundButton>
                <RoundButton onClick={OnClickExperience} text="Experience" muted={muted}></RoundButton>
                <div className="icon no-line-height">
                    {muted && <VolumeOffIcon onClick={() => onChangeMuted?.(false)} className="icon"/>}
                    {!muted && <VolumeOnIcon onClick={() => onChangeMuted?.(true)} className="icon"/>}
                </div>
            </div>

            <div className="row">
                <div className="eurostar blue-border white-text">
                    {isAboutMe && <a>■ ABOUT ME</a>}
                    {!isAboutMe && <a>■ EXPERIENCE</a>}
                </div>
            </div>

            <div>
                <hr className="line"/>
            </div>

            <div className="select-rows">
                {isAboutMe && <div>
                    <a className="select" onClick={() => onClickContentType?.('summary')}>Summary</a><br/>
                    <a className="select" onClick={() => onClickContentType?.('education')}>Education</a><br/>
                </div>}
                {!isAboutMe && <div>
                    <a className="select" onClick={() => onClickContentType?.('ace')}>Ace Rent A Car</a><br/>
                    <a className="select" onClick={() => onClickContentType?.('athleda')}>The athLEDA Foundation</a><br/>
                </div>}
            </div>
        </div>
    )

    function OnClickAboutMe() {
        if (!muted) {
            playClickSound();
        }
        setIsAboutMe(true);
    }

    function OnClickExperience() {
        if (!muted) {
            playClickSound();
        }
        setIsAboutMe(false);
    }
}