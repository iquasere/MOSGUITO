import React, {useState} from 'react';

import {DashboardLayout} from '../components/Layout';
import {Button, Toolbar, Typography} from "@material-ui/core";
import ReactHtmlParser,{ processNodes, convertNodeToElement, htmlparser2 } from "react-html-parser";
import Accordion from "../components/Accordion";

export const FastQCPage = (listFastQC) => {
    console.log(readAsText(listFastQC))
    
    return(
      <div id='display'>

      </div>
    )
}

/*const Main = ({ outputsFiles }) => {

  const [fastQCRaws, setFastQCRaws] = useState([])
  let fileReader = new FileReader()

  const selectFastQCFiles = (files) => {
    let fQCFiles = []
    Object.keys(files).map((index) => {
        if (files[index]["webkitRelativePath"].includes("fastqc_reports")){
            fQCFiles.push(files[index])
        }
    })
    return fQCFiles
  }

  const addToFastQCRaws = value => {
    const newList = [...fastQCRaws]
    newList.push(value)
    setFastQCRaws(newList)
  }

  const handleFolder = files => {
    const file = files[0];
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file)
  }

  const handleFileRead = (e) => {
    const content = fileReader.result;
    addToFastQCRaws(content)
  }

  const fastQCFiles = selectFastQCFiles(outputsFiles.outputsFiles)


  return (
    <main className='main'>
      <Toolbar>
        <div>
          <Typography variant="h6">FastQC reports from preprocessing with MOSCA</Typography>
        </div>
      </Toolbar>

      <Button
        variant='contained'
        color='secondary'
        component="label"
        onClick={(ev) => {console.log(fastQCFiles)}}
      >
      Show files
      </Button>

      <Button
        variant='contained'
        color='secondary'
        component="label"
        onClick={(ev) => {console.log(handleFolder(fastQCFiles))}}
      >
      Show first raw
      </Button>

      <Button
        variant='contained'
        color='secondary'
        component="label"
        onClick={(ev) => {console.log(fastQCRaws)}}
      >
      Show RAWs
      </Button>


        {
        fastQCRaws.map((file, index)=>{
          <Accordion key={index} title={index}>
            { ReactHtmlParser(file) }
          </Accordion>
      })}

    </main>
  )
}

const FastQCReports = ( outputsFiles ) => {
  return (
    <DashboardLayout>
      <Main
        outputsFiles={outputsFiles}
      />
    </DashboardLayout>
  )
}

export default FastQCReports; */

export const FastQCFiles = () => {
  return (
    <DashboardLayout>
      <h1>Teste</h1>
      <FastQCPage>

      </FastQCPage>
    </DashboardLayout>
  )
}