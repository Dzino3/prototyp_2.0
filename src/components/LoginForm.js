import React, { useState } from 'react';
import './style/loginStyle.css'




function LoginForm({Login, error}) {
    const [details, setDetails] = useState({acc: "", unit: ""});

    const submitHandler = e => {
        console.log(details.unit)
        e.preventDefault();

        Login(details);
    }

  return (
    <div className='loginFormWhole'>
    <div className='backImg'></div>
    <div className='fuckYou'>
    <div className='logoImg'></div>
    <form onSubmit={submitHandler} className='loginForm'>
        <div className='form-inner'>
        <h2 className='loginH2'>Welcome to the Tracker</h2>
            
        <select id="country" name="country" onChange={e => setDetails({...details, unit: e.target.value})}>
            <option>Select your (unit) country</option>
            
            <option value="48">(48) Austria</option>
            <option value="48">(48) Belgium</option>
            <option value="48">(48) Bulgaria</option>
            <option value="48">(48) Croatia</option>
            <option value="48">(48) Cyprus</option>
            <option value="48">(48) Czech Republic</option>
            <option value="48">(48) Denmark</option>
            <option value="48">(48) Estonia</option>
            <option value="48">(48) Finland</option>
            <option value="22">(22) France</option>
            <option value="48">(48) French Guiana</option>
            <option value="27">(27) Germany</option>
            <option value="31">(31) Great Britain</option>
            <option value="48">(48) Greece</option>
            <option value="48">(48) Hungary</option>
            <option value="48">(48) Iceland</option>
            <option value="31">(31) Ireland</option>
            <option value="48">(48) Israel</option>
            <option value="41">(41) Italy</option>
            <option value="48">(48) Kazakhstan</option>
            <option value="48">(48) Latvia</option>
            <option value="48">(48) Lithuania</option>
            <option value="48">(48) Luxembourg</option>
            <option value="48">(48) Netherlands</option>
            <option value="48">(48) Norway</option>
            <option value="4P">(4P) Poland</option>
            <option value="32">(32) Portugal</option>
            <option value="32">(32) Romania</option>
            <option value="3R">(3R) Russia/Kalinigrad</option>
            <option value="48">(48) Serbia</option>
            <option value="48">(48) Slovakia</option>
            <option value="48">(48) Slovenia</option>
            <option value="32">(32) Spain</option>
            <option value="48">(48) Sweden</option>
            <option value="48">(48) Switzerland</option>
            <option value="48">(48) Ukraine</option>
        </select>
        

            
            <div className='loginForm-group'>
                {(error !== "") ? (<div className='error'>{error}</div>) : ""}
                <label className='loginLabel'>Account number:</label>
                <input type="text" name='acc' id='acc'className='loginInput' onChange={e => setDetails({...details, acc: e.target.value})} value={details.acc}></input>
                <input type="submit" value="Login" className='loginButton'></input>
            </div>
            
        </div>
    </form>
    </div>
    </div>
  )
}


export default LoginForm
