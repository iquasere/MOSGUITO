import React from 'react';
import {DashboardLayout} from '../components/Layout';
import ExperimentsTable from "../components/ExperimentsTable";

const Experiments = ({ experiments, setExperiments }) => {

  return (
    <DashboardLayout>
      <ExperimentsTable
        experiments={experiments}
        setExperiments={setExperiments}
      />
    </DashboardLayout>
  )
}

export default Experiments;