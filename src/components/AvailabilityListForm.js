import React, { useState, useEffect } from 'react';
import './style/listStyle.css';
import './style/showStatusStayle.css';
import './style/filterStyle.css'
import ListItem from './components-info/AvalabilityListItem';
import Checkbox from './Checkbox';
import Axios from 'axios';
import FilterComponent from './FilterComponent';

function AvailabilityListForm({ user, t }) {
  const [products, setProducts] = useState([]); //List of all product names
  const [amountOfProductsShown, setAmountOfProductsShown] = useState(5); //Amount of products
  const [filter, setFilter] = useState([]) //For filtering Orders
  const [sort, setSort] = useState({ sorting_type: "", ascending: false }); //For sorting 
  const shipDatesInOrder = ["JANUARY", "APRIL", "MAY", "OCTOBER", "October", "NOVEMBER", "DECEMBER", "JANUARY 23", "FEBRUARY 23", "MARCH 23","APRIL 23","sold out", "-", "please contact your BP for lead time"]

  //gets called once when the landing page loads
  useEffect(() => {
    Axios.post("https://codux.herokuapp.com/products_list").then((response) => {
      if (response.data.length !== 0) {
        setProducts(response.data);
      } else {
        setProducts([]);
      }
    });

  }, []);

  //decides how many orders are rendered
  const showAll = () => {
    if (amountOfProductsShown === products.length) {
      setAmountOfProductsShown(5)
    } else {
      setAmountOfProductsShown(products.length)
    }

  };

  function checkFilter(category) {
    if (filter.length === 0) {
      return true;
    }
    var gets_shown = false
    //if the given process_status is mentioned in the filter array then the order gets shown to the user
    filter.map((f) => {
      if (category === f) {
        gets_shown = true;
        return;
      }
    })
    return gets_shown;
  }

  function addFilter(fil) {
    if (filter.indexOf(fil) > -1) {
      //filter exists already so it gets removed
      setFilter(current => current.filter((filter_item) => filter_item !== fil))
    } else {
      setFilter(current => [...current, fil])
    }
  }
  function removeAllFilter(a){
    filter.map((element)=>{
      setFilter(current => current.filter((filter_item) => filter_item !== element))
    })
    
  }


  function checkSort(a, b) {
    switch (sort.sorting_type) {
      case "ship_date":
        if (sort.ascending) {return shipDatesInOrder.indexOf(a.BEST_CASE) > shipDatesInOrder.indexOf(b.BEST_CASE) ? 1 : -1}
        else {return shipDatesInOrder.indexOf(a.BEST_CASE) > shipDatesInOrder.indexOf(b.BEST_CASE) ? -1 : 1}
      case "base_code_description":
        if (sort.ascending) { return a.PRODUCT > b.PRODUCT ? 1 : -1 }
        else { return a.PRODUCT > b.PRODUCT ? -1 : 1 }

      case "base_code":
        if (sort.ascending) { return a.BASE_CODE > b.BASE_CODE ? 1 : -1 }
        else { return a.BASE_CODE > b.BASE_CODE ? -1 : 1 }

    }
  }
  function addSort(sor, isAscending) {
    setSort({ sorting_type: sor, ascending: isAscending });
  }

  //function for translating category of every product
  function translateCategory(x){
    switch(x){
      case "Commercial Mowing":
        return t('avalListLabel3o1');
      case "Compact Utility Tractors & Loaders":
        return t('avalListLabel3o2');
      case "Golf":
        return t('avalListLabel3o3');
      case "Riding Lawn Tractors":
        return t('avalListLabel3o4');
      case "Utility Tractors":
        return t('avalListLabel3o5');
      case "Utility Vehicles":
        return t('avalListLabel3o6');
    }
  }


  return (
    <>
      <div className='listDiv'>
        <h2 className='listH2'>{t('avalListLabel1')}</h2>
        <div className='listCheckDivHelperAval'>
          <div className='avalCheckDiv'>

            {/*Sorting part of the list */}
            <div className="checkboxDiv">
              <details className="custom-select-Show-2">
                <summary className="radios-Show-2">
                  <input className='kundenInput-Show-2' type="radio" name="item-Show-2" id="default-Show-2" title={t('avalListLabel2')} checked />
                </summary>
                <ul className="list-Show-2">
                <li className='kundenLi-Show-2'>
                    <label for="item1-Sort-2">
                      <input className='sortButton' type="button" value={t('avalListLabel2o5')} onClick={() => addSort("ship_date", false)}></input>
                    </label>
                  </li>
                  <li className='kundenLi-Show-2'>
                    <label for="item2-Sort-2">
                      <input className='sortButton' type="button" value={t('avalListLabel2o6')} onClick={() => addSort("ship_date", true)}></input>
                    </label>
                  </li>
                  <li className='kundenLi-Show-2'>
                    <label for="item3-Sort-2">
                      <input className='sortButton' type="button" value={t('avalListLabel2o1')} onClick={() => addSort("base_code_description", false)}></input>
                    </label>
                  </li>
                  <li className='kundenLi-Show-2'>
                    <label for="item4-Sort-2">
                      <input className='sortButton' type="button" value={t('avalListLabel2o2')} onClick={() => addSort("base_code_description", true)}></input>
                    </label>
                  </li>
                  <li className='kundenLi-Show-2'>
                    <label for="item5-Sort-2">
                      <input className='sortButton' type="button" value={t('avalListLabel2o3')} onClick={() => addSort("base_code", false)}></input>
                    </label>
                  </li>
                  <li className='kundenLi-Show-2'>
                    <label for="item6-Sort-2">
                      <input className='sortButton' type="button" value={t('avalListLabel2o4')} onClick={() => addSort("base_code", true)}></input>
                    </label>
                  </li>
                </ul>
              </details>
            </div>
          
            {/*Filtering part of the list */}
            <div className="checkboxDiv">
              <details className="custom-select-Show">
                <summary className="radios-Show">
                  <input className='kundenInput-Show' type="radio" name="item-Show" id="default-Show" title={t('avalListLabel3')} checked />
                </summary>
                <ul className="list-Show">
                  <li className='kundenLi-Show'>
                    <label for="item1-Show">
                      <Checkbox className='checkboxHover' label={t('avalListLabel3o1')} onClick={() => addFilter("Commercial Mowing")} checked={false}></Checkbox>
                      <span></span>
                    </label>
                  </li>
                  <li className='kundenLi-Show'>
                    <label for="item2-Show">
                      <Checkbox label={t('avalListLabel3o2')} onClick={() => addFilter("Compact Utility Tractors & Loaders")} checked={false}></Checkbox>
                    </label>
                  </li>
                  <li className='kundenLi-Show'>
                    <label for="item3-Show">
                      <Checkbox label={t('avalListLabel3o3')} onClick={() => addFilter("Golf")} checked={false}></Checkbox>
                    </label>
                  </li>
                  <li className='kundenLi-Show'>
                    <label for="item4-Show">
                      <Checkbox label={t('avalListLabel3o4')} onClick={() => addFilter("Riding Lawn Tractors")} checked={false}></Checkbox>
                    </label>
                  </li>
                  <li className='kundenLi-Show'>
                    <label for="item5-Show">
                      <Checkbox label={t('avalListLabel3o5')} onClick={() => addFilter("Utility Tractors")} checked={false}></Checkbox>
                    </label>
                  </li>
                  <li className='kundenLi-Show'>
                    <label for="item6-Show">
                      <Checkbox label={t('avalListLabel3o6')} onClick={() => addFilter("Utility Vehicles")} checked={false}></Checkbox>
                    </label>
                  </li>
                </ul>
              </details>
            </div>
          
          </div>
          {/*Filter Component, shows pressed filter components*/}
          <div className='filterComponentsDivAval'>
            {filter.length > 0 ? <FilterComponent name={t('listFilter2')} para={null} func={removeAllFilter}></FilterComponent> : <></>}
            {filter.map((element) => {
              return <FilterComponent name={translateCategory(element)} para={element} func={addFilter}></FilterComponent>
            })}
          </div>
        </div>


        <div className='wrapper'>
          <div className='accordion'>
            {products.length !== 0 ?
              //if the backend responded with a list of all order, every order gets displayed
              products.filter(unfiltered_item => checkFilter(unfiltered_item.CATEGORY) === true).sort((a, b) => checkSort(a, b)).map((item, index) => {
                //products.sort((a,b) => checkSort(a,b)).map((item, index) => {
                //either 5 or all orders are rendered
                if (index < amountOfProductsShown) {
                  return <ListItem user={user} item={item} t={t}></ListItem>;
                }
              })
            : <></>}
          </div>
        </div>
        <input className='checkButtonShow' type="button" value={amountOfProductsShown !== products.length ? t('listButton1') : t('listButton2')} onClick={showAll}></input>
      </div>
    </>
  )
}

export default AvailabilityListForm
