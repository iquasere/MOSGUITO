import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SettingsPage from "./settings";
import ProjectPage from "./project";
import MembersPage from "./members";
import AboutPage from "./about";
import TeamsPage from "./teams";
import HomePage from "./home";
import Config from "./config"
import Experiments from "./experiments";
import {keggMaps} from "../utils/keggMaps";
import KeggMapsAccordion from "../components/KeggMapsAccordion";
import {CardContent} from "@material-ui/core";
import UniprotInfo from "./uniprotinfo";
import KeggMaps from "./keggmaps";

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

        <Route path="/MOSGUITO/uniprotinfo">
          <UniprotInfo
            configData={configData}
            onConfigChange={onConfigChange}
          />
        </Route>

        <Route path="/MOSGUITO/keggmaps">
          <KeggMaps
            configData={configData}
            onConfigChange={onConfigChange}
          />
        </Route>

        <Route path="/MOSGUITO/about">
        </Route>

        <Route path="/MOSGUITO/about/members">
          <MembersPage />
        </Route>

        <Route path="/MOSGUITO/about/projects">
          <ProjectPage />
        </Route>

        <Route path="/MOSGUITO/about">
          <AboutPage />
        </Route>

        <Route path="/MOSGUITO/another/teams">
          <TeamsPage />
        </Route>

        <Route path="/MOSGUITO/settings">
          <SettingsPage />
        </Route>

        <Route path="/MOSGUITO">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
