import React, { useState } from 'react';
import { DashboardLayout } from '../components/Layout';
import { Button, Toolbar, Typography } from "@material-ui/core";
import ReactHtmlParser from 'react-html-parser';
import * as zip from "@zip.js/zip.js/dist/zip.min.js";


export let ResultsDisposition = false;
async function obtainBlobArray(event){
  const file = event.target.files[0];
  const blobReader = new zip.BlobReader(file);
  const zipReader = new zip.ZipReader (blobReader);
  const entries = await zipReader.getEntries();
  let FastQCReports = [];
  let KronaPlotsResults = [];
  let DifferentailExpressionResults = [];
  let KEGGMapsResults = [];

  console.log(entries)
  for(let i = 0; i< entries.length; i++){
    if (entries[i].directory === false && entries[i].compressedSize != 0){
      if(entries[i].filename.includes('Preprocess')){
        console.log(entries[i])
        const blobFastQC = await entries[i].getData(new zip.BlobWriter(['text/html']))
        FastQCReports.push(blobFastQC)
      }
    if(entries[i].filename.includes('Annotation')){
      const blobKronaPlots = await entries[i].getData(new zip.BlobWriter(['text/html']))
      KronaPlotsResults.push(blobKronaPlots)
    }
    if(entries[i].filename.includes('Differential expression analysis')){
      const blobHeatmaps = await entries[i].getData(new zip.BlobWriter(['image/jpeg']))
      DifferentailExpressionResults.push(blobHeatmaps)

    }
    if(entries[i].filename.includes('KEGGMaps')){
      console.log(entries[i])
      const blobKEGGMaps = await entries[i].getData(new zip.BlobWriter(['image/png']))
      KEGGMapsResults.push(blobKEGGMaps)

    }}
  }
  
  await zipReader.close()
  console.log(KronaPlotsResults)
  return {
    qcReports: FastQCReports,
    KronaPlots: KronaPlotsResults,
    Heatmaps: DifferentailExpressionResults,
    KEGGMaps: KEGGMapsResults
  }; 
}


const Main = ({ outputsFiles, setOutputsFiles }) => {

  

  const handleUploadClick = () => {
    ResultsDisposition = true
  }
  const handleZipChange = async (event) => {
    setOutputsFiles(await obtainBlobArray(event))
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

