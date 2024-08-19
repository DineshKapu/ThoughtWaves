import React from 'react';
import './header.css';
import Home from '../static/Home.png';
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Content is Anything that Adds Value to Your Life</span>
        <span className="headerTitleLg">ThoughtWaves</span>
        <span className='headerTitleSm-1'>"Riding the Waves of Innovation and Insight"</span>
      </div>
      <img src={Home} alt="" className="headerImg" />
    </div>
  );
}
