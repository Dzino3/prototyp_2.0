import React from 'react';
import Kundenservice from './Kundenservice';
import './style/navbarStyle.css';
import './style/lngStyle.css'


function NavbarForm({Logout, ShowsOrdersFalse, ShowsOrdersTrue , t,i18n, lngs}) {

  const lngChange = () =>{

  }


  return (
    <>       
      <div className='navbarDiv'>
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
