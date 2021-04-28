import React, {useState} from "react";

import Routes from "./_routes";
import { defaultValues } from '../utils/defaultValues'

const App = () => {  //Função constante responsável por guardar informação anterior 
  const [experiments, setExperiments] = useState([ //constante resposável por criar a tabela experiments e alterar os resultados
    {
      "Files":"",
      "Sample":"",
      "Data type":"",
      "Condition":"",
      "Name":""
    }
    ])
  const [configData, setConfig] = useState(defaultValues) //constante responsável por alterar a congifData e cirar a configdata
  const [nExperimentsRows, setExperimentsRows] = useState(1) //constante responsável por criar as colunas da table experiments

  const onConfigChange = (field, value) => { //alteração de configuration no field x com o value tal
    const newValue = { ...configData, [field]: value }
    setConfig(newValue)
  }

  return <Routes //vai devolver ao router, os valores indicados em baixo 
    configData={configData}
    onConfigChange={onConfigChange}
    nExperimentsRows={nExperimentsRows}
    setExperimentsRows={setExperimentsRows}
    experiments={experiments}
    setExperiments={setExperiments}
  />;
};

export default App;
