import React from 'react';
import $ from 'jquery'
import {DashboardLayout} from '../components/Layout';
import {Button, CardActions} from "@material-ui/core";

<<<<<<< HEAD
const ResultsPage = () => {
  let $Zipfile = $('#file') //inserir o botão responsável por modstrar a página dos result
=======
const Main = ({ outputsFiles, setOutputsFiles }) => {

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
          />
        </Button>

      <>{ ReactHtmlParser() }</>

    </>
  )
}

const LoadResults = ({ outputsFiles, setOutputsFiles }) => {
>>>>>>> parent of 1e89fc0 (VAriable- Loaded Results)
  return (
    <DashboardLayout>
      <h3>Choose the local(s) zip file(s)</h3>
      <p className="note">Note : your browser will process the zip file, don't choose a file too big !</p>
      <input type="file" id="file" name="file" multiple /><br />
      <Button 
      //onClick = {}
      color = 'primary'
      variant = 'contained'
      >Submit</Button>
    </DashboardLayout>
  )}

export default ResultsPage;