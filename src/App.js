import React, { useState } from 'react'
import YAML from 'yaml'
import {
  Card,
  CardContent,
  CardActions,
  Button
} from '@material-ui/core'
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

    console.log(JSON.stringify(values, null, 2).toString())
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

  // Function to download data to a file
  function Download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

    function DownloadJson() {
    JSON.stringify(values, null, 2).toString()
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
              placeholder={defaultValues.output}
            />

            <LabelledTextField
              label='Resources directory'
              value={values.resourcesDirectory}
              onChange={(ev) => handleChange('resourcesDirectory', ev.target.value)}
              placeholder={defaultValues.resourcesDirectory}
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
              onClick={(ev) => Download(JSON.stringify(values, null, 2), 'config.json', 'json')}
            >
              Download configuration file
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
        MOSGUITO
      </h1>
      To run MOSCA, you need both a configuration and an experiments files. MOSGUITO is used to obtained configuration files, and you can
      <a href='https://raw.githubusercontent.com/iquasere/MOSCA/master/config/experiments.tsv' >
        <span style={{ color: 'wheat' }}> download</span></a> an example of experiments file from MOSCA's repository.

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
