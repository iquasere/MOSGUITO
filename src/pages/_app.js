import React, {useState} from "react";

import Routes from "./_routes";
import * as defaultValues from '../utils/defaultValues.json';

export const App = () => {
  const [configData, setConfig] = useState(defaultValues.default)
  const [outputsFiles, setOutputsFiles] = useState({})
  const [hasMt, setHasMt] = useState(true)
  const toggleHasMt = () => setHasMt(!hasMt)
  const [hasMp, setHasMp] = useState(false)
  const toggleHasMp = () => setHasMp(!hasMp)

  const onConfigChange = (field, value) => {
    const newValue = { ...configData, [field]: value }
    setConfig(newValue)
  }

  const onConfigOverwrite = (newConfigData) => {
    const newValue = newConfigData
    setConfig(newValue)
  }

  return <Routes
    configData={configData}
    onConfigChange={onConfigChange}
    onConfigOverwrite={onConfigOverwrite}
    outputsFiles={outputsFiles}
    setOutputsFiles={setOutputsFiles}
    hasMt={hasMt}
    toggleHasMt={toggleHasMt}
    hasMp={hasMp}
    toggleHasMp={toggleHasMp}
  />;
};

