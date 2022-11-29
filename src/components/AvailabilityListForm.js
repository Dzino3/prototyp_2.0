import React, { useState, useEffect } from 'react';
import './style/listStyle.css';
import './style/showStatusStayle.css';
import './style/filterStyle.css'
import ListItem from './components-info/AvalabilityListItem';
import Checkbox from './Checkbox';
import Axios from 'axios';

function AvailabilityListForm() {
  const [products, setProducts] = useState([]);
  const [amountOfProductsShown, setAmountOfProductsShown] = useState(5);
  const [filter, setFilter] = useState(["Commercial Mowing", "Compact Utility Tractory & Loaders","Golf", "Riding Lawn Tractors","Utility Tractors","Utility Vehicles"])
  const [sort, setSort] = useState({sorting_type: "", ascending: false});

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

  function addFilter(fil){
    if (filter.indexOf(fil) > -1){
      //filter exists already so it gets removed
      setFilter(current => current.filter((filter_item) => filter_item !== fil))
    } else{
      setFilter(current => [...current, fil])
    }
  }


  function checkSort(a,b){
    switch(sort.sorting_type){
      case "base_code_description":
        if(sort.ascending){return a.PRODUCT > b.PRODUCT ? 1 : -1}
        else {return a.PRODUCT > b.PRODUCT ? -1 : 1}

        case "base_code":
          if(sort.ascending){return a.BASE_CODE > b.BASE_CODE ? 1 : -1}
          else {return a.BASE_CODE > b.BASE_CODE ? -1 : 1}

    }
  }
  function addSort(sor, isAscending){
    setSort({sorting_type : sor, ascending: isAscending});
    }


  return (
    <>
      <div className='listDiv'>
        <h2 className='listH2'> Our Products</h2>

        <div className='avalCheckDiv'>
        <div className="checkboxDiv">
          <details className="custom-select-Show-2">
            <summary className="radios-Show-2">
              <input className='kundenInput-Show-2' type="radio" name="item-Show-2" id="default-Show-2" title="Sort By" checked />
            </summary>
            <ul className="list-Show-2">
              <li className='kundenLi-Show-2'>
                <label for="item1-Sort-2">
                <input type="button" value="Product Name ↓" onClick={()=>addSort("base_code_description", false)}></input>
                </label>
              </li>
              <li className='kundenLi-Show-2'>
                <label for="item2-Sort-2">
                <input type="button" value="Product Name ↑" onClick={()=>addSort("base_code_description", true)}></input>
                </label>
              </li>
              <li className='kundenLi-Show-2'>
                <label for="item3-Sort-2">
                <input type="button" value="Base Code ↓" onClick={()=>addSort("base_code", false)}></input>
                </label>
              </li>
              <li className='kundenLi-Show-2'>
                <label for="item4-Sort-2">
                <input type="button" value="Base Code ↑" onClick={()=>addSort("base_code", true)}></input>
                </label>
              </li>
            </ul>
          </details>
        </div>

        <div className="checkboxDiv">
          <details className="custom-select-Show">
            <summary className="radios-Show">
              <input className='kundenInput-Show' type="radio" name="item-Show" id="default-Show" title="Show Status" checked />
            </summary>
            <ul className="list-Show">
              <li className='kundenLi-Show'>
                <label for="item1-Show">
                  <Checkbox label="Show Commercial Mowing" onClick={()=>addFilter("Commercial Mowing")} checked={true}></Checkbox>
                  <span></span>
                </label>
              </li>
              <li className='kundenLi-Show'>
                <label for="item2-Show">
                  <Checkbox label="Show Compact Utility Tractory & Loaders" onClick={()=>addFilter("Compact Utility Tractory & Loaders")} checked={true}></Checkbox>
                </label>
              </li>
              <li className='kundenLi-Show'>
                <label for="item3-Show">
                  <Checkbox label="Show Golf" onClick={()=>addFilter("Golf")} checked={true}></Checkbox>
                </label>
              </li>
              <li className='kundenLi-Show'>
                <label for="item4-Show">
                  <Checkbox label="Show Riding Lawn Tractors" onClick={()=>addFilter("Riding Lawn Tractors")} checked={true}></Checkbox>
                </label>
              </li>
              <li className='kundenLi-Show'>
                <label for="item5-Show">
                  <Checkbox label="Show Utility Tractors" onClick={()=>addFilter("Utility Tractors")} checked={true}></Checkbox>
                </label>
              </li>
              <li className='kundenLi-Show'>
                <label for="item6-Show">
                  <Checkbox label="Show Utility Vehicles" onClick={()=>addFilter("Utility Vehicles")} checked={true}></Checkbox>
                </label>
              </li>
            </ul>
          </details>
        </div>
        </div>
        

        <div className='wrapper'>
          <div className='accordion'>
            {products.length !== 0 ?
              //if the backend responded with a list of all order, every order gets displayed
              products.filter(unfiltered_item => checkFilter(unfiltered_item.CATEGORY) === true).sort((a,b) => checkSort(a,b)).map((item, index) => {
                //products.sort((a,b) => checkSort(a,b)).map((item, index) => {
                //either 5 or all orders are rendered
                if (index < amountOfProductsShown) {
                  return <ListItem item={item}></ListItem>;
                }
              })
              : <></>}
          </div>
        </div>
        <input className='checkButtonShow' type="button" value={amountOfProductsShown !== products.length ? "Show all" : "Show less"} onClick={showAll}></input>

      </div>
    </>
  )
}

export default AvailabilityListForm
