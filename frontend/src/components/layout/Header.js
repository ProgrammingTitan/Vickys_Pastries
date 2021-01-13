import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import AuthOptions from '../auth/AuthOptions';

export default function Header() {
    const [toggle, setToggle] = useState();
    // setToggle(false);

    return (
        <>
        
      
      
      <div className="desktop-nav">
         
      <header className="header">
      <a href="/">Vicky's Pastries</a>
      <div>
      <ul className="menu-items">
        <li><a href="/Menu" className="menu-item">Menu</a></li>
        <li><a href="/About" className="menu-item">About</a></li>
        <li><a href="/Category/Holidays" className="menu-item">Holidays</a></li>
        <li><a href="/Order" className="menu-item">Order</a></li>
      </ul>
      </div>
      </header>
      </div>


      <div className="mobile-nav">
      <div className="menu-wrap">
    <input type="checkbox" class="toggler" />
    <div className="hamburger"><div></div></div>
    <div className="mobile-header-title"><a href="/">Vickys Pastries</a></div>
    <div className="menu">
      <div>
        <div>
          <ul>
            <li><a href="/Menu">Menu</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Category/Holidays">Holidays</a></li>
            <li><a href="/Order">Order</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  

      {/* {toggle ?
      <div>
           <div class="menu-btn open">
        <div class="menu-btn__lines" onClick={() => setToggle(!toggle)}></div>
      </div>
      <ul class="menu-items">
      <li><a href="#" class="menu-item">Menu</a></li>
        <li><a href="#" class="menu-item">About</a></li>
        <li><a href="#" class="menu-item">Holidays</a></li>
        <li><a href="#" class="menu-item">Order</a></li>
      </ul>
      </div>
      :
      <div class="menu-btn">
      <div class="menu-btn__lines" onClick={() => setToggle(!toggle)}></div>
    </div>
        } */}
        
        
        </div>
        
        <div className="header-space">
        
        </div>
    </>
    )
}
