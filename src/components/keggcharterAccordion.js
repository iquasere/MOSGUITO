import Accordion from "@material-ui/core/Accordion"
import {useState} from "react"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const SubAccordion = ({ child }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => setIsOpen(!isOpen)
    return <Accordion
        expanded={isOpen}
        onChange={toggleIsOpen}
    >
        <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
        >
            {child['name']}
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
    </Accordion>
}

const KeggcharterAccordion = ({ maps, mapsList }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => setIsOpen(!isOpen)
    console.log(maps)
    return <Accordion
        expanded={isOpen}
        onChange={toggleIsOpen}
    >
        <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
        >
            KEGG metabolic maps
        </AccordionSummary>
        <AccordionDetails>
            {
                maps['children'].map((child, index) => {
                      return (
                        <SubAccordion
                            key={index}
                            child={child} />
                      )
                    })
            }
        </AccordionDetails>
    </Accordion>
}

export default KeggcharterAccordion