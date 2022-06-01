import {TextField} from '@material-ui/core'
import {useState} from "react";

const LabelledTextField = ({ label, value, onChange, placeholder, helpMessage ="" }) => {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return <div className="container">
    <div className='left'>
      <span>{label}</span>
    </div>
    <div className='right' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <TextField
        type='text'
        fullWidth
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
    {isHovering && <div className='help'><h6>{helpMessage}</h6></div>}
  </div>
}

export default LabelledTextField