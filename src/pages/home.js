import React from 'react';

import {DashboardLayout} from '../components/Layout';
import {Divider, Typography} from "@material-ui/core";

const Header = () => {
  return (
    <div className='App'>
    <header className='header'>
      <Typography variant='h4'>
        MOSGUITO
      </Typography>
      <Typography variant='h6'>
        MOSca's GUI TO generate config files
      </Typography>
    </header>
    </div>
  )
}

const Main = () => {
  return (
    <main className='main'>
      This is landing page
    </main>
  )
}

const HomePage = () => {
  return (
    <DashboardLayout>
      <div>
        <Header />
        <Divider style={{ margin: '1rem 0' }} />
        <Main />
      </div>
    </DashboardLayout>
  )
}

export default HomePage;