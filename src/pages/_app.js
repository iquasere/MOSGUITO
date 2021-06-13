import React, {useState} from "react";

import Routes from "./_routes";
import { defaultValues } from '../utils/defaultValues'

export const App = () => {
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
  const [outputsFiles, setOutputsFiles] = useState({})

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
    outputsFiles={outputsFiles}
    setOutputsFiles={setOutputsFiles}
  />;
};

