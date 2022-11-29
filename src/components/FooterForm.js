import React from 'react'
import './style/footerStyle.css';

function FooterForm({t}) {
  return (
    <div className='footer'>
        <div className='footerLinks'>
        <a href='https://www.deere.de/de/index.html' target="blank">{t('footerLabel1')}</a>
        <a href='https://www.deere.com/en/our-company/contact-us/' >{t('footerLabel2')}</a>
        <a href='https://www.deere.de/de/forms/digital-news-service/' target="blank">{t('footerLabel3')}</a>
        <a href='https://www.deere.de/de/impressum/' target="blank">{t('footerLabel4')}</a>
        <a href='https://www.deere.de/de/ersatzteile-und-service/ersatzteile/suche-nach-teilen-h%C3%A4ufig-gestellte-fragen/' target="blank">{t('footerLabel5')}</a>
        <a href='https://www.deere.de/de/datenschutzerkl%C3%A4rung/' target="blank">{t('footerLabel6')}</a>
        <a href='https://www.deere.com/en/privacy-and-data/terms/index.html' target="blank">{t('footerLabel7')}</a>
        <a href='https://www.deere.de/de/ersatzteile-und-service/service/' target="blank">{t('footerLabel8')}</a>
      </div>
      <p className='copyright'>{t('footerLabel9')}</p>
    </div>
  )
}

export default FooterForm
