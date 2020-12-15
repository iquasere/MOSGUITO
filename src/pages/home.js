import React from 'react';

import {DashboardLayout} from '../components/Layout';
import {Typography} from "@material-ui/core";

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

const HomePage = () => {
  return (
    <DashboardLayout>
      <Header />
    </DashboardLayout>
  )
}

export default HomePage;