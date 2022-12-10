import React from 'react'
import './style/aboutJohndeereStyle.css'

function AboutJohnDeere({t}) {
  return (
    <div className='aboutWhole'>
        <h2>{t('aboutH2')}</h2>
        <div className='about1'>
            <div className='about1Img'></div>
            <div className='about1Group'>
                <h2>{t('aboutH2_1')}</h2>
                <p className='aboutText'>{t('aboutText1')}</p>
                <input className='aboutButton' type="button" value={t('aboutButton')}></input>
            </div>
        </div>
        <div className='about2'>
            <div className='about2Group'>
                <h2>{t('aboutH2_2')}</h2>
                <p className='aboutText'>{t('aboutText2')}</p>
                <input className='aboutButton' type="button" value={t('aboutButton')}></input>
            </div>
            <div className='about2Img'></div>
        </div>
        <div className='about3'>
            <div className='about3Img'></div>
            <div className='about3Group'>
                <h2>{t('aboutH2_3')}</h2>
                <p className='aboutText'>{t('aboutText3')}</p>
                <input className='aboutButton' type="button" value={t('aboutButton')}></input>
            </div>
        </div>
        <div className='aboutIcons'>
            <a className='aboutIconsFirst' target="blank" href='https://www.facebook.com/JohnDeereDeutschland/'><div className='facebookImg' ></div></a>
            <a target="blank" href='https://www.youtube.com/user/JohnDeereDeutschland'><div className='youtubeImg'></div></a>
            <a target="blank" href='https://de.linkedin.com/company/john-deere'><div className='linkedinImg'></div></a>
        </div>
    </div>
  )
}

export default AboutJohnDeere
