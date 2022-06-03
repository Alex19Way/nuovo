import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse,faFolder,faCircleInfo} from '@fortawesome/free-solid-svg-icons';

const Nav = () =>{
    return(
    <nav className="nav">
        <a href='#hero'>
            <FontAwesomeIcon icon={faHouse} size="2x" className='nav-icon'/>
        </a>

        <a href="#category">
            <FontAwesomeIcon icon={faFolder} size="2x" className='nav-icon'/>
        </a>

        <a href="#info">
            <FontAwesomeIcon icon={faCircleInfo} size="2x" className='nav-icon'/>
        </a>
    </nav>
    )
}

export default Nav;