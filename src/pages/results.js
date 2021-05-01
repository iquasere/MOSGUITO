import React from 'react';


import {DashboardLayout} from '../components/Layout';


const ResultsPage = () => { //inserir o botão responsável por modstrar a página dos result
  return (
    <DashboardLayout> 
      <h3>Choose the local(s) zip file(s)</h3>
      <p className="note">Note : your browser will process the zip file, don't choose a file too big !</p>
      <input type="file" id="file" name="file" multiple /><br />
    </DashboardLayout>
  )}

export default ResultsPage;