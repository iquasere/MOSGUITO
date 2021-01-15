import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ResultsPage from "./results";
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
import {uniprotDatabases} from "../utils/uniprotDatabases"
import {uniprotColumns} from "../utils/uniprotColumns"

const Routes = ({ configData, onConfigChange, experiments, setExperiments, nExperimentsRows, setExperimentsRows }) => {

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
            uniprotPossibilities={uniprotColumns}
            label={"UniProt columns"}
          />
        </Route>

        <Route path="/MOSGUITO/uniprot-databases">
          <UniprotDatabases
            uniprotList={configData.uniprotDatabases}
            onChange={(value) => onConfigChange('uniprotDatabases', value)}
            uniprotPossibilities={uniprotDatabases}
            label={"UniProt databases"}
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
          <ResultsPage />
        </Route>

        <Route path="/MOSGUITO">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
