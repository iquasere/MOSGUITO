import Accordion from './Accordion'
import LabelledCheckbox from "./labelledCheckbox"

const KeggMapsAccordion = ({ maps, keggMapList, onChange }) => {
  const handleCheck = value => {
    const newList = [...keggMapList]

    const index = newList.indexOf(value)
    if (index > -1) {
      newList.splice(index, 1)
    } else {
      newList.push(value)
    }

    onChange(newList)
  } 

  return (
    <Accordion title='KEGG metabolic maps'>
      {
        maps.children.map((category, index) => (
          <Accordion key={index} title={category.name}>
            {
              category.children.map((subCategory, index) => (
                <Accordion key={index} title={subCategory.name}>
                  {
                    subCategory.children.map(({ name }, index) => (
                      <LabelledCheckbox
                        key={index}
                        label={name[1]}
                        checked={keggMapList.indexOf(name[0]) > -1}
                        setChecked={() => handleCheck(name[0])}
                      />)
                    )
                  }
                </Accordion>
              ))
            }
          </Accordion>
        ))
      }
    </Accordion>
  )
}

export default KeggMapsAccordion
