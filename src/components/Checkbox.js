import React from "react";
import { useState } from "react";
import './style/showStatusStayle.css';

//Subcomponent for filter functions
const Checkbox = ({ label, checked, ...props }) => {
    const [isChecked, setIsChecked] = useState(checked);
  return (
    <div className="checkbox-wrapper">
      <label>
        <input className="checkBoxInput" type="checkbox" checked={isChecked} 
        onChange={() => setIsChecked((prev) => !prev)} {...props}></input>
        <span className="spanLabel">{label}</span>
      </label>
    </div>
  );
};
export default Checkbox;