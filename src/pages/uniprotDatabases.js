import React from 'react';

import {DashboardLayout} from '../components/Layout';
import {Toolbar, Typography} from "@material-ui/core";
import UniprotAccordion from "../components/UniprotAccordion";
import {uniprotDatabases} from "../utils/uniprotDatabases"

const Main = ({ uniprotList, onChange }) => {

  return (
    <main className='main'>
      <Toolbar>
        <div>
          <Typography variant="h6">UniProt databases</Typography>
        </div>
      </Toolbar>
        <UniprotAccordion
          uniprotList={uniprotList}
          onChange={onChange}
          uniprotPossibilities={uniprotDatabases}
        />
    </main>
  )
}

const UniprotDatabases = ({ uniprotList, onChange }) => {
  return (
    <DashboardLayout>
      <Main
        uniprotList={uniprotList}
        onChange={onChange}
      />
    </DashboardLayout>
  )
}

export default UniprotDatabases;