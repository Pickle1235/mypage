import '../css/LeftColumn.css'
import { useState } from "react";
import AboutMe from './AboutMe.tsx';
import RoundButton from './MiniComponents/RoundButton.tsx';
import '../fonts/meiryo.ttf'
import '../fonts/Eurostar.ttf'


export default function LeftColumn() {

        return (
            <div className="left-column">
                <div className="row">
                    <a className="eurostar">■ NAME</a><br />
                    <a className="">Peter An</a>
                </div>
                <div className="row">
                    <a className="eurostar">■ DEGREE</a><br />
                    <a className="">Bachelor's Degree in Computer Science</a>
                </div>
                <div className="row">
                    <a className="eurostar">■ PROFESSION</a><br />
                    <a className="">Software Developer</a>
                </div>
            </div>
            
    )
}