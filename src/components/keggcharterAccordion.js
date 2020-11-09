import Accordion from "@material-ui/core/Accordion"
import {useState} from "react"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import LabelledCheckbox from "./labelledCheckbox"

function KeggcharterAccordion(maps, keggMapsList) {
    console.log(keggMapsList)
    const [mapsList, setMapsList] = useState(keggMapsList);

    function handleChange(array, value) {
        console.log(array)
        const index = array.indexOf(value);
        if (index > -1) {
            array.splice(index, 1);
        } else {
            array.push(value)
        }
        console.log(array)
        setMapsList(array)
    }

    const SubSubAccordion = (props) => {
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
                        return (
                            <LabelledCheckbox
                                key={index}
                                label={props.name[1]}
                                checked={mapsList.includes(props['name'][0])}
                                setChecked={(ev) => handleChange(mapsList, props['name'][0])}
                            />)
                    })
                }
            </AccordionDetails>
        </Accordion>)
    }

    const SubAccordion = (props) => {
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

    const MainAccordion = ( {maps} ) => {
        const [isOpen, setIsOpen] = useState(false)
        const toggleIsOpen = () => setIsOpen(!isOpen)

        return <Accordion
            expanded={isOpen}
            onChange={toggleIsOpen}
            style={{width: '100%'}}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
            >
                KEGG metabolic maps
            </AccordionSummary>
            <AccordionDetails>
                {
                    maps.maps.children.map((child, index) => {
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

    return (
        <MainAccordion
            maps={maps}
        />
    )
}


export default KeggcharterAccordion