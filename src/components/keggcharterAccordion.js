import Accordion from "@material-ui/core/Accordion"
import {useState} from "react"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import LabelledCheckbox from "./labelledCheckbox"
import {defaultValues} from "../utils/defaultValues";

function handleChange(array, value){
    const index = array.indexOf(value);
    if (index > -1) {
        array.splice(index, 1);
    } else {
        array.push(value)
    }
}

const SubSubSubAccordion = ( props ) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => setIsOpen(!isOpen)
    return (<Accordion
        expanded={isOpen}
        onChange={toggleIsOpen}
        style={{width: '100%'}}
    >
        <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
        >
            props.child.children.map((props, index) => {
            <LabelledCheckbox
                label={props.child['name'][0] + ':' + props.child[1]}
                //checked={values.includes(props['name'][0])}
                //setChecked={(ev) => handleChange(values, props['name'][0])}
            />
            }
        )
        </AccordionSummary>

        <AccordionDetails>
        </AccordionDetails>
    </Accordion>)
}

const SubSubAccordion = ( props ) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => setIsOpen(!isOpen)
    return (<Accordion
        expanded={isOpen}
        onChange={toggleIsOpen}
    >
        <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
        >
            {props.child['name']}
        </AccordionSummary>

        <AccordionDetails>
            {
                props.child.children.map((props, index) => {
                    return(
                    <LabelledCheckbox
                        key={index}
                        label={props.name[1]}
                    />)
                })
            }
        </AccordionDetails>
    </Accordion>)
}

const SubAccordion = ( props ) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => setIsOpen(!isOpen)
    return <Accordion
        expanded={isOpen}
        onChange={toggleIsOpen}
    >
        <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
        >
            {props.child['name']}
        </AccordionSummary>
        <AccordionDetails>

            {
                props.child.children.map((grandchild, index) => {
                      return (
                        <SubSubAccordion
                            key={index}
                            child={grandchild}

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
                        />
                      )
                })
            }
        </AccordionDetails>
    </Accordion>
}

export default KeggcharterAccordion