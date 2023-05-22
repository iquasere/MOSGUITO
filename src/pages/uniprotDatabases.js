import React, { useEffect, useState } from 'react';
import { DashboardLayout } from '../components/Layout';
import { Card, Typography } from "@material-ui/core";
import UniprotAccordion from "../components/UniprotAccordion";
import { fetchUniprotColumns } from "../utils/getUniprotColumns"

const Main = ({ uniprotList, onChange, uniprotDatabases }) => {

  return (
    <main className='main'>
      <form className='form' >
        <Card>
        <UniprotAccordion uniprotList={uniprotList} onChange={onChange} uniprotPossibilities={uniprotDatabases} />
        </Card>
      </form>
    </main>
  )
}

const Header = () => {
  return (
    <header className='header'>
      <Typography variant='h4'>
        UniProt databases
      </Typography>
      <Typography variant='subtitle1'>
        Select the databases for which cross-references should be retrieved from ID mapping the UniProt knowledgebase.
      </Typography>
    </header>
  )
}

const UniprotDatabases = ({ uniprotList, onChange }) => {
  const [uniprotDatabases, setUniprotDatabases] = useState(null);

  useEffect(() => {
    fetchUniprotColumns()
      .then(data => {
        setUniprotDatabases(data.uniprotDatabases);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <DashboardLayout>
      <div className='App'>
      <Header />
      {uniprotDatabases && (
        <Main
          uniprotList={uniprotList}
          onChange={onChange}
          uniprotDatabases={uniprotDatabases}
        />
      )}
      </div>
    </DashboardLayout>
  )
}

export default UniprotDatabases;