import Accordion from './Accordion'
import LabelledCheckbox from "./labelledCheckbox"

const UniprotDatabasesAccordion = ({ columns, uniprotDatabasesList, onChange }) => {
  const handleCheck = value => {
    const newList = [...uniprotDatabasesList]

    const index = newList.indexOf(value)
    if (index > -1) {
      newList.splice(index, 1)
    } else {
      newList.push(value)
    }

    onChange(newList)
  }

  return (
    <Accordion title='UniProt databases'>
      {
        Object.entries(columns).map(([section, columns_list], index) => (
          <Accordion key={index} title={section}>
            {
              columns_list.map(( pair , index) => (
                <LabelledCheckbox
                  key={index}
                  label={pair[1]}
                  checked={uniprotDatabasesList.indexOf(pair[0]) > -1}
                  setChecked={() => handleCheck(pair[0])}
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

export default UniprotDatabasesAccordion
