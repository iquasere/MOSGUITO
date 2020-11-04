import Accordion from "@material-ui/core/Accordion"
import {useState} from "react"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import LabelledCheckbox from "./labelledCheckbox"
import {defaultValues} from "../utils/defaultValues";

function handleValue(array, value){
    const index = array.indexOf(value);
    if (index > -1) {
        array.splice(index, 1);
    } else {
        array.push(value)
    }
}

const SubSubSubAccordion = ({ grandgrandchild }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => setIsOpen(!isOpen)
    console.log(grandgrandchild)
    return (<Accordion
        expanded={isOpen}
        onChange={toggleIsOpen}
        style={{width: '100%'}}
    >
        <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
        >
            grandgrandchild['children'].map((grandgrandgrandchild, index) => {
            <LabelledCheckbox
                label={grandgrandgrandchild['name'][0] + ':' + grandgrandgrandchild[1]}
                checked={values.includes(grandgrandgrandchild['name'][0])}
                setChecked={(ev) => handleValue(values, grandgrandgrandchild['name'][0])}
            />
        }
        </AccordionSummary>

        <AccordionDetails>
        </AccordionDetails>
    </Accordion>)
}

const SubSubAccordion = ({ grandchild }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => setIsOpen(!isOpen)
    console.log(grandchild)
    return (<Accordion
        expanded={isOpen}
        onChange={toggleIsOpen}
        style={{width: '100%'}}
    >
        <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
        >
            {grandchild['name']}
        </AccordionSummary>

        <AccordionDetails>
        </AccordionDetails>
    </Accordion>)
}

const SubAccordion = ({ child, mapsList }) => {
    const [mapsList, setMapsList] = useState(mapsList)
    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => setIsOpen(!isOpen)
    console.log(child.children)
    return <Accordion
        expanded={isOpen}
        onChange={toggleIsOpen}
        style={{ width: '100%' }}
    >
        <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
        >
            {child['name']}
        </AccordionSummary>
        <AccordionDetails>
            {
                child.children.map((grandchild, index) => {
                      return (
                        <SubSubAccordion
                            key={index}
                            child={grandchild}
                            mapsList={mapsList}
                        />
                      )
                })
            }
        </AccordionDetails>
    </Accordion>
}

const KeggcharterAccordion = ({ maps, mapsList }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => setIsOpen(!isOpen)

    return <Accordion
        expanded={isOpen}
        onChange={toggleIsOpen}
        style={{ width: '100%' }}
    >
        <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
        >
            KEGG metabolic maps
        </AccordionSummary>
        <AccordionDetails>
            {
                maps.children.map((child, index) => {
                      return (
                        <SubAccordion
                            key={index}
                            child={child}
                            mapsList={mapsList}
                        />
                      )
                })
            }
        </AccordionDetails>
    </Accordion>
}

export default KeggcharterAccordion