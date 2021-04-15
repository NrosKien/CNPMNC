import React from 'react'
import '../App.css'
import { sidebarData } from './sidebarData'

function sidebar() {
    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                {sidebarData.map((val, key) => {
                    return (
                        <li className="row" id={window.location.pathname === val.link ? "active" : ""} key={key} onClick= {() => {window.location.pathname = val.link}}>
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default sidebar
