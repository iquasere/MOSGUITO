import React, { useState } from 'react'
import YAML from 'yaml'
import {
  Card,
  CardContent,
  CardActions,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import LabelledTextField from "./components/labelledTextFiel"
import LabelledNumberField from "./components/labelledNumberField"
import LabelledCheckbox from "./components/labelledCheckbox"
import LabelledSelect from "./components/labelledSelect"
import { defaultValues } from './utils/defaultValues'
import { keggMaps } from './utils/keggMaps'
import {
  assemblerOptions,
  errorModelOptions,
  markersetOptions,
  normalizationMethodOptions,
  keggcharterTaxaLevelOptions
} from './utils/options'
import './App.css'
import AccordionExampleNested from "./components/accordions";
import KeggcharterAccordion from "./components/keggcharterAccordion";

const Main = () => {

  const [values, setValues] = useState(defaultValues)

  console.log(values)
  console.log(keggMaps)

  const handleChange = (field, value) => {
    const newValue = { ...values, [field]: value }
    setValues(newValue)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()

    console.log(JSON.stringify(values, null, 2))
    console.log(YAML.stringify(values))
  }

  const bacon = 'Spicy jalapeno bacon ipsum dolor amet spare ribs picanha'

  const ToggledSection = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => setIsOpen(!isOpen)

    return (
      <section>
        <div>
          <input
            type='checkbox'
            checked={isOpen}
            onChange={toggleIsOpen}
          />
          <span>Toggle me senpai</span>
        </div>
        {
          isOpen && (
            <p>
              {`${bacon} ${bacon} ${bacon}`}
            </p>
          )
        }
      </section>
    )
  }

  function AssemblerOrErrorModel(props){
    if (props.doAssembly) {
      return <LabelledSelect
        label='Choose assembler'
        value={values.assembler}
        onChange={(ev) => handleChange('assembler', ev.target.value)}
        options={assemblerOptions}
        />
    }
    return <LabelledSelect
        label='Choose error model'
        value={values.errorModel}
        onChange={(ev) => handleChange('errorModel', ev.target.value)}
        options={errorModelOptions}
        />
  }

  return (
    <main className='main'>
      <form className='form' onSubmit={handleSubmit}>
        <Card>
          <CardContent>

            <LabelledTextField
              label='Output directory'
              value={values.output}
              onChange={(ev) => handleChange('output', ev.target.value)}
            />

            <LabelledTextField
              label='Resources directory'
              value={values.resourcesDirectory}
              onChange={(ev) => handleChange('resourcesDirectory', ev.target.value)}
            />

            <LabelledNumberField
              label='Number of threads to use'
              value={values.threads}
              onChange={(ev) => handleChange('threads', ev.target.value)}
              />

            <LabelledCheckbox
                label='Perform assembly'
                checked={values.doAssembly}
                setChecked={(ev) => handleChange('doAssembly', ev.target.checked)}
            />

            <AssemblerOrErrorModel doAssembly={values.doAssembly} />

            <LabelledSelect
                label='Choose markerset'
                value={values.markerset}
                onChange={(ev) => handleChange('markerset', ev.target.value)}
                options={markersetOptions}
            />

            <LabelledTextField
              label='DIAMOND database'
              value={values.diamondDatabase}
              onChange={(ev) => handleChange('diamondDatabase', ev.target.value)}
            />

            <LabelledCheckbox
                label='Download UniProt'
                checked={values.downloadUniprot}
                setChecked={(ev) => handleChange('downloadUniprot', ev.target.checked)}
            />

            <LabelledNumberField
              label='Number of identifications per protein'
              value={values.diamondMaxTargetSeqs}
              onChange={(ev) => handleChange('diamondMaxTargetSeqs', ev.target.value)}
            />

            <LabelledSelect
                label='Choose normalization method'
                value={values.normalizationMethod}
                onChange={(ev) => handleChange('normalizationMethod', ev.target.value)}
                options={normalizationMethodOptions}
            />

            <LabelledSelect
                label='Choose the taxonomic level to represent with KEGGCharter'
                value={values.keggcharterTaxaLevel}
                onChange={(ev) => handleChange('keggcharterTaxaLevel', ev.target.value)}
                options={keggcharterTaxaLevelOptions}
            />

            <LabelledNumberField
              label='Number of taxa to represent with KEGGCharter'
              value={values.keggcharterNumberOfTaxa}
              onChange={(ev) => handleChange('keggcharterNumberOfTaxa', ev.target.value)}
            />

            <p>DAMN ACCORDIONS</p>

            <ToggledSection />


            <KeggcharterAccordion
                maps={keggMaps}
                mapsList={values.keggcharterMaps}
            />

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
