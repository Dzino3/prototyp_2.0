import React, { useState } from 'react';
import './style/loginStyle.css'
import { useTranslation } from 'react-i18next'



function LoginForm({Login, error, t}) {

    const [details, setDetails] = useState({acc: "", unit: ""});
    const submitHandler = e => {
        console.log(details.unit)
        e.preventDefault();

        Login(details);
    }

  return (
    <div className='loginFormWhole'>
    <div className='backImg'></div>
    <div className='loginDivnt'>
    <div className='logoImg'></div>
    <form onSubmit={submitHandler} className='loginForm'>
        <div className='form-inner'>
        <h2 className='loginH2'>{t('loginWelcome')}</h2>
            
        <select className='countrySelect' id="country" name="country" onChange={e => setDetails({...details, unit: e.target.value})}>
            <option>{t('loginSelect')}</option>
            
            <option className='unitOption' value="48">(48) Austria</option>
            <option className='unitOption' value="48">(48) Belgium</option>
            <option className='unitOption' value="48">(48) Bulgaria</option>
            <option className='unitOption' value="48">(48) Croatia</option>
            <option className='unitOption' value="48">(48) Cyprus</option>
            <option className='unitOption' value="48">(48) Czech Republic</option>
            <option className='unitOption' value="48">(48) Denmark</option>
            <option className='unitOption' value="48">(48) Estonia</option>
            <option className='unitOption' value="48">(48) Finland</option>
            <option className='unitOption' value="22">(22) France</option>
            <option className='unitOption' value="48">(48) French Guiana</option>
            <option className='unitOption' value="27">(27) Germany</option>
            <option className='unitOption' value="31">(31) Great Britain</option>
            <option className='unitOption' value="48">(48) Greece</option>
            <option className='unitOption' value="48">(48) Hungary</option>
            <option className='unitOption' value="48">(48) Iceland</option>
            <option className='unitOption' value="31">(31) Ireland</option>
            <option className='unitOption' value="48">(48) Israel</option>
            <option className='unitOption' value="41">(41) Italy</option>
            <option className='unitOption' value="48">(48) Kazakhstan</option>
            <option className='unitOption' value="48">(48) Latvia</option>
            <option className='unitOption' value="48">(48) Lithuania</option>
            <option className='unitOption' value="48">(48) Luxembourg</option>
            <option className='unitOption' value="48">(48) Netherlands</option>
            <option className='unitOption' value="48">(48) Norway</option>
            <option className='unitOption' value="4P">(4P) Poland</option>
            <option className='unitOption' value="32">(32) Portugal</option>
            <option className='unitOption' value="32">(32) Romania</option>
            <option className='unitOption' value="3R">(3R) Russia/Kalinigrad</option>
            <option className='unitOption' value="48">(48) Serbia</option>
            <option className='unitOption' value="48">(48) Slovakia</option>
            <option className='unitOption' value="48">(48) Slovenia</option>
            <option className='unitOption' value="32">(32) Spain</option>
            <option className='unitOption' value="48">(48) Sweden</option>
            <option className='unitOption' value="48">(48) Switzerland</option>
            <option className='unitOption' value="48">(48) Ukraine</option>
        </select>
        

            
            <div className='loginForm-group'>
                {(error !== "") ? (<div className='error'>{error}</div>) : ""}
                <input type="text" name='acc' id='acc'className='loginInput' placeholder={t('loginAccN')} onChange={e => setDetails({...details, acc: e.target.value})} value={details.acc}></input>
                <input type="submit" value={t('loginButton')} className='loginButton'></input>
            </div>
            
        </div>
    </form>
    </div>
    </div>
  )
}


export default LoginForm
