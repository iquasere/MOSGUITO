import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ProjectPage from "./project";
import MembersPage from "./members";
import AboutPage from "./about";
import TeamsPage from "./teams";
import HomePage from "./home";
import Config from "./config"
import Experiments from "./experiments";
import {CardContent} from "@material-ui/core";
import UniprotColumns from "./uniprotColumns";
import UniprotDatabases from "./uniprotDatabases"
import KeggMaps from "./keggmaps";
import ProteomicsConfiguration from "./proteomicsConfiguration";
import {LoadResults} from "./results";
import {FastQCFiles} from "./fastQCReports";
import AssemblyQC from "./assemblyQC";

const Routes = ({ configData, onConfigChange, experiments, setExperiments,
                  nExperimentsRows, setExperimentsRows,
                  outputsFiles, setOutputsFiles }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/MOSGUITO/general-configuration">
          <Config
            configData={configData}
            onConfigChange={onConfigChange}
          />
        </Route>

        <Route path="/MOSGUITO/experiments">
          <Experiments
            experiments={experiments}
            setExperiments={setExperiments}
            nExperimentsRows={nExperimentsRows}
            setExperimentsRows={setExperimentsRows}
          />
        </Route>

        <Route path="/MOSGUITO/uniprot-columns">
          <UniprotColumns
            uniprotList={configData.uniprotColumns}
            onChange={(value) => onConfigChange('uniprotColumns', value)}
          />
        </Route>

        <Route path="/MOSGUITO/uniprot-databases">
          <UniprotDatabases
            uniprotList={configData.uniprotDatabases}
            onChange={(value) => onConfigChange('uniprotDatabases', value)}
          />
        </Route>

        <Route path="/MOSGUITO/keggmaps">
          <KeggMaps
            configData={configData}
            onConfigChange={onConfigChange}
          />
        </Route>

        <Route path="/MOSGUITO/proteomics-configuration">
          <ProteomicsConfiguration
            configData={configData}
            onConfigChange={onConfigChange}
          />
        </Route>

        <Route path="/MOSGUITO/about">
        </Route>

        <Route path="/MOSGUITO/members">
          <MembersPage />
        </Route>

        <Route path="/MOSGUITO/project">
          <ProjectPage />
        </Route>

        <Route path="/MOSGUITO/about">
          <AboutPage />
        </Route>

        <Route path="/MOSGUITO/another/teams">
          <TeamsPage />
        </Route>

        <Route path="/MOSGUITO/results">
          <LoadResults
            outputsFiles = {outputsFiles}
            setOutputsFiles = {setOutputsFiles}
          />
        </Route>

        <Route path="/MOSGUITO/load-results">
          <LoadResults
            outputsFiles={outputsFiles}
            setOutputsFiles={setOutputsFiles}
          />
        </Route>

        <Route path="/MOSGUITO/fastqc-reports">
          <FastQCFiles
            outputsFiles={outputsFiles.qcReports}
          />
        </Route>

        <Route path="/MOSGUITO/assembly-qc">
          <AssemblyQC
            outputsFolder={outputsFiles}
          />
        </Route>

        <Route path="/MOSGUITO">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
