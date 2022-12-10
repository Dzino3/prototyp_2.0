import React, { useState } from 'react';
import Kundenservice from './Kundenservice';
import "./style/appStyle.css"
import './style/navbarStyle.css';
import './style/lngStyle.css'


function NavbarForm({ Logout, ShowsOrdersFalse, ShowsOrdersTrue, t, i18n, lngs }) {
  const [showLinks, setShowLinks] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const lngChange = "Lng";

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
          <div className='lngSelect'>
            <details className="custom-select-Lng">
              <summary className="radios-Lng">
                
              </summary>
              <ul className="list-Lng">
                <li className='kundenLi-Lng'>

                  {Object.keys(lngs).map((lng) => (

                    <input for={lngs[lng].nativeName} className='lngButton' type='button' value={lngs[lng].nativeName} key={lng} onClick={() => { i18n.changeLanguage(lng); lngChange = lngs[lng].nativeName }} disabled={i18n.resolvedLanguage === lng}></input>

                  ))}

                </li>
              </ul>
            </details>
          </div>
          <button onClick={Logout} className="logoutButton">{t('navbarLabel5')}</button>
        </div>
      </div>
      

      {/*
        <div className='navbarContainer'>
          <div className='logoImgNav'></div>
            <div className='lngSelect'>
              <details className="custom-select-Lng">
                <summary className="radios-Lng">
                  <input className='kundenInput-Lng' type="radio" name="item-Lng" id="default" title="Lng" checked/>
                  <input className='kundenInput-Lng' type="radio" name="item-Lng" id="EN" title="EN"/>
                  <input className='kundenInput-Lng' type="radio" name="item-Lng" id="DE" title="DE"/>
                </summary>
                <ul className="list-Lng">
                  <li className='kundenLi-Lng'>
                    
                      {Object.keys(lngs).map((lng) => (
                        
                          <input for={lngs[lng].nativeName} className='lngButton' type='button' value={lngs[lng].nativeName} key={lng} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}></input>
                        
                      ))}
                    
                  </li>
                </ul>
              </details>
            </div>
          <nav className='navbarNav'>
            <ul className='navbarUl'>
              <li className='li'><a onClick={()=>{ShowsOrdersTrue();}}>{t('navbarLabel1')}</a></li>
              <li className='li'><a onClick={()=>{ShowsOrdersFalse();}}>{t('navbarLabel2')}</a></li>
              <li className='li'><Kundenservice t={t}></Kundenservice></li>
            </ul>
          </nav>
          <button onClick={Logout} className="logoutButton">{t('navbarLabel5')}</button>
                      </div>
      </div>*/}
    </>
  )
}

export default NavbarForm
