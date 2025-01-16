import '../css/RightColumn.css'
import { useState } from "react";
import AboutMe from './AboutMe.tsx';
import RoundButton from './MiniComponents/RoundButton.tsx';
import '../fonts/meiryo.ttf'
import '../fonts/Eurostar.ttf'
import VolumeOffIcon from '@mui/icons-material/VolumeOff';


export default function RightColumn() {
    const [isAboutMe, setIsAboutMe] = useState<boolean>(true);

    MyIconButton: {
        '& svg': {
          fontSize: '100px';
        }
    }

    if (isAboutMe) {
        return (
            <div className="column">

                <div className="row">
                    <RoundButton onClick={OnClickAboutMe} text="About Me"></RoundButton>
                    <RoundButton onClick={OnClickExperience} text="Experience"></RoundButton>
                    <div className="icon">

                        <VolumeOffIcon className="icon"/>
                    </div>
                </div>

                <div className="row">
                    <a className="eurostar">■ ABOUT ME</a>
                </div>

                <div className="row">
                    <hr/>
                </div>

                <AboutMe/>
            </div>
        )
    }
    return (
        <div className="column">

                <div className="row">
                    <RoundButton onClick={OnClickAboutMe} text="About Me"></RoundButton>
                    <RoundButton onClick={OnClickExperience} text="Experience"></RoundButton>
                </div>

                <div className="row">
                    <a className="eurostar">■ Experience</a>
                </div>

                <div className="row">
                    <hr/>
                </div>


        </div>
    )

    function OnClickAboutMe() {
        console.log("am");
        setIsAboutMe(true);
    }

    function OnClickExperience() {
        console.log("e");
        setIsAboutMe(false);
    }
}