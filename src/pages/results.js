import React from 'react';
import {Button, CardActions} from "@material-ui/core";

import {DashboardLayout} from '../components/Layout';


const ResultsPage = () => { //inserir o botão responsável por modstrar a página dos results
  return (
    <DashboardLayout> 
      <h1 style={{textAlign: 'center'}} >Upload your Results! No Results avaiable!</h1>
      <Button
      href = 'https://www.youtube.com'
      target = '_blank'
      color = 'secondary'
      variant = 'contained'
      >
        Upload
      </Button>
    </DashboardLayout>
  )
}

export default ResultsPage;