import Accordion from './Accordion'
import LabelledCheckbox from "./labelledCheckbox"

const UniprotColumnsAccordion = ({ columns, uniprotColumnsList, onChange }) => {
  const handleCheck = value => {
    const newList = [...uniprotColumnsList]

    const index = newList.indexOf(value)
    if (index > -1) {
      newList.splice(index, 1)
    } else {
      newList.push(value)
    }

    onChange(newList)
  }

  return (
    <Accordion title='UniProt columns'>
      {
        Object.entries(columns).map(([section, columns_list], index) => (
          <Accordion key={index} title={section}>
            {
              columns_list.map(( pair , index) => (
                <LabelledCheckbox
                  key={index}
                  label={pair[0]}
                  checked={uniprotColumnsList.indexOf(pair[1]) > -1}
                  setChecked={() => handleCheck(pair[1])}
                />
                )
              )
            }
          </Accordion>
        ))
      }
    </Accordion>
  )
}

export default UniprotColumnsAccordion
