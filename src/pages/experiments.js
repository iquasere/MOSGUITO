import React from 'react';
import {DashboardLayout} from '../components/Layout';
import ExperimentsTable from "../components/ExperimentsTable";
import {Button} from "@material-ui/core";
import download from "../utils/download";
import TSV from "tsv";

const Experiments = ({ experiments, setExperiments, nExperimentsRows, setExperimentsRows }) => {

  return (
    <DashboardLayout>
      <ExperimentsTable
        experiments={experiments}
        setExperiments={setExperiments}
        nExperimentsRows={nExperimentsRows}
        setExperimentsRows={setExperimentsRows}
      />

      <Button
        onClick={(ev) => download(TSV.stringify(experiments), "experiments.tsv", "tsv")}
        variant='contained'
        color='secondary'
      >
        Download TSV
      </Button>

    </DashboardLayout>
  )
}

export default Experiments;