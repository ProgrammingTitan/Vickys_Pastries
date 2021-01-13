import React from 'react'
import setup from '../../setup.jpg';
import setupdesktop from '../../setupdesktop.jpg';

export default function Carousel() {
    return (
        <>
        <div className ="carousel-row">
            <img src={setup} alt="Fully themed party" />
            <div className="carousel-image-overlay">
            <h2>A Treat Worth Celebrating</h2>
            <button><a href="/Category/Birthday">Shop Our Birthday Pastries Now!</a></button>
            </div>
        </div>
        <div className ="carousel-row-desktop">
            <img src={setupdesktop} alt="Fully themed party" />
            <div className="carousel-image-overlay">
            <h2>A Treat Worth Celebrating</h2>
            <button><a href="/Category/Birthday">Shop Our Birthday Pastries Now!</a></button>
            </div>
        </div>
        </>
    )
}
