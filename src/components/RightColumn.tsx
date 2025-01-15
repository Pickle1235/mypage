import '../css/RightColumn.css'

import AboutMe from './AboutMe.tsx';
import RoundButton from './MiniComponents/RoundButton.tsx';
import '../fonts/meiryo.ttf'
import '../fonts/Eurostar.ttf'

export default function RightColumn({aboutMe = true} : {aboutMe : boolean}) {

    if (aboutMe) {
        return (
            <div className="column">
                <RoundButton text="About Me"></RoundButton>
                <RoundButton text="Experience"></RoundButton>
                <a className="meiryo">■ ABOUT ME</a>
                <hr/>
                <AboutMe/>
            </div>
        )
    }
    return (
        <div className="column">
            <RoundButton text="About Me"></RoundButton>
            <RoundButton text="Experience"></RoundButton>
            <a>■ Experience</a>
            <hr/>
        </div>
    )
}