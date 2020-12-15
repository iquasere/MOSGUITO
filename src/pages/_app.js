import React, {useState} from "react";

import Routes from "./_routes";
import { defaultValues } from '../utils/defaultValues'

const App = () => {
  const [experiments, setExperiments] = useState([])
  const [configData, setConfig] = useState(defaultValues)

  return <Routes
    configData={configData}
    setConfig={setConfig}
    experiments={experiments}
    setExperiments={setExperiments}
  />;
};

export default App;
