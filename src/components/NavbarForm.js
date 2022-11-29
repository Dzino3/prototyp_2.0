import React from 'react';
import Kundenservice from './Kundenservice';
import './style/navbarStyle.css';


function NavbarForm({Logout, ShowsOrdersFalse, ShowsOrdersTrue , t}) {



  return (
    <>       
      <div className='navbarDiv'>
        <div className='navbarContainer'>
          <div className='logoImgNav'></div>
          <nav className='navbarNav'>
            <ul className='navbarUl'>
              <li className='li'><a onClick={()=>{ShowsOrdersTrue();}}>{t('navbarLabel1')}</a></li>
              <li className='li'><a onClick={()=>{ShowsOrdersFalse();}}>{t('navbarLabel2')}</a></li>
              <li className='li'><a className='impressum' href='https://www.deere.de/de/impressum/' target="_blank" rel="noopener noreferrer">{t('navbarLabel3')}</a></li>
              <li className='li'><Kundenservice t={t}></Kundenservice></li>
            </ul>
          </nav>
          <button onClick={Logout} className="logoutButton">{t('navbarLabel5')}</button>
        </div>
      </div>
    </>
  )
}

export default NavbarForm
