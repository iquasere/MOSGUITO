import {MenuItem, Select} from "@material-ui/core";
import React, {useState} from "react";

const LabelledSelect = ({ label, value, onChange, options, helpMessage ="" }) => {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return <div className="container" >
    <div className="left">
      <span>{label}</span>
    </div>
    <div className="right" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <Select
        value={value}
        onChange={onChange}
      >
        {
          options.map((option) => {
            return (
              <MenuItem
                key={option}
                value={option}
              >
                {option}
              </MenuItem>
            )
          })
        }
      </Select>
    </div>
    {isHovering && <div className='help'><h6>{helpMessage}</h6></div>}
  </div>
}

export default LabelledSelect