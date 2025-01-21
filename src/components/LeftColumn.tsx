import '../css/RightColumn.css'
import { useState } from "react";
import AboutMe from './AboutMe.tsx';
import RoundButton from './MiniComponents/RoundButton.tsx';
import '../fonts/meiryo.ttf'
import '../fonts/Eurostar.ttf'


export default function LeftColumn() {

        return (
            <div className="left-column">
                <div className="row">
                    <a className="eurostar">■ Name</a><br />
                    <a className="">Peter An</a>
                </div>
            </div>
    )
}