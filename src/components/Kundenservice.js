import React from 'react'
import './style/kundenserviceStyle.css';

function Kundenservice() {
  return (
    <>
    <details className="custom-select">
      <summary className="radios">
        <input className='kundenInput' type="radio" name="item" id="default" title="Customer support" checked />
        <input className='kundenInput' type="radio" name="item" id="item1" title="FAQ" />
        <input className='kundenInput' type="radio" name="item" id="item2" title="Service" />
        <input className='kundenInput' type="radio" name="item" id="item3" title="Newsletter" />
        <input className='kundenInput' type="radio" name="item" id="item4" title="Privacy policy" />
      </summary>
      <ul className="list">
        <li className='kundenLi'>
        <label for="item1">
          <a href='https://www.deere.de/de/ersatzteile-und-service/ersatzteile/suche-nach-teilen-h%C3%A4ufig-gestellte-fragen/' target="blank">FAQ</a>
          <span></span>
        </label>
        </li>
        <li className='kundenLi'>
          <label for="item2">
            <a target="blank" href='https://www.deere.de/de/ersatzteile-und-service/service/'>Service</a>
            </label>
        </li>
        <li className='kundenLi'>
          <label for="item3">
            <a target="blank" href='https://www.deere.de/de/forms/digital-news-service/'>Newsletter</a>
          </label>
        </li>
        <li className='kundenLi'>
          <label for="item4">
            <a target="blank" href='https://www.deere.de/de/datenschutzerkl%C3%A4rung/'>Privacy and Data</a>
            </label>
        </li>
        </ul>
    </details>
    </>
  )
}

export default Kundenservice