import React from 'react'
import vicky from '../../vicky.PNG';
import vickyCake from '../../vicky-cake.png';
import SocialBar from '../layout/SocialBar';
import CategoryWidget from '../layout/CategoryWidget';
import Divider from '../layout/Divider';

export default function AboutPage() {
    return (
        <>
        <div className="about-page">
            <div className="about-page-row">
                <div className="about-page-col">
                <h1>Vicky's Pastries</h1>
                <p>We are a small baking team based out of Long Beach, 
                    California. Inspired to bake at an early age, Vicky 
                    Jimenez-Cabrillo pursued her passion and now provides 
                    celebration and happiness in the form of delicious treats.</p>
                </div>
                <div className="about-page-col">
                <img className="about-widget-image" src={vickyCake} ald="vickys cake"/>
                </div>
            </div>
            <div className="about-page-row-h2">
                <h2><i>"A Treat Worth Celebrating"</i></h2>
            </div>
            <div className="about-page-row">
                <div className="about-page-col">
                    <img src={vicky} alt="vicky" />
                </div>
                <div className="about-page-col">
                <h1>Vicky Jimenez Carrillo</h1>
                <p>In addition to being a loving sister and aunt, Vicky is an entrepreneur. In her early 20s,
                    after graduating from the Culinary Arts program at Long Beach City College, she decided to apply 
                    her baking talents to her ambitious efforts and she created a small business
                    to provide unique and tasty products to eager clients.  
                </p>
                </div>
            </div>
        </div>
        <Divider />
        <SocialBar />
        <CategoryWidget />
        </>
    )
}
