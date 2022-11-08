import React from 'react';
import Kundenservice from './Kundenservice';
import './style/navbarStyle.css';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";


function NavbarForm({Logout}) {
  return (
    <>       
      <div className='navbarDiv'>
        <div className='navbarContainer'>
          <div className='logoImgNav'></div>
          <nav className='navbarNav'>
            <ul className='navbarUl'>
              <li className='li'><a>Order</a></li>
              <li className='li'><a>Availability</a></li>
              <li className='li'><a>Order List</a></li>
              <li className='li'><a className='impressum' href='https://www.deere.de/de/impressum/' target="_blank" rel="noopener noreferrer">Impressum</a></li>
              <li className='li'><Kundenservice></Kundenservice></li>
            </ul>
          </nav>
          <button onClick={Logout} className="logoutButton">Logout</button>
        </div>
      </div>
    </>
  )
}

export default NavbarForm
