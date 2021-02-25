import React from 'react';

import {DashboardLayout} from '../components/Layout';
import {Toolbar, Typography} from "@material-ui/core";
import UniprotAccordion from "../components/UniprotAccordion";

const Main = ({ uniprotList, onChange, uniprotPossibilities, label }) => {

  return (
    <main className='main'>
      <Toolbar>
        <div>
          <Typography variant="h6">{ label }</Typography>
        </div>
      </Toolbar>
      <UniprotAccordion
        uniprotList={uniprotList}
        onChange={onChange}
        uniprotPossibilities={uniprotPossibilities}
      />
    </main>
  )
}

const UniprotColumns = ({ uniprotList, onChange, uniprotPossibilities, label }) => {
  return (
    <DashboardLayout>
      <Main
        uniprotList={uniprotList}
        onChange={onChange}
        uniprotPossibilities={uniprotPossibilities}
        label={label}
      />
    </DashboardLayout>
  )
}

export default UniprotColumns;