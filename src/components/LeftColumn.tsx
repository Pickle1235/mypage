import '../css/LeftColumn.css'
import { useState } from "react";
import '../fonts/meiryo.ttf'
import '../fonts/Eurostar.ttf'


export default function LeftColumn() {

        return (
            <div className="left-column">
                <div className="row">
                    <a className="eurostar">■ NAME</a><br />
                    <a className="tabbed-text">Peter An</a>
                </div>
                <div className="row">
                    <a className="eurostar">■ DEGREE</a><br />
                    <a className="tabbed-text">Bachelor's Degree in Computer Science</a>
                </div>
                <div className="row">
                    <a className="eurostar">■ PROFESSION</a><br />
                    <a className="tabbed-text">Software Engineer</a>
                </div>
                <div className="row">
                    <a className="eurostar">■ EMAIL</a><br />
                    <a href="mailto:peteran1236@gmail.com" className="tabbed-text no-hyperlink-style">peteran1236@gmail.com</a>
                </div>
            </div>
            
    )
}