import React, { useState } from 'react'
import YAML from 'yaml'
import {
  Card,
  CardContent,
  CardActions,
  TextField,
  Select,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {
  ACheckbox,
  ANumbersField
} from './components/fieldGenerators'
import CustomizedAccordions from './components/accordions'
import ReactApp from './components/subaccordions'
import { defaultValues } from './utils/defaultValues'
import { assemblerOptions } from './utils/options'
import './App.css'

const Main = () => {

  const [values, setValues] = useState(defaultValues)

  console.log(values)

  const handleChange = (field, value) => {
    const newValue = { ...values, [field]: value }
    setValues(newValue)
  }

  const checkboxesList = [
          {
      checked: values.doAssembly,
      field: 'doAssembly',
      label: 'Perform assembly'
    },
    {
      checked: values.downloadUniprot,
      field: 'downloadUniprot',
      label: 'Download UniProt'
    }
  ]

  const textFieldsList = [
    {
      value: values.output,
      field: 'output',
      label: 'Output directory to use'
    }
  ]

  const intFieldsList = [
    {
      value: values.threads,
      field: 'threads',
      label: 'Number of threads to use'
    },
    {
      value: values.diamondMaxTargetSeqs,
      field: 'diamondMaxTargetSeqs',
      label: 'Number of identifications per protein to be reported by DIAMOND'
    }
  ]

  const output_stuff = {
    span: 'Set the output directory',
    field: 'output'
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()

    console.log(JSON.stringify(values, null, 2))
    console.log(YAML.stringify(values))
  }

  const LabelledTextField = ({ label, value, onChange }) => {
    return <div><span>{label}</span>
            <TextField
              type='text'
              fullWidth
              value={value}
              onChange={onChange}
            /></div>
  }

  return (
    <main className='main'>
      <form className='form' onSubmit={handleSubmit}>
        <Card>
          <CardContent>
            <LabelledTextField
              label='Output'
              value={values.output}
              onChange={(ev) => handleChange('output', ev.target.value)}
            />

            <span>Output</span>
            <TextField
              type='text'
              fullWidth
              value={values.output}
              onChange={(ev) => handleChange('output', ev.target.value)}
            />

            {
              intFieldsList.map((box, index) => {
                return (
                  <ANumbersField
                    key={index}
                    defaultValue={box.value}
                    updateValue={(ev) => handleChange(box.field, ev.target.value)}
                    label={box.label}
                  />
                )
              })
            }

            <span>Assembler</span>
            <Select
                  value={values.assembler}
                  onChange={(ev) => handleChange('assembler', ev.target.value)}
                >
                  {
                    assemblerOptions.map((option) => {
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

            <Accordion
              expanded={values.doAssembly}
              onChange={(_, value) => handleChange('doAssembly', value)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                KEGG metabolic maps
              </AccordionSummary>
              <AccordionDetails>

              </AccordionDetails>
            </Accordion>

            {
              checkboxesList.map((box, index) => {
                return (
                  <ACheckbox
                    key={index}
                    checked={box.checked}
                    setChecked={(ev) => handleChange(box.field, ev.target.checked)}
                    label={box.label}
                  />
                )
              })
            }

            <CustomizedAccordions/>

            <ReactApp/>

          </CardContent>
          <CardActions
            style={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <Button
              type='submit'
              variant='contained'
              color='secondary'
            >
              Save me plox
            </Button>
          </CardActions>
        </Card>
      </form>
    </main>
  )
}

const Header = () => {
  return (
    <header className='header'>
      <h1>
        Mosguito
      </h1>
      <a href='ftp://ftp.uniprot.org/pub/databases/uniprot/current_release/knowledgebase/complete/uniprot_sprot.fasta.gz' >
        <span style={{ color: 'wheat' }}>fasta for free</span>
      </a>
    </header>
  )
}

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
    </div>
  )
}

export default App
