import React from 'react';

import {DashboardLayout} from '../components/Layout';
import {Toolbar, Typography} from "@material-ui/core";
import UniprotAccordion from "../components/UniprotAccordion";
import {uniprotColumns} from "../utils/uniprotColumns"

const Main = ({ uniprotList, onChange }) => {

  return (
    <main className='main'>
      <Toolbar>
        <div>
          <Typography variant="h6">UniProt columns</Typography>
        </div>
      </Toolbar>
      <UniprotAccordion
        uniprotList={uniprotList}
        onChange={onChange}
        uniprotPossibilities={uniprotColumns}
      />
    </main>
  )
}

const UniprotColumns = ({ uniprotList, onChange }) => {
  return (
    <DashboardLayout>
      <Main
        uniprotList={uniprotList}
        onChange={onChange}
      />
    </DashboardLayout>
  )
}

export default UniprotColumns;