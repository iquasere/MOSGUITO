import React from 'react';

import {DashboardLayout} from '../components/Layout';
import {CardContent, Toolbar, Typography} from "@material-ui/core";
import KeggMapsAccordion from "../components/KeggMapsAccordion";
import {keggMaps} from "../utils/keggMaps";

const Main = ({ configData, onConfigChange }) => {

  return (
    <main className='main'>
      <Toolbar>
        <div>
          <Typography variant="h6">KEGG metabolic maps for KEGGCharter</Typography>
        </div>
      </Toolbar>
      <KeggMapsAccordion
        keggMapList={configData.keggcharterMaps}
        onChange={(value) => onConfigChange('keggcharterMaps', value)}
      />
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