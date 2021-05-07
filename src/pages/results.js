import React, { useState } from 'react';
import {DashboardLayout} from '../components/Layout';
import {Button, Toolbar, Typography} from "@material-ui/core";
import ReactHtmlParser from 'react-html-parser';

const Main = ({ outputsFiles, setOutputsFiles }) => {
  let ResultsDisposition = false;
  let fileReader;

    const handleFolder = files => {
        setOutputsFiles(files)
        console.log(files)
        const file = files.item(0);

    }

  return (
    <>
        <Button
          variant='contained'
          color='secondary'
          component="label"
        >
          Upload results folder
          <input
            type="file"
            directory=""
            webkitdirectory=""
            onChange={ev => handleFolder(ev.target.files)}
            hidden
            onClick = {ResultsDisposition = true}
          />
        </Button>

      <>{ ReactHtmlParser() }</>

    </>
  )
}

const LoadResults = ({ outputsFiles, setOutputsFiles }) => {
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

export default LoadResults;