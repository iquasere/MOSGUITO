import { useState } from 'react'
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const Accordion = ({ title, style, children, helpMessage="" }) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => setIsOpen(!isOpen)
    return (
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <MuiAccordion
          expanded={isOpen}
          onChange={toggleIsOpen}
          style={style || {width: '100%'}}
        >
          <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
          >
            {title}
          </AccordionSummary>
          <AccordionDetails>
            {children}
          </AccordionDetails>
        </MuiAccordion>
        {isHovering && <div className='help'><h6>{helpMessage}</h6></div>}
      </div>
  )
}

export default Accordion
