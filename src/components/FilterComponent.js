import React, { useState } from 'react';
import './style/filterComponentStyle.css'
function FilterComponent({name, para,func}) {
    return(<div className="FilterDiv">
            <button className='filterButton' onClick={()=>{func(para)}}>{name} ✖</button>
    </div>);
}

export default FilterComponent;