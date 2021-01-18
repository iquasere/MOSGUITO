import React, { useState } from 'react'
import YAML from 'yaml'
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Divider
} from '@material-ui/core'
import LabelledTextField from "./components/LabelledTextField"
import LabelledNumberField from "./components/LabelledNumberField"
import LabelledCheckbox from "./components/LabelledCheckbox"
import LabelledSelect from "./components/LabelledSelect"
import ExperimentsTable from "./components/ExperimentsTable"
import { defaultValues } from './utils/defaultValues'
import { emptyValues } from './utils/emptyValues'
import { keggMaps } from './utils/keggMaps'
import { uniprotColumns } from "./utils/uniprotColumns"
import { uniprotDatabases } from "./utils/uniprotDatabases"
import download from './utils/download'
import {
  assemblerOptions,
  errorModelOptions,
  markersetOptions,
  normalizationMethodOptions,
  keggcharterTaxaLevelOptions
} from './utils/options'
import './App.css'
import KeggMapsAccordion from './components/KeggMapsAccordion'

const Main = () => {
  const [values, setValues] = useState(defaultValues)
  const [experiments, setExperiments] = useState([])

  const handleChange = (field, value) => {
    const newValue = { ...values, [field]: value }
    setValues(newValue)
  }

  const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

  const downloadJson = (ev) => {
    ev.preventDefault()

    console.log(JSON.stringify(values, null, 2).toString())
    const snake_case_values = {}
    Object.keys(values).map((key) => snake_case_values[camelToSnakeCase(key)] = values[key])

    download(JSON.stringify(snake_case_values, null, 2), 'config.json', 'json')
  }

  const downloadYaml = (ev) => {
    ev.preventDefault()

    console.log(YAML.stringify(values))
    const snake_case_values = {}
    Object.keys(values).map((key) => snake_case_values[camelToSnakeCase(key)] = values[key])

    download(YAML.stringify(snake_case_values, null, 2), 'config.yaml', 'yaml')
  }

  return (
    <main className='main'>
      <form className='form' >
        <Card >
          <CardContent>

            <Typography variant='body1'>
              To run MOSCA, you need both a configuration and an experiments files. MOSGUITO is used to obtained configuration files, and you can <a href='https://docs.google.com/spreadsheets/d/12BppOf32QPRl6Ey39ACWoOXPVWtTrGIUN2u-_BpwSvo/edit#gid=0' ><span style={{ color: 'red' }}>access</span></a> an example of experiments file from MOSCA's repository.
            </Typography>

            <Divider style={{ margin: '1rem 0' }} />

            <LabelledTextField
              label='Output directory'
              value={values.output}
              onChange={(ev) => handleChange('output', ev.target.value)}
              placeholder={defaultValues.output}
            />

            <LabelledTextField
              label='Resources directory'
              value={values.resourcesDirectory}
              onChange={(ev) => handleChange('resourcesDirectory', ev.target.value)}
              placeholder={defaultValues.resourcesDirectory}
            />

            <LabelledTextField
              label='Experiments filename'
              value={values.experiments}
              onChange={(ev) => handleChange('experiments', ev.target.value)}
              placeholder={defaultValues.experiments}
            />

            <LabelledNumberField
              label='Number of threads to use'
              value={values.threads}
              onChange={(ev) => handleChange('threads', ev.target.valueAsNumber)}
            />

            <LabelledCheckbox
              label='Perform assembly'
              checked={values.doAssembly}
              setChecked={(ev) => handleChange('doAssembly', ev.target.checked)}
            />

            {
              values.doAssembly ? (
                <LabelledSelect
                  label='Choose assembler'
                  value={values.assembler}
                  onChange={(ev) => handleChange('assembler', ev.target.value)}
                  options={assemblerOptions}
                />
              ) : (
                  <LabelledSelect
                    label='Choose error model'
                    value={values.errorModel}
                    onChange={(ev) => handleChange('errorModel', ev.target.value)}
                    options={errorModelOptions}
                  />
                )
            }

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
              placeholder={defaultValues.diamondDatabase}
            />

            <LabelledCheckbox
              label='Download UniProt'
              checked={values.downloadUniprot}
              setChecked={(ev) => handleChange('downloadUniprot', ev.target.checked)}
            />

            <LabelledNumberField
              label='Number of identifications per protein'
              value={values.diamondMaxTargetSeqs}
              onChange={(ev) => handleChange('diamondMaxTargetSeqs', ev.target.valueAsNumber)}
            />

            <UniprotColumnsAccordion
              columns={uniprotColumns}
              uniprotColumnsList={values.uniprotColumns}
              onChange={(value) => handleChange('uniprotColumns', value)}
            />

            <UniprotDatabasesAccordion
              columns={uniprotDatabases}
              uniprotDatabasesList={values.uniprotDatabases}
              onChange={(value) => handleChange('uniprotDatabases', value)}
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
              onChange={(ev) => handleChange('keggcharterNumberOfTaxa', ev.target.valueAsNumber)}
            />

            <KeggMapsAccordion
              maps={keggMaps}
              keggMapList={values.keggcharterMaps}
              onChange={(value) => handleChange('keggcharterMaps', value)}
            />

            <ExperimentsTable
              experiments={experiments}
              onChange={(value) => setExperiments(value)}
            />

          </CardContent>
          <CardActions
            style={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >

            <Button
              onClick={() => handleChange("output", defaultValues["output"])}
              variant='contained'
              color='primary'
            >
              Set to default values
            </Button>

            <Button
              onClick={() => handleChange("output", emptyValues["output"])}
              variant='contained'
              color='primary'
            >
              Clear values
            </Button>

            <Button
              onClick={(ev) => downloadYaml(ev)}
              variant='contained'
              color='secondary'
            >
              Download YAML
            </Button>

            <Button
              onClick={(ev) => downloadJson(ev)}
              variant='contained'
              color='secondary'
            >
              Download JSON
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
      <Typography variant='h4'>
        MOSGUITO
      </Typography>
      <Typography variant='h6'>
        MOSca's GUI TO generate config files
      </Typography>

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