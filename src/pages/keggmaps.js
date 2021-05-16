import React from 'react';

import {DashboardLayout} from '../components/Layout';
import {CardContent, Typography} from "@material-ui/core";
import KeggMapsAccordion from "../components/KeggMapsAccordion";
import {keggMaps} from "../utils/keggMaps";

const Main = ({ configData, onConfigChange }) => {

  return (
    <main className='main'>
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