import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SettingsPage from "./settings";
import ProjectsPage from "./projects";
import MembersPage from "./members";
import AboutPage from "./about";
import TeamsPage from "./teams";
import HomePage from "./home";
import Config from "./config"
import Experiments from "./experiments";

const Routes = ({ configData, setConfig, experiments, setExperiments, nExperimentsRows, setExperimentsRows }) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/config">
          <Config
            configData={configData}
            setConfig={setConfig}
          />
        </Route>
        <Route path="/experiments">
          <Experiments
            experiments={experiments}
            setExperiments={setExperiments}
            nExperimentsRows={nExperimentsRows}
            setExperimentsRows={setExperimentsRows}
          />
        </Route>
        <Route path="/config">
        </Route>
        <Route path="/about/members">
          <MembersPage />
        </Route>
        <Route path="/about/projects">
          <ProjectsPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/another/teams">
          <TeamsPage />
        </Route>
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
