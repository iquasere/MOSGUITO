import React from 'react';

import {DashboardLayout} from '../components/Layout';
import {CardContent, Toolbar, Typography} from "@material-ui/core";
import KeggMapsAccordion from "../components/KeggMapsAccordion";

const Main = ({ configData, onConfigChange }) => {

  return (
    <main className='main'>
      <card>
        <Toolbar>
          <Typography variant="h6">KEGG metabolic maps for KEGGCharter</Typography>
        </Toolbar>
      <KeggMapsAccordion
        keggMapList={configData.keggcharterMaps}
        onChange={(value) => onConfigChange('keggcharterMaps', value)}
      />
      </card>
    </main>
  )
}

const KeggMaps = ({ configData, onConfigChange }) => {
  return (
    <DashboardLayout>
      <Main
        configData={configData}
        onConfigChange={onConfigChange}
      />
    </DashboardLayout>
  )
}

export default KeggMaps;