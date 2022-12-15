import React from 'react'
import './style/kundenserviceStyle.css';

//Subcomponent for navbar
function Kundenservice({t}) {
  return (
    <>
    <details className="custom-select">
      <summary className="radios">
        {t('navbarLabel4')}
      </summary>
      <ul className="list">
        <li className='kundenLi'>
        <label for="item1">
          <a href='https://www.deere.de/de/ersatzteile-und-service/ersatzteile/suche-nach-teilen-h%C3%A4ufig-gestellte-fragen/' target="blank">{t('navbarLabel4o1')}</a>
          <span></span>
        </label>
        </li>
        <li className='kundenLi'>
          <label for="item2">
            <a target="blank" href='https://www.deere.de/de/ersatzteile-und-service/service/'>{t('navbarLabel4o2')}</a>
            </label>
        </li>
        <li className='kundenLi'>
          <label for="item3">
            <a target="blank" href='https://www.deere.de/de/forms/digital-news-service/'>{t('navbarLabel4o3')}</a>
          </label>
        </li>
        <li className='kundenLi'>
          <label for="item4">
            <a target="blank" href='https://www.deere.de/de/datenschutzerkl%C3%A4rung/'>{t('navbarLabel4o4')}</a>
            </label>
        </li>
        </ul>
    </details>
    </>
  )
}

export default Kundenservice