import React, { useEffect, useState } from 'react';
import { DashboardLayout } from '../components/Layout';
import { Card, Typography } from "@material-ui/core";
import UniprotAccordion from "../components/UniprotAccordion";
import { fetchUniprotColumns } from "../utils/getUniprotColumns";

const Main = ({ uniprotList, onChange, uniprotColumns }) => {
  return (
    <main className='main'>
      <form className='form'>
        <Card>
          <UniprotAccordion uniprotList={uniprotList} onChange={onChange} uniprotPossibilities={uniprotColumns} />
        </Card>
      </form>
    </main>
  )
}

const Header = () => {
  return (
    <header className='header'>
      <Typography variant='h4'>
        UniProt columns
      </Typography>
      <Typography variant='subtitle1'>
        Select the columns for which information should be retrieved from ID mapping the UniProt knowledgebase.
      </Typography>
    </header>
  )
}

const UniprotColumns = ({ uniprotList, onChange }) => {
  const [uniprotColumns, setUniprotColumns] = useState(null);

  useEffect(() => {
    fetchUniprotColumns()
      .then(data => {
        setUniprotColumns(data.uniprotColumns);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <DashboardLayout>
      <div className='App'>
        <Header />
        {uniprotColumns && (
          <Main
            uniprotList={uniprotList}
            onChange={onChange}
            uniprotColumns={uniprotColumns}
          />
        )}
      </div>
    </DashboardLayout>
  )
}

export default UniprotColumns;
