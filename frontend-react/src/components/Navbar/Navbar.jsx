import React from 'react'

import {images} from '../../constants/'
import './Navbar.scss';

const Navbar = () => {
  return (

<nav className="app__navbar">
    <div className="app__navbar-logo">
        <img src={images.logo} alt="logo"/>
        {/* erstellt das Logo in der Navbar */}
    </div>
    
    <ul className="app__navbar-links">
      {['home','about','work','skills','contact'].map((item)=>(
        // ich erstelle ein Array mit den Navigationspunkten und steuere diese mit der .map Funktion an. Die Navpunkte werden im (item) returned
        <li className="app__flex p-text" key={`link-${item}`}>
          {/* das list element mit dem key=value pair gibt das item wieder */}
          <div/>
          <a href={`#${item}`}>{item}</a>
          {/* hier werden die items mit Hilfe des Anchortags als Link zugänglich gemacht */}
        </li>
      ))}
    </ul>
</nav>  )
}

export default Navbar