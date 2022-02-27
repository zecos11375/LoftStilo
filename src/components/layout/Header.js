import React, { useState } from 'react'
import { FiCode, FiMenu, FiX, FiCoffee} from "react-icons/fi";
import { Link } from "react-router-dom";


import classes from "./Header.module.css";

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  
  return (
    <div className={`${classes.header} ${classes.he}`}>
      <div className={classes.container}>
        <div className={classes.headerCon}>
          <div className={classes.logoCon}>
            <Link to="/">
              Loft Stilo <FiCoffee className={classes.logo} />
            </Link>
          </div>
          
          <ul className={click ? `${classes.menu} ${classes.active}` : classes.menu}>
            <li className={classes.menuLink} onClick={closeMobileMenu}>
              <Link to='/'>HOME</Link>
            </li>
            <li className={classes.menuLink} onClick={closeMobileMenu}>
            <Link to='/contact'>CONTACT</Link>
            </li>

          </ul>
          <div className={classes.mobileMenu} onClick={handleClick}>
            {click ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>
    </div>
  );
}
