import React, {useState} from "react";

import Routes from "./_routes";
import { defaultValues } from '../utils/defaultValues'

const App = () => {
  const [experiments, setExperiments] = useState([
    {
      "Files":"",
      "Sample":"",
      "Data type":"",
      "Condition":"",
      "Name":""
    }
    ])
  const [configData, setConfig] = useState(defaultValues)
  const [nExperimentsRows, setExperimentsRows] = useState(1)

  const onConfigChange = (field, value) => {
    const newValue = { ...configData, [field]: value }
    setConfig(newValue)
  }

  return <Routes
    configData={configData}
    onConfigChange={onConfigChange}
    nExperimentsRows={nExperimentsRows}
    setExperimentsRows={setExperimentsRows}
    experiments={experiments}
    setExperiments={setExperiments}
  />;
};

export default App;
