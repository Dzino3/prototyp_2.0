import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import OrderForm from './components/OrderForm';
import NavbarForm from './components/NavbarForm';
import AvailabilityForm from './components/AvailabilityForm';
import ListForm from './components/ListForm';
import HeroForm from './components/HeroForm';
import FooterForm from './components/FooterForm';
import AvailabilityListForm from './components/AvailabilityListForm';
import './components/style/appStyle.css';
import Axios from "axios";
import { useTranslation, Trans } from 'react-i18next'

//Sprachen
const lngs = {
  en: { nativeName: 'EN'},
  de: { nativeName: 'DE'}
}

function App() {
  //funktion für Übersetzungen 
  const { t, i18n } = useTranslation();

  const adminUser = { name: "admin123" }
  const [user, setUser] = useState({ acc: '' , unit: '', dealer: ''});
  const [error, setError] = useState("");
  //if showsOrders === true then the orderlist etc gets shown if its false then the productslist will be shown
  const [showsOrders, setShowsOrders] = useState(true);
 
  const Login = details => {
    if(details.acc === adminUser.name){
      setUser({
        acc: details.acc
      });
    }
    Axios.post("https://codux.herokuapp.com/login", { ACC: details.acc, UNIT: details.unit }).then((response) => {
      if (response.data.length === 0 || details.acc !== response.data[0].ACC) {
        setError(t('error'))
      } else {
        setError("")
        setUser({
          acc: details.acc,
          unit:  details.unit,
          dealer: response.data[0].DEALER
        });
      }
    });
  }

  const Logout = details => {
    setUser({ acc: "" });
  }

  const ShowsOrdersFalse = ()=>{
      setShowsOrders(false);
  }
  const ShowsOrdersTrue = ()=>{
    setShowsOrders(true);    
  }

  return (
    <>
    
      <div className="App">
        {(user.acc !== "") ? (
          <div className='website'>
            <div>
              <NavbarForm lngs={lngs} i18n={i18n} Logout={Logout} ShowsOrdersFalse={ShowsOrdersFalse} ShowsOrdersTrue={ShowsOrdersTrue} t={t}/>
            </div>
            <div className='pageContent'>
              
              <HeroForm user={user} t={t}></HeroForm>
              {(showsOrders === true) ? (
                <div className='mainContent'>
                  
                  <OrderForm user={user} error={error} setError={setError} t={t}></OrderForm>
                  <ListForm user={user} t={t}></ListForm>
                </div>) : (
                <div className="availabilityContent">
                  <div className='mainContent'>
                    <AvailabilityForm user={user} t={t}></AvailabilityForm>
                    <AvailabilityListForm user={user} t={t}></AvailabilityListForm>
                  </div>
                </div>)}
            </div>
            <FooterForm t={t}></FooterForm>
          </div>
        ) : (
          <LoginForm Login={Login} error={error} t={t}></LoginForm>
        )
        }
      </div>
    </>
  );
}


export default App;
