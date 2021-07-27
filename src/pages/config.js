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
import download from '../utils/download'
import {
  assemblerOptions,
  errorModelOptions,
  markersetOptions,
  normalizationMethodOptions,
  keggcharterTaxaLevelOptions,
  recognizerDatabasesOptions, proteomicsWorkflowOptions, referenceProteomesTaxaLevelOptions, proteaseOptions
} from '../utils/options'
import './../App.css'
import {DashboardLayout} from "../components/Layout";
import Accordion from "../components/Accordion";

const Main = ({ configData, onConfigChange, onConfigOverwrite }) => {

  const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

  const downloadJson = (ev) => {
    ev.preventDefault()
    if (configData['doAssembly']) {onConfigChange('errorModel', 'complete')}
    const snake_case_values = {}
    Object.keys(configData).map((key) => snake_case_values[camelToSnakeCase(key)] = configData[key])
    download(JSON.stringify(snake_case_values, null, 2), 'config.json', 'json')
  }

  const downloadYaml = (ev) => {
    ev.preventDefault()
    if (configData['doAssembly']) {onConfigChange('errorModel', 'complete')}
    const snake_case_values = {}
    Object.keys(configData).map((key) => snake_case_values[camelToSnakeCase(key)] = configData[key])
    download(YAML.stringify(snake_case_values, null), 'config.yaml', 'yaml')
  }

  const handleCheck = value => {
    const newList = [...configData.recognizerDatabases]

    const index = newList.indexOf(value)
    if (index > -1) {
      newList.splice(index, 1)
    } else {
      newList.push(value)
    }

    onConfigChange('recognizerDatabases', newList)
  }

  return (
    <main className='main'>
      <form className='form' >
        <Card >
          <CardContent>

            <Typography variant='h6'>
              General settings
            </Typography>

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

            <LabelledNumberField
              label='Maximum memory (Gb)'
              value={configData.maxMemory}
              onChange={(ev) => onConfigChange('maxMemory', ev.target.valueAsNumber)}
            />

            <Divider style={{ margin: '1rem 0' }} />

            <Typography variant='h6'>
              Preprocessing settings
            </Typography>

            <LabelledNumberField
              label='Minimum read length'
              value={configData.minimumReadLength}
              onChange={(ev) => onConfigChange('minimumReadLength', ev.target.valueAsNumber)}
            />

            <LabelledNumberField
              label='Minimum read average quality'
              value={configData.minimumReadAverageQuality}
              onChange={(ev) => onConfigChange('minimumReadAverageQuality', ev.target.valueAsNumber)}
            />

            <Divider style={{ margin: '1rem 0' }} />

            <Typography variant='h6'>
              Assembly settings
            </Typography>

            <LabelledCheckbox
              label='Perform assembly'
              checked={configData.doAssembly}
              setChecked={(ev) => onConfigChange('doAssembly', ev.target.checked)}
            />

            {
              configData.doAssembly ? (
                <>
                  <LabelledSelect
                    label='Assembler'
                    value={configData.assembler}
                    onChange={(ev) => onConfigChange('assembler', ev.target.value)}
                    options={assemblerOptions}
                  />

                  <Divider style={{ margin: '1rem 0' }} />

                  <Typography variant='h6'>
                    Binning settings
                  </Typography>

                  <LabelledCheckbox
                    label='Perform iterative binning'
                    checked={configData.doIterativeBinning}
                    setChecked={(ev) => onConfigChange('doIterativeBinning', ev.target.checked)}
                  />

                  <LabelledSelect
                    label='Markergene set'
                    value={configData.markerset}
                    onChange={(ev) => onConfigChange('markerset', ev.target.value)}
                    options={markersetOptions}
                  />
                </>
              ) : (<></>)
            }

            <Divider style={{ margin: '1rem 0' }} />

            <Typography variant='h6'>
              Annotation settings
            </Typography>

            {
              configData.doAssembly ? (<></>) : (
                <LabelledSelect
                    label='Choose error model'
                    value={configData.errorModel}
                    onChange={(ev) => onConfigChange('errorModel', ev.target.value)}
                    options={errorModelOptions}
                  />
              )
            }

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

            <LabelledCheckbox
              label='Download CDD'
              checked={configData.downloadCdd}
              setChecked={(ev) => onConfigChange('downloadCdd', ev.target.checked)}
            />

            <div style={{ margin: '1rem 0', border: '1px solid' }}>
            <Accordion title="Pick databases of reCOGnizer">
              {
                recognizerDatabasesOptions.map(( value, index) => (
                  <LabelledCheckbox
                    key={index}
                    label={value}
                    checked={configData.recognizerDatabases.indexOf(value) > -1}
                    setChecked={(ev) => handleCheck(value)}
                    variant="filled"
                  />
                  )
                )
              }
            </Accordion>
              </div>

            <LabelledNumberField
              label='Number of identifications per protein'
              value={configData.diamondMaxTargetSeqs}
              onChange={(ev) => onConfigChange('diamondMaxTargetSeqs', ev.target.valueAsNumber)}
            />

            <Divider style={{ margin: '1rem 0' }} />

            <Typography variant='h6'>
              Differential expression settings
            </Typography>

            <LabelledSelect
              label='Choose normalization method'
              value={configData.normalizationMethod}
              onChange={(ev) => onConfigChange('normalizationMethod', ev.target.value)}
              options={normalizationMethodOptions}
            />

            <LabelledNumberField
              label='Minimum differential expression'
              value={configData.minimumDifferentialExpression}
              onChange={(ev) => onConfigChange('minimumDifferentialExpression', ev.target.valueAsNumber)}
              step={0.1}
              minimum={0.1}
            />

            <Divider style={{ margin: '1rem 0' }} />

            <Typography variant='h6'>
              KEGG metabolic maps settings
            </Typography>

            <LabelledSelect
              label='Taxonomic level on KEGG pathways'
              value={configData.keggcharterTaxaLevel}
              onChange={(ev) => onConfigChange('keggcharterTaxaLevel', ev.target.value)}
              options={keggcharterTaxaLevelOptions}
            />

            <LabelledNumberField
              label='Number of taxa on KEGG pathways'
              value={configData.keggcharterNumberOfTaxa}
              onChange={(ev) => onConfigChange('keggcharterNumberOfTaxa', ev.target.valueAsNumber)}
            />

            <Divider style={{ margin: '1rem 0' }} />

            <Typography variant='h6'>
              Proteomics settings
            </Typography>

            <LabelledSelect
              label='Proteomics workflow'
              value={configData.proteomicsWorkflow}
              onChange={(ev) => onConfigChange('proteomicsWorkflow', ev.target.value)}
              options={proteomicsWorkflowOptions}
            />

            <LabelledCheckbox
              label='Use cRAP database'
              checked={configData.useCrap}
              setChecked={(ev) => onConfigChange('useCrap', ev.target.checked)}
            />

            {
              configData.useCrap ? (<></>) : (
                <LabelledTextField
                  label='Contaminants database'
                  value={configData.diamondDatabase}
                  onChange={(ev) => onConfigChange('proteomicsContaminantesDatabase', ev.target.value)}
                  placeholder={defaultValues.proteomicsContaminantesDatabase}
                />
              )
            }

            <LabelledSelect
              label='Taxa level of reference proteomes'
              value={configData.referenceProteomesTaxaLevel}
              onChange={(ev) => onConfigChange('referenceProteomesTaxaLevel', ev.target.value)}
              options={referenceProteomesTaxaLevelOptions}
            />

            <LabelledSelect
              label='Protease used'
              value={configData.protease}
              onChange={(ev) => onConfigChange('protease', ev.target.value)}
              options={proteaseOptions}
            />

            {
              ((configData.protease) !== "File") ? (<></>) : (
                <LabelledTextField
                  label='Protease FASTA file'
                  value={configData.proteaseFile}
                  onChange={(ev) => onConfigChange('proteaseFile', ev.target.value)}
                  placeholder={defaultValues.proteaseFile}
                />
              )
            }

          </CardContent>
          <CardActions
            style={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >

            <Button
              onClick={() => onConfigOverwrite(defaultValues)}
              variant='contained'
              color='primary'
            >
              Set to default values
            </Button>

            <Button
              onClick={() => onConfigOverwrite(emptyValues)}
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

function Config({ configData, onConfigChange, onConfigOverwrite }) {
  return (
    <DashboardLayout>
      <div className='App'>
        <Header />
        <Main
          configData={configData}
          onConfigChange={onConfigChange}
          onConfigOverwrite={onConfigOverwrite}
        />
      </div>
    </DashboardLayout>
  )
}

export default Config
