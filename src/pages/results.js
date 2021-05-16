import React, { useState } from 'react';
import { DashboardLayout } from '../components/Layout';
import { Button, Toolbar, Typography } from "@material-ui/core";
import ReactHtmlParser from 'react-html-parser';
import * as zip from "@zip.js/zip.js/dist/zip.min.js";
import {FastQCPage} from './fastQCReports'
//import {reader} from './ServerUnzip'


export let ResultsDisposition = false;
async function render(event){
  const file = event.target.files[0];
  const blobReader = new zip.BlobReader(file);
  const zipReader = new zip.ZipReader (blobReader);
  const entries = await zipReader.getEntries();
  let urlsFastqc = [];
  
  entries.forEach(async file => {
    if (file.directory === false){
      if(file.filename.includes('Preprocess')){
        const blob = await file.getData(new zip.BlobWriter(['text/html']))
        const HtmlURL = URL.createObjectURL(blob)
        urlsFastqc.push(HtmlURL)
      }
      //const blob = await file.getData(new zip.BlobWriter(['image/jpeg', 'text/csv', 'text/html', 'application/json']));

      //const imageURL = URL.createObjectURL(blob);
    
      //urls.push(imageURL);
  }
  });
  await zipReader.close()
  function badjoras (element, index, array){
    FastQCPage(element)
  }
  urlsFastqc.forEach(badjoras);
  //FastQCPage(urlsFastqc)
  //return urls;
}


const Main = ({ outputsFiles, setOutputsFiles }) => {

  
  //let fileReader;

  /*const handleFolder = files => {
    setOutputsFiles(files)
    console.log(files)
    const file = files.item(0);
  };*/
  const handleUploadClick = () => {
    ResultsDisposition = true
  }
  const handleZipChange = (event) => {
    console.log(render(event))
  }
  return (
    <>
      <Button
        variant='contained'
        color='secondary'
        component="label"
        onClick={handleUploadClick}
      >
        Upload results folder
          <input
          type="file"
          accept='application/zip'
          onChange={handleZipChange}
          hidden
        />
      </Button>

      <>{ReactHtmlParser()}</>

    </>
  )
};

export const LoadResults = ({ outputsFiles, setOutputsFiles }) => {
  return (
    <DashboardLayout>
      <Toolbar>
        <Typography variant="h6">MOSCA results page</Typography>
      </Toolbar>
      <Main
        outputsFiles={outputsFiles}
        setOutputsFiles={setOutputsFiles}
      />
    </DashboardLayout>

  )
}

