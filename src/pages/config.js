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
  upimapiDatabasesOptions,
  recognizerDatabasesOptions,
  proteomicsWorkflowOptions,
  referenceProteomesTaxaLevelOptions,
  proteaseOptions
} from '../utils/options'
import './../App.css'
import {DashboardLayout} from "../components/Layout";
import Accordion from "../components/Accordion";

const Main = ({ configData, onConfigChange, onConfigOverwrite, hasMt, toggleHasMt, hasMp, toggleHasMp }) => {

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
          <CardActions
            style={{
              display: 'flex',
              //justifyContent: 'flex-center'
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

            <Button
              variant='outlined'
            >
              MOSCA {configData.version}
            </Button>
          </CardActions>

          <Divider style={{ margin: '1rem 0' }} />

          <CardContent>

            <Typography variant='h6'>
              General settings
            </Typography>

            <LabelledTextField
              label='Output directory'
              value={configData.output}
              onChange={(ev) => onConfigChange('output', ev.target.value)}
              placeholder={defaultValues.output}
              helpMessage='The directory where the output files will be written'
            />

            <LabelledTextField
              label='Resources directory'
              value={configData.resourcesDirectory}
              onChange={(ev) => onConfigChange('resourcesDirectory', ev.target.value)}
              placeholder={defaultValues.resourcesDirectory}
              helpMessage='The directory where supporting files will be stored'
            />

            <LabelledNumberField
              label='Number of threads to use'
              value={configData.threads}
              onChange={(ev) => onConfigChange('threads', ev.target.valueAsNumber)}
              helpMessage='The number of threads to use for the analysis'
            />

            <LabelledNumberField
              label='Maximum memory (Gb)'
              value={configData.maxMemory}
              onChange={(ev) => onConfigChange('maxMemory', ev.target.valueAsNumber)}
              helpMessage='The maximum amount of memory to use for the analysis'
            />

            <LabelledTextField
              label='Reads files suffix'
              value={configData.suffix}
              onChange={(ev) => onConfigChange('suffix', ev.target.valueAsNumber)}
              helpMessage="The suffix of the reads files. For example, if the reads files are named 'reads_R1_001.fastq.gz' and 'reads_R2_001.fastq.gz', the suffix is '_001'."
            />

            <Divider style={{ margin: '1rem 0' }} />

            <Typography variant='h6'>
              Preprocessing settings
            </Typography>

            <LabelledNumberField
              label='Minimum read length'
              value={configData.minimumReadLength}
              onChange={(ev) => onConfigChange('minimumReadLength', ev.target.valueAsNumber)}
              helpMessage='The minimum read length to keep. Reads shorter than this will be discarded.'
            />

            <LabelledNumberField
              label='Minimum read average quality'
              value={configData.minimumReadAverageQuality}
              onChange={(ev) => onConfigChange('minimumReadAverageQuality', ev.target.valueAsNumber)}
              helpMessage='The minimum average quality of the reads to keep. Reads with an average quality lower than this will be discarded.'
            />

            <Divider style={{ margin: '1rem 0' }} />

            <Typography variant='h6'>
              Assembly settings
            </Typography>

            <LabelledCheckbox
              label='Perform assembly'
              checked={configData.doAssembly}
              setChecked={(ev) => onConfigChange('doAssembly', ev.target.checked)}
              helpMessage='Whether to perform assembly. If unchecked, assembly and binning will be skipped, and gene calling will be performed directly on the reads.'
            />

            {
              configData.doAssembly ? (
                <>
                  <LabelledSelect
                    label='Assembler'
                    value={configData.assembler}
                    onChange={(ev) => onConfigChange('assembler', ev.target.value)}
                    options={assemblerOptions}
                    helpMessage='The assembler to use for the assembly. MetaSPAdes and Megahit are recommended for metagenomics, while Trinity and rnaSPAdes are recommended for RNA-Seq anaysis.'
                  />

                  <Divider style={{ margin: '1rem 0' }} />

                  <Typography variant='h6'>
                    Binning settings
                  </Typography>

                  <LabelledCheckbox
                    label='Perform iterative binning'
                    checked={configData.doIterativeBinning}
                    setChecked={(ev) => onConfigChange('doIterativeBinning', ev.target.checked)}
                    helpMessage='Whether to perform iterative binning. If unchecked, binning will be performed once for default parameters, if checked, iterative binning will cycle through different parameters to obtain better binning results.'
                  />

                  <LabelledSelect
                    label='Markergene set'
                    value={configData.markerset}
                    onChange={(ev) => onConfigChange('markerset', ev.target.value)}
                    options={markersetOptions}
                    helpMessage="Use '107' if the analysis is limited to Bacteria, '40' if Archaea are to be considered."
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
                    label='Error model'
                    value={configData.errorModel}
                    onChange={(ev) => onConfigChange('errorModel', ev.target.value)}
                    options={errorModelOptions}
                    helpMessage='The error model to consider in gene calling, when not performing assembly. _5 and _10 represent expected 5% and 10% of erroneous base calls.'
                  />
              )
            }

            <LabelledSelect
              label='UPIMAPI database'
              value={configData.upimapiDatabase}
              onChange={(ev) => onConfigChange('upimapiDatabase', ev.target.value)}
              options={upimapiDatabasesOptions}
              helpMessage='Database to use as reference for sequence-homology annotation of genes identified.'
            />

            {
              configData.upimapiDatabase === 'taxids' ? (
                <LabelledTextField
                  label='Tax IDs (comma-separated)'
                  value={configData.upimapiTaxids}
                  onChange={(ev) => onConfigChange('upimapiTaxids', ev.target.value)}
                  placeholder={defaultValues.upimapiTaxids}
                  helpMessage='Comma-separated list of Tax IDs to use as reference for sequence-homology annotation.'
                />) : (<></>)
            }

            <LabelledNumberField
              label='Identifications per protein'
              value={configData.diamondMaxTargetSeqs}
              onChange={(ev) => onConfigChange('diamondMaxTargetSeqs', ev.target.valueAsNumber)}
              helpMessage='Number of identifications per gene to report from sequence-homology annotation.'
            />

            <div style={{ margin: '1rem 0'}}>
              <Accordion
                title="Pick databases of reCOGnizer"
                helpMessage='Databases to use as reference for domain-homology annotation of genes identified.'
              >
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

            <LabelledCheckbox
              label='Download CDD resources'
              checked={configData.downloadCddResources}
              setChecked={(ev) => onConfigChange('downloadCddResources', ev.target.checked)}
              helpMessage='Whether to download the CDD resources for domain-homology annotation with reCOGnizer. Select only if these files are not available in the folder "resources_directory" (usually when running MOSCA for the first time).'
            />

            <Divider style={{ margin: '1rem 0' }} />

            <Typography variant='h6'>
              Differential expression settings
            </Typography>

            <LabelledCheckbox
              label='Data contains RNA-Seq'
              checked={hasMt}
              setChecked={(ev) => toggleHasMt()}
              helpMessage='Whether the data contains RNA-Seq data. If unchecked, differential expression will be skipped.'
            />

            {
              hasMt ? (
                <>
                  <LabelledSelect
                    label='Normalization method'
                    value={configData.normalizationMethod}
                    onChange={(ev) => onConfigChange('normalizationMethod', ev.target.value)}
                    options={normalizationMethodOptions}
                    helpMessage='The normalization method to use for gene expression.'
                  />

                  <LabelledNumberField
                    label='Minimum differential expression'
                    value={configData.minimumDifferentialExpression}
                    onChange={(ev) => onConfigChange('minimumDifferentialExpression', ev.target.valueAsNumber)}
                    step={0.1}
                    minimum={0.1}
                    helpMessage='The minimum differential expression to test the null hypothesis, i.e., to determine if a difference in expression is relevant enough.'
                  />

                  <Divider style={{ margin: '1rem 0' }} />
                </>
              ):(<></>)
            }

            <Typography variant='h6'>
              Proteomics settings
            </Typography>

            <LabelledCheckbox
              label='Data contains MS spectra'
              checked={hasMp}
              setChecked={(ev) => toggleHasMp()}
              helpMessage='Whether the data contains MS spectra. If unchecked, proteomics analysis will be skipped.'
            />
            {
            hasMp ? (
              <>
                <LabelledSelect
                  label='Proteomics workflow'
                  value={configData.proteomicsWorkflow}
                  onChange={(ev) => onConfigChange('proteomicsWorkflow', ev.target.value)}
                  options={proteomicsWorkflowOptions}
                  helpMessage='The proteomics workflow to use for proteomics analysis.'
                />

                <LabelledCheckbox
                  label='Use cRAP database'
                  checked={configData.useCrap}
                  setChecked={(ev) => onConfigChange('useCrap', ev.target.checked)}
                  helpMessage='Whether to use the cRAP database automatically retrieved by MOSCA, or use a custom contaminants database.'
                />

                {
                  configData.useCrap ? (<></>) : (
                    <LabelledTextField
                      label='Contaminants database'
                      value={configData.proteomicsContaminantesDatabase}
                      onChange={(ev) => onConfigChange('proteomicsContaminantesDatabase', ev.target.value)}
                      placeholder={defaultValues.proteomicsContaminantesDatabase}
                      helpMessage='The custom contaminants database to use for proteomics analysis.'
                    />
                  )
                }

                <LabelledSelect
                  label='Get proteomes for level'
                  value={configData.referenceProteomesTaxaLevel}
                  onChange={(ev) => onConfigChange('referenceProteomesTaxaLevel', ev.target.value)}
                  options={referenceProteomesTaxaLevelOptions}
                  helpMessage='The taxonomic level for which to retrieve reference proteomes, based on taxonomic characterization obtained with MetaPhlan2.'
                />

                <LabelledSelect
                  label='Protease used'
                  value={configData.protease}
                  onChange={(ev) => onConfigChange('protease', ev.target.value)}
                  options={proteaseOptions}
                  helpMessage='The protease used in wet-lab proteomics analysis. If not in the list, select "File" and input the filename of the protease sequence in FASTA format.'
                />

                {
                  ((configData.protease) !== "File") ? (<></>) : (
                    <LabelledTextField
                      label='Protease FASTA file'
                      value={configData.proteaseFile}
                      onChange={(ev) => onConfigChange('proteaseFile', ev.target.value)}
                      placeholder={defaultValues.proteaseFile}
                      helpMessage='The filename of the protease sequence in FASTA format.'
                    />
                  )
                }

                <Divider style={{ margin: '1rem 0' }} />
              </>
            ):(<></>)
          }

            <Typography variant='h6'>
              KEGG metabolic maps settings
            </Typography>

            <LabelledSelect
              label='KEGG maps taxonomic level'
              value={configData.keggcharterTaxaLevel}
              onChange={(ev) => onConfigChange('keggcharterTaxaLevel', ev.target.value)}
              options={keggcharterTaxaLevelOptions}
              helpMessage='The taxonomic level at which genomic potential should be represented with KEGGCharter.'
            />

            <LabelledNumberField
              label='KEGG maps number of taxa'
              value={configData.keggcharterNumberOfTaxa}
              onChange={(ev) => onConfigChange('keggcharterNumberOfTaxa', ev.target.valueAsNumber)}
              helpMessage='The number of most abundant taxa for which genomic potential should be represented with KEGGCharter.'
            />

          </CardContent>
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

function Config({ configData, onConfigChange, onConfigOverwrite, hasMt, toggleHasMt, hasMp, toggleHasMp }) {
  return (
    <DashboardLayout>
      <div className='App'>
        <Header />
        <Main
          configData={configData}
          onConfigChange={onConfigChange}
          onConfigOverwrite={onConfigOverwrite}
          hasMt={hasMt}
          toggleHasMt={toggleHasMt}
          hasMp={hasMp}
          toggleHasMp={toggleHasMp}
        />
      </div>
    </DashboardLayout>
  )
}

export default Config
