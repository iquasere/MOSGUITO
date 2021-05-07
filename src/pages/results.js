import React, { useState } from 'react';
import {DashboardLayout} from '../components/Layout';
import {Button, Toolbar, Typography} from "@material-ui/core";
import ReactHtmlParser from 'react-html-parser';
import { file } from 'jszip';

export let ResultsDisposition = false;



const Main = ({ outputsFiles, setOutputsFiles }) => {

  let fileReader;

    const handleFolder = files => {
      setOutputsFiles(files)
      console.log(files)
      const file = files.item(0);
    };

  return (
    <>
        <Button
          variant='contained'
          color='secondary'
          component="label"
          ///ResultsDisposition = true // está a fazer com que o display resultados ative o subNav n sei porque* doen't make sense
        >
          Upload results folder
          <input
            type="file"
            directory=""
            webkitdirectory=""
            onChange={ev => handleFolder(ev.target.files)}
            hidden
          />
        </Button>

      <>{ ReactHtmlParser() }</>

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

