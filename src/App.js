import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import OrderForm from './components/OrderForm';
import NavbarForm from './components/NavbarForm';
import AvailabilityForm from './components/AvailabilityForm';
import ListForm from './components/ListForm';
import HeroForm from './components/HeroForm';
import FooterForm from './components/FooterForm';
import './components/style/appStyle.css';
import Axios from "axios";

function App() {
  const adminUser = { name: "admin123" }
  const [user, setUser] = useState({ acc: "" , unit: ""});
  const [error, setError] = useState("");


  const Login = details => {
    if(details.acc === adminUser.name){
      setUser({
        acc: details.acc
      });
    }
    Axios.post("https://codux.herokuapp.com/login", { ACC: details.acc, UNIT: details.unit }).then((response) => {
      if (response.data.length === 0 || details.acc !== response.data[0].ACC) {
        setError("Wrong Input")
      } else {

        setUser({
          acc: details.acc,
          unit:  details.unit
        });
      }
    });
  }

  const Logout = details => {
    setUser({ acc: "" });
  }

  return (
    <>
      <div className="App">
        {(user.acc !== "") ? (
          <div className='website'>
            <NavbarForm Logout={Logout}></NavbarForm>
            <div className='pageContent'>
              <HeroForm user={user}></HeroForm>
              <div className='mainContent'>
                <OrderForm user={user} error={error} setError={setError}></OrderForm>
                <AvailabilityForm user={user}></AvailabilityForm>
                <ListForm user={user}></ListForm>
              </div>
            </div>
            <FooterForm></FooterForm>
          </div>
        ) : (
          <LoginForm Login={Login} error={error}></LoginForm>
        )
        }
      </div>
    </>
  );
}


export default App;
