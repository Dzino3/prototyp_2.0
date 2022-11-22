import React from 'react'
import './style/footerStyle.css';

function FooterForm() {
  return (
    <div className='footer'>
        <div className='footerLinks'>
        <a href='https://www.deere.de/de/index.html' target="blank">Home</a>
        <a href='https://www.deere.com/en/our-company/contact-us/' >Contact us</a>
        <a href='https://www.deere.de/de/forms/digital-news-service/' target="blank">Newsletter</a>
        <a href='https://www.deere.de/de/impressum/' target="blank">Impressum</a>
        <a href='https://www.deere.de/de/ersatzteile-und-service/ersatzteile/suche-nach-teilen-h%C3%A4ufig-gestellte-fragen/' target="blank">FAQ</a>
        <a href='https://www.deere.de/de/datenschutzerkl%C3%A4rung/' target="blank">Privacy and Data</a>
        <a href='https://www.deere.com/en/privacy-and-data/terms/index.html' target="blank">Terms of Use</a>
        <a href='https://www.deere.de/de/ersatzteile-und-service/service/' target="blank">Services</a>
      </div>
      <p className='copyright'>Copyright © 2022 Deere & Company. All Rights Reserved.</p>
    </div>
  )
}

export default FooterForm