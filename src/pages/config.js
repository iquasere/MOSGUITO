import React from 'react'
import YAML from 'yaml'
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Divider
} from '@material-ui/core'
import LabelledTextField from "../components/LabelledTextField"
import LabelledNumberField from "../components/LabelledNumberField"
import LabelledCheckbox from "../components/LabelledCheckbox"
import LabelledSelect from "../components/LabelledSelect"
import { defaultValues } from '../utils/defaultValues'
import { emptyValues } from '../utils/emptyValues'
import { keggMaps } from '../utils/keggMaps'
import { uniprotColumns } from "../utils/uniprotColumns"
import { uniprotDatabases } from "../utils/uniprotDatabases"
import download from '../utils/download'
import {
  assemblerOptions,
  errorModelOptions,
  markersetOptions,
  normalizationMethodOptions,
  keggcharterTaxaLevelOptions
} from '../utils/options'
import './../App.css'
import KeggMapsAccordion from '../components/KeggMapsAccordion'
import UniprotColumnsAccordion from '../components/UniprotColumnsAccordion'
import UniprotDatabasesAccordion from '../components/UniprotDatabasesAccordion'
import {DashboardLayout} from "../components/Layout";

const Main = ({ configData, setConfig }) => {

  const onConfigChange = (field, value) => {
    const newValue = { ...configData, [field]: value }
    setConfig(newValue)
  }

  console.log(configData)
  const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

  const downloadJson = (ev) => {
    ev.preventDefault()
    console.log(JSON.stringify(configData, null, 2).toString())
    const snake_case_values = {}
    Object.keys(configData).map((key) => snake_case_values[camelToSnakeCase(key)] = configData[key])
    download(JSON.stringify(snake_case_values, null, 2), 'config.json', 'json')
  }

  const downloadYaml = (ev) => {
    ev.preventDefault()
    console.log(YAML.stringify(configData))
    const snake_case_values = {}
    Object.keys(configData).map((key) => snake_case_values[camelToSnakeCase(key)] = configData[key])
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
              value={configData.output}
              onChange={(ev) => onConfigChange('output', ev.target.value)}
              placeholder={defaultValues.output}
            />

            <LabelledTextField
              label='Resources directory'
              value={configData.resourcesDirectory}
              onChange={(ev) => onConfigChange('resourcesDirectory', ev.target.value)}
              placeholder={defaultValues.resourcesDirectory}
            />

            <LabelledTextField
              label='Experiments filename'
              value={configData.experiments}
              onChange={(ev) => onConfigChange('experiments', ev.target.value)}
              placeholder={defaultValues.experiments}
            />

            <LabelledNumberField
              label='Number of threads to use'
              value={configData.threads}
              onChange={(ev) => onConfigChange('threads', ev.target.valueAsNumber)}
            />

            <LabelledCheckbox
              label='Perform assembly'
              checked={configData.doAssembly}
              setChecked={(ev) => onConfigChange('doAssembly', ev.target.checked)}
            />

            {
              configData.doAssembly ? (
                <LabelledSelect
                  label='Choose assembler'
                  value={configData.assembler}
                  onChange={(ev) => onConfigChange('assembler', ev.target.value)}
                  options={assemblerOptions}
                />
              ) : (
                  <LabelledSelect
                    label='Choose error model'
                    value={configData.errorModel}
                    onChange={(ev) => onConfigChange('errorModel', ev.target.value)}
                    options={errorModelOptions}
                  />
                )
            }

            <LabelledSelect
              label='Choose markerset'
              value={configData.markerset}
              onChange={(ev) => onConfigChange('markerset', ev.target.value)}
              options={markersetOptions}
            />

            <LabelledTextField
              label='DIAMOND database'
              value={configData.diamondDatabase}
              onChange={(ev) => onConfigChange('diamondDatabase', ev.target.value)}
              placeholder={defaultValues.diamondDatabase}
            />

            <LabelledCheckbox
              label='Download UniProt'
              checked={configData.downloadUniprot}
              setChecked={(ev) => onConfigChange('downloadUniprot', ev.target.checked)}
            />

            <LabelledNumberField
              label='Number of identifications per protein'
              value={configData.diamondMaxTargetSeqs}
              onChange={(ev) => onConfigChange('diamondMaxTargetSeqs', ev.target.valueAsNumber)}
            />

            <UniprotColumnsAccordion
              columns={uniprotColumns}
              uniprotColumnsList={configData.uniprotColumns}
              onChange={(value) => onConfigChange('uniprotColumns', value)}
            />

            <UniprotDatabasesAccordion
              columns={uniprotDatabases}
              uniprotDatabasesList={configData.uniprotDatabases}
              onChange={(value) => onConfigChange('uniprotDatabases', value)}
            />

            <LabelledSelect
              label='Choose normalization method'
              value={configData.normalizationMethod}
              onChange={(ev) => onConfigChange('normalizationMethod', ev.target.value)}
              options={normalizationMethodOptions}
            />

            <LabelledSelect
              label='Choose the taxonomic level to represent with KEGGCharter'
              value={configData.keggcharterTaxaLevel}
              onChange={(ev) => onConfigChange('keggcharterTaxaLevel', ev.target.value)}
              options={keggcharterTaxaLevelOptions}
            />

            <LabelledNumberField
              label='Number of taxa to represent with KEGGCharter'
              value={configData.keggcharterNumberOfTaxa}
              onChange={(ev) => onConfigChange('keggcharterNumberOfTaxa', ev.target.valueAsNumber)}
            />

            <KeggMapsAccordion
              maps={keggMaps}
              keggMapList={configData.keggcharterMaps}
              onChange={(value) => onConfigChange('keggcharterMaps', value)}
            />


          </CardContent>
          <CardActions
            style={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >

            <Button
              onClick={() => onConfigChange(defaultValues)}
              variant='contained'
              color='primary'
            >
              Set to default values
            </Button>

            <Button
              onClick={() => onConfigChange(emptyValues)}
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
        General configuration
      </Typography>
      <Typography variant='h6'>
        Tweak different parameters to customize MOSCA's workflow
      </Typography>

    </header>
  )
}

function Config({ configData, onConfigChange, setConfig }) {
  return (
    <DashboardLayout>
      <div className='App'>
        <Header />
        <Main
          configData={configData}
          onConfigChange={onConfigChange}
          setConfig={setConfig}
        />
      </div>
    </DashboardLayout>
  )
}

export default Config
