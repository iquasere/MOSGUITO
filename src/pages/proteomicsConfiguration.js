import React from 'react';
import {DashboardLayout} from '../components/Layout';

const Main = ({ configData, onConfigChange }) => {
  return (
    <div className='App'>
    </div>
  )
}

const ProteomicsConfiguration = ({ configData, onConfigChange }) => {
  return (
    <DashboardLayout>
      <Main
        configData={configData}
        onConfigChange={onConfigChange}
      />
    </DashboardLayout>
  )
}

export default ProteomicsConfiguration;