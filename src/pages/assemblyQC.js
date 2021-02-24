import React from 'react';

import {DashboardLayout} from '../components/Layout';
import {Button, Toolbar, Typography} from "@material-ui/core";

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