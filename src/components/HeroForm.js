import React, { useReducer } from 'react'
import './style/heroStyle.css';

function HeroForm({user , t}) {
  return (
    <>
    <div class="parallax"></div>
      <div className='heroDiv'>
          <h1>{t('heroWelcome')} <span>Local Tractors GmbH</span></h1>
      </div>
    </>
  )
}

export default HeroForm
