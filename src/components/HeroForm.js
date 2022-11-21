import React, { useReducer } from 'react'
import './style/heroStyle.css';

function HeroForm({user}) {
  return (
    <div className='heroDiv'>
        <h1>Welcome, <span>{user.dealer}</span></h1>
    </div>
  )
}

export default HeroForm
