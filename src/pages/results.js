import React from 'react';
import $ from 'jquery'
import {DashboardLayout} from '../components/Layout';
import {Button, CardActions} from "@material-ui/core";

const ResultsPage = () => {
  let $Zipfile = $('#file') //inserir o botão responsável por modstrar a página dos result
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