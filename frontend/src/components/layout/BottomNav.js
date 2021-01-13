import React from 'react';
import logo from '../../vickylogo.jpg';

export default function BottomNav() {
    return (
        <div className="bottom-nav">
            <div className="bottom-nav-row" >
                <ul>
                <div className="bottom-nav-col">
                <li><a href="/Order">Order</a></li>
                <li><a href="/Menu">Menu</a></li>
                <li><a href="/About">About</a></li>
                </div>
                <div className="bottom-nav-col">
                <li><a href="/Category/Holidays">Holidays</a></li>
                <li><a href="/Category/Wedding">Wedding</a></li>
                <li><a>Contact</a></li>
                </div>
                <div className="bottom-nav-col">
                <li><a href="https://www.instagram.com/vickys_pastries/">Instagram</a></li>
                <li><a>Feedback</a></li>
                <li><a href="/login">Employee Site</a></li>
                </div>
                <div className="bottom-nav-col">
                    <a href="/">
                    <img className="bottom-nav-logo" src={logo}/>
                    </a>
                </div>
                </ul>
                
            </div> 
        </div>
    )
}
