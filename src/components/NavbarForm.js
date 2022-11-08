import React from 'react';
import './style/navbarStyle.css';

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
            </ul>
          </nav>
          <button onClick={Logout} className="logoutButton">Logout</button>
        </div>
        
      </div>
      
    </>
  )
}

export default NavbarForm
