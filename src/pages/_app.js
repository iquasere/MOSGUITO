import React, {useState} from "react";

import Routes from "./_routes";
import { defaultValues } from '../utils/defaultValues'

const App = () => {
  const [experiments, setExperiments] = useState([])
  const [configData, setConfig] = useState(defaultValues)
  const [nExperimentsRows, setExperimentsRows] = useState(0)

  return <Routes
    configData={configData}
    setConfig={setConfig}
    nExperimentsRows={nExperimentsRows}
    setExperimentsRows={setExperimentsRows}
    experiments={experiments}
    setExperiments={setExperiments}
  />;
};

export default App;
