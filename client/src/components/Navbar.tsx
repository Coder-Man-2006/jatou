import React, { useState, useEffect} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import BirdLogoLine from '../assets/static/bird_logos.svg';
import GoldBlackLogo from '../assets/media/banner/png/gold_black.png';
import SettingsCog from '../assets/static/cog.svg';
import '../styles/Navbar.css'

const Navbar = () => {
    return(
        <div className="navbar-wrapper">
            <nav>
                <div className="left">
                    <img src={GoldBlackLogo} alt="logo" />
                </div>
                <div className="right">
                    <ul>
                        <a href="#about"><li>ABOUT</li></a>
                        <a href="#projects"><li>PROJECTS</li></a>
                        <a href="#companies"><li>COMPANIES</li></a>
                        <a href="#team"><li>TEAM</li></a>
                        <a href="#contact"><li>CONTACT</li></a>
                        <Link to="/settings"><li><img src={SettingsCog} alt="" /></li></Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;