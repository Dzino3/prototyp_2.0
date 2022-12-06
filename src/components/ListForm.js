import React, { useState, useEffect } from 'react';
import './style/listStyle.css';
import './style/showStatusStayle.css';
import './style/filterStyle.css'
import ListItem from './components-info/OrderListItem';
import Checkbox from './Checkbox';
import Axios from 'axios';
import FilterComponent from './FilterComponent';

function ListForm({ user, t }) {
  const [orders, setOrders] = useState([]);
  const [amountOfOrdersShown, setAmountOfOrdersShown] = useState(5);
  const [filter, setFilter] = useState([])
  const [sort, setSort] = useState({ sorting_type: "", ascending: false });

  //gets called once when the landing page loads
  useEffect(() => {
    Axios.post("https://codux.herokuapp.com/order_list", { acc: user.acc, unit: user.unit }).then((response) => {
      if (response.data.length !== 0) {
        setOrders(response.data);
      } else {
        setOrders([]);
      }
    });

  }, []);

  //decides how many orders are rendered
  const showAll = () => {
    if (amountOfOrdersShown === orders.length) {
      setAmountOfOrdersShown(5)
    } else {
      setAmountOfOrdersShown(orders.length)
    }

  };

  function checkFilter(process_status) {
    if (filter.length === 0) {
      return true;
    }
    var gets_shown = false
    //if the given process_status is mentioned in the filter array then the order gets shown to the user
    filter.map((f) => {
      if (process_status === f) {
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

  function removeFilter(fil){
    if (filter.indexOf(fil) > -1) {
      setFilter(current => current.filter((filter_item) => filter_item !== fil))
    }
  }


  function checkSort(a, b) {
    switch (sort.sorting_type) {
      case "order_number":
        if (sort.ascending) { return a.ORDER_NUMBER > b.ORDER_NUMBER ? 1 : -1 }
        else { return a.ORDER_NUMBER > b.ORDER_NUMBER ? -1 : 1 }
      case "base_code_description":
        if (sort.ascending) { return a.BASE_CODE_DESCR > b.BASE_CODE_DESCR ? 1 : -1 }
        else { return a.BASE_CODE_DESCR > b.BASE_CODE_DESCR ? -1 : 1 }

    }
  }
  function addSort(sor, isAscending) {
    setSort({ sorting_type: sor, ascending: isAscending });
  }

  /*
  <Checkbox label="Show Sourced" onClick={()=>addFilter("sourced")} checked={true}></Checkbox>
  <Checkbox label="Show Unsourced" onClick={()=>addFilter("unsourced")} checked={true}></Checkbox>
  <Checkbox label="Show Inventory" onClick={()=>addFilter("inventory")} checked={true}></Checkbox>
  <Checkbox label="Show Canceled" onClick={()=>addFilter("canceled")} checked={false}></Checkbox>
  */

  return (
    <>
      <div className='listDiv'>
        {orders.length !== 0 ? <h2 className='listH2'>{t('listLabel1')} {orders.length}</h2> : <h2 className='listH2'>{t('listLabel1')} </h2>}

        <div className='listCheckDiv'>
          <div className="checkboxDiv">
            <details className="custom-select-Show-2">
              <summary className="radios-Show-2">
                <input className='kundenInput-Show-2' type="radio" name="item-Show-2" id="default-Show-2" title={t('listSort1')} checked />
              </summary>
              <ul className="list-Show-2">
                <li className='kundenLi-Show-2'>
                  <label for="item1-Sort-2">
                    <input className='sortButton' type="button" value={t('listSort1o1')} onClick={() => addSort("order_number", false)}></input>
                  </label>
                </li>
                <li className='kundenLi-Show-2'>
                  <label for="item2-Sort-2">
                    <input className='sortButton' type="button" value={t('listSort1o2')} onClick={() => addSort("order_number", true)}></input>
                  </label>
                </li>
                <li className='kundenLi-Show-2'>
                  <label for="item3-Sort-2">
                    <input className='sortButton' type="button" value={t('listSort1o3')} onClick={() => addSort("base_code_description", false)}></input>
                  </label>
                </li>
                <li className='kundenLi-Show-2'>
                  <label for="item4-Sort-2">
                    <input className='sortButton' type="button" value={t('listSort1o4')} onClick={() => addSort("base_code_description", true)}></input>
                  </label>
                </li>
              </ul>
            </details>
          </div>

          <div className="checkboxDiv">
            <details className="custom-select-Show">
              <summary className="radios-Show">
                <input className='kundenInput-Show' type="radio" name="item-Show" id="default-Show" title={t('listFilter1')} checked />
              </summary>
              <ul className="list-Show">
                <li className='kundenLi-Show'>
                  <label for="item1-Show">
                    <Checkbox id="sourced" label={t('listFilter1o1')} onClick={() => addFilter("sourced")} checked={false}></Checkbox>
                    <span></span>
                  </label>
                </li>
                <li className='kundenLi-Show'>
                  <label for="item2-Show">
                    <Checkbox id="unsourced" label={t('listFilter1o2')} onClick={() => addFilter("unsourced")} checked={false}></Checkbox>
                  </label>
                </li>
                <li className='kundenLi-Show'>
                  <label for="item3-Show">
                    <Checkbox id="inventory" label={t('listFilter1o3')} onClick={() => addFilter("inventory")} checked={false}></Checkbox>
                  </label>
                </li>
                <li className='kundenLi-Show'>
                  <label for="item4-Show">
                    <Checkbox id="canceled" label={t('listFilter1o4')} onClick={() => addFilter("canceled")} checked={false}></Checkbox>
                  </label>
                </li>
              </ul>
            </details>
          </div>
          {filter.map((element) =>{
            return <FilterComponent name={element} para={element} func={removeFilter}></FilterComponent>
          })}
        </div>


        <div className='wrapper'>
          <div className='accordion'>

            {orders.length !== 0 ?
              //if the backend responded with a list of all order, every order gets displayed
              orders.filter(unfiltered_item => checkFilter(unfiltered_item.PROCESS_STATUS) === true).sort((a, b) => checkSort(a, b)).map((item, index) => {
                //either 5 or all orders are rendered
                if (index < amountOfOrdersShown) {
                  return <ListItem item={item} t={t}></ListItem>;
                }
              })
              : <></>}
          </div>
        </div>
        <input className='checkButtonShow' type="button" value={amountOfOrdersShown !== orders.length ? t('listButton1') : t('listButton2')} onClick={showAll}></input>

      </div>
    </>
  )
}

export default ListForm
