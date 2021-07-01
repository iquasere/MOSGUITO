import React from 'react';
import {DashboardLayout} from '../components/Layout';
import {Card, CardActions, CardContent, Toolbar, Typography} from "@material-ui/core";
import LabelledTextField from "../components/LabelledTextField";
import {defaultValues} from "../utils/defaultValues";
import LabelledSelect from "../components/LabelledSelect";
import LabelledCheckbox from "../components/LabelledCheckbox";
import {proteomicsWorkflowOptions} from "../utils/options";
import {referenceProteomesTaxaLevelOptions} from "../utils/options";
import {proteaseOptions} from "../utils/options";


const Main = ({ configData, onConfigChange }) => {
  return (
        <Card >
          <CardContent>
            <LabelledSelect
              label='Choose proteomics workflow'
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
                  label='Set the path of contaminants database'
                  value={configData.diamondDatabase}
                  onChange={(ev) => onConfigChange('proteomicsContaminantesDatabase', ev.target.value)}
                  placeholder={defaultValues.proteomicsContaminantesDatabase}
                />
              )
            }

            <LabelledSelect
              label='Choose taxonomic level to download reference proteomes'
              value={configData.referenceProteomesTaxaLevel}
              onChange={(ev) => onConfigChange('referenceProteomesTaxaLevel', ev.target.value)}
              options={referenceProteomesTaxaLevelOptions}
            />

            <LabelledTextField
              label='Set protease to use'
              value={configData.diamondDatabase}
              onChange={(ev) => onConfigChange('diamondDatabase', ev.target.value)}
              placeholder={defaultValues.diamondDatabase}
            />

            <LabelledSelect
              label='Choose protease used in proteomics experiment'
              value={configData.protease}
              onChange={(ev) => onConfigChange('protease', ev.target.value)}
              options={proteaseOptions}
            />

            {
              ((configData.protease) !== "File") ? (<></>) : (
                <LabelledTextField
                  label='Set the filename of protease FASTA file'
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
          </CardActions>
        </Card>
  )
}

const ProteomicsConfiguration = ({ configData, onConfigChange }) => {
  return (
    <DashboardLayout>
      <Toolbar>
        <Typography variant="h6">Configurations for metaproteomics analysis with MOSCA</Typography>
      </Toolbar>
      <Main
        configData={configData}
        onConfigChange={onConfigChange}
      />
    </DashboardLayout>
  )
}

export default ProteomicsConfiguration;