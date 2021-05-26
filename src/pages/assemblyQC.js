import React from 'react';

import {DashboardLayout} from '../components/Layout';
import {Button, Toolbar, Typography} from "@material-ui/core";
import CSVReader from 'react-csv-reader'

const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: header =>
    header
      .toLowerCase()
      .replace(/\W/g, '_')
}

const Main = ({ outputsFolder }) => {

  return (
    <main className='main'>
      <Toolbar>
        <div>
          <Typography variant="h6">Quality check reports from assembly</Typography>
        </div>

      </Toolbar>
    </main>
  )
}

const AssemblyQC = ({ outputsFolder }) => {
  return (
    <DashboardLayout>
      <Main
        outputsFolder={outputsFolder}
      />
    </DashboardLayout>
  )
}

export default AssemblyQC;