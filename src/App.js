import React, { useState } from 'react';
import Axios from "axios"; //backend communication
import { useTranslation, Trans } from 'react-i18next' //library for translating text
//import for every main component
import LoginForm from './components/LoginForm';
import OrderForm from './components/OrderForm';
import NavbarForm from './components/NavbarForm';
import AvailabilityForm from './components/AvailabilityForm';
import ListForm from './components/ListForm';
import HeroForm from './components/HeroForm';
import FooterForm from './components/FooterForm';
import AvailabilityListForm from './components/AvailabilityListForm';
import About from './components/AboutJohnDeere';
import LngChange from './components/components-info/LanguageChange';
//style import
import './components/style/appStyle.css';


//Languages
const lngs = {
  en: { nativeName: 'EN'},
  de: { nativeName: 'DE'}
}

/*
 Main function for rendering
*/
function App() {
  //funktion for translatin. Uses data from i18next.js file
  const { t, i18n } = useTranslation();

  const adminUser = { name: "admin123" }
  const [user, setUser] = useState({ acc: '' , unit: '', dealer: ''});
  const [error, setError] = useState("");
  //if showsOrders === true then the orderlist etc gets shown if its false then the productslist will be shown
  const [showsOrders, setShowsOrders] = useState(true);
 
  //Function for logging in. Sets user to the combination of Unit code and ACC, also checks if the entered data is in the database
  const Login = details => {
    if(details.acc === adminUser.name){
      setUser({
        acc: details.acc
      });
    }
    //checks if the user is in the database, also resolves errors
    Axios.post("https://codux.herokuapp.com/login", { ACC: details.acc, UNIT: details.unit }).then((response) => {
      if (response.data.length === 0 || details.acc !== response.data[0].ACC) {
        setError(t('error'))
        setTimeout(() => setError(""), 900);
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

  //Function to set User to nothing, automaticlly logging the user out
  const Logout = details => {
    setUser({ acc: "" });
  }

  //Functions for switching between Orders page and Products page
  const ShowsOrdersFalse = ()=>{
      setShowsOrders(false);
  }
  const ShowsOrdersTrue = ()=>{
    setShowsOrders(true);    
  }

  /* 
  Returns what will be rendered
  Imported components are used - every component has its own return

  */
  return (
    <>
      <div className="App">
        {/*If the user is not set it will show the login page, if it is set it shows the main page (Orders) */}
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
            <About t={t}></About>
            <FooterForm t={t}></FooterForm>
          </div>
        ) : (
          <>
            <div className='lngsLogin'>
              <LngChange lngs={lngs} i18n={i18n}></LngChange>
            </div>
            <LoginForm Login={Login} error={error} t={t}></LoginForm>
          </>
        )
        }
      </div>
    </>
  );
}


export default App;
