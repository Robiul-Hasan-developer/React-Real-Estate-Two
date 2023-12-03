import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { nav } from '../../data/Data';
import Logo from '../../../../public/images/logo.png';

const Header = () => {

    const [activeItems, setActiveItems] = useState(Array(nav.length).fill(false)); 

    const handleActive = (index) => {
        const newActiveItems = Array(nav.length).fill(false); // Reset all to false
        newActiveItems[index] = true; // Set the clicked one to true
        setActiveItems(newActiveItems);
    }
        
    return (
        <>
            <header className="header" id="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link className="navbar-brand logo" to="/"><img src={Logo} alt=""/></Link>
                        <button className="navbar-toggler header-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span id="hiddenNav"><i className="las la-bars"></i></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav nav-menu ms-auto align-items-lg-center">
                                {
                                    nav.map((list, index) => {
                                        return (
                                            <li className={`nav-item ${activeItems[index] ? "activeItem" : ""}`} onClick={() => handleActive(index)} key={index}>
                                                <a href={list.path} className={`nav-link ${list.isActive ? 'active' : ""}`}>{list.text}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className="header-btn ms-lg-5 ms-0 mt-lg-0 mt-2">
                                <Link to="#contactUs" className='btn btn--base'>Contact Us</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>  
        </>
    );
};

export default Header;

