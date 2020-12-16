import React from 'react';

import {DashboardLayout} from '../components/Layout';
import {Typography} from "@material-ui/core";
import UniprotColumnsAccordion from "../components/UniprotColumnsAccordion";
import UniprotDatabasesAccordion from "../components/UniprotDatabasesAccordion";

const Main = ({ configData, onConfigChange }) => {

  return (
    <main className='main'>
      <UniprotColumnsAccordion
        uniprotColumnsList={configData.uniprotColumns}
        onChange={(value) => onConfigChange('uniprotColumns', value)}
      />
      <UniprotDatabasesAccordion
        uniprotDatabasesList={configData.uniprotDatabases}
        onChange={(value) => onConfigChange('uniprotDatabases', value)}
      />
    </main>
  )
}

const UniprotInfo = ({ configData, onConfigChange }) => {
  return (
    <DashboardLayout>
      <Main
        configData={configData}
        onConfigChange={onConfigChange}
      />
    </DashboardLayout>
  )
}

export default UniprotInfo;