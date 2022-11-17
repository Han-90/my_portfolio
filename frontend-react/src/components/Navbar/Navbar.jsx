import React from 'react'
import {HiMenuAlt4, Hix} from 'react-icons/hi';
// https://react-icons.github.io/react-icons/icons?name=hi
import {motion} from 'framer-motion';
import { useState } from 'react';

import {images} from '../../constants/'
import './Navbar.scss';

const Navbar = () => {
const [toggle, settoggle] = useState(open);

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

    <div className="app__navbar-menu">
      <HiMenuAlt4 onClick={() setToggle(false)}/>

      {
        toggle && (
          <motion.div
          // https://www.framer.com/motion/
          whileInView={{x:[300,0]}}
          transition={{duration:0.85, ease:'easeOut'}}
          >

            <Hix onClick={() => setToggle(false)}/>
            {['home','about','work','skills','contact'].map((item)=>(
        // ich erstelle ein Array mit den Navigationspunkten und steuere diese mit der .map Funktion an. Die Navpunkte werden im (item) returned
        <li key={item}>
          {/* das list element mit dem key=value pair gibt das item wieder */}
          <a href={`#${item}`} onClick={() setToggle(false)}></a>
          {/* hier werden die items mit Hilfe des Anchortags als Link zugänglich gemacht */}
        </li>
      ))}
    </ul>
            

          </motion.div>
        )
      }
    </div>

</nav>  )
}

export default Navbar