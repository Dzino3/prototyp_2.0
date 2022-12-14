import React, { useState } from 'react';
import Kundenservice from './Kundenservice';
import LngChange from './components-info/LanguageChange';
import "./style/appStyle.css"
import './style/navbarStyle.css';
import './style/lngStyle.css'


function NavbarForm({ Logout, ShowsOrdersFalse, ShowsOrdersTrue, t, i18n, lngs }) {
  const [showLinks, setShowLinks] = useState(false)
  const [navbar, setNavbar] = useState(false)
  

  const changeBackground = () =>{
    if(window.scrollY >= 100){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <>
      <div className={navbar ? 'navbarDiv active' : 'navbarDiv'}>

        <div className="leftSide">
          <div className="links" id={showLinks ? "hidden" : ""}>
            <a className="realLink" onClick={() => { ShowsOrdersTrue(); }}>{t('navbarLabel1')}</a>
            <a className="realLink" onClick={() => { ShowsOrdersFalse(); }}>{t('navbarLabel2')}</a>
            <Kundenservice t={t}></Kundenservice>
            <a className="hiddenLink" href='https://www.deere.de/de/ersatzteile-und-service/ersatzteile/suche-nach-teilen-h%C3%A4ufig-gestellte-fragen/' target="blank">{t('navbarLabel4o1')}</a>
            <a className="hiddenLink" target="blank" href='https://www.deere.de/de/ersatzteile-und-service/service/'>{t('navbarLabel4o2')}</a>
            <a className="hiddenLink" target="blank" href='https://www.deere.de/de/forms/digital-news-service/'>{t('navbarLabel4o3')}</a>
            <a className="hiddenLink" target="blank" href='https://www.deere.de/de/datenschutzerkl%C3%A4rung/'>{t('navbarLabel4o4')}</a>
          </div>
          <button className="showLinksButton" onClick={() => setShowLinks(!showLinks)}></button>
        </div>
        <div><a target="blank" href="https://www.deere.de/de/index.html" className='logoImgNav'></a></div>
        <div className="rightSide">
          <LngChange lngs={lngs} i18n={i18n}></LngChange>
          <button onClick={Logout} className="logoutButton">{t('navbarLabel5')}</button>
        </div>
      </div>
    </>
  )
}

export default NavbarForm
