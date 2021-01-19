import React, { useState } from 'react';
import ReactFileReader from 'react-file-reader';
import {DashboardLayout} from '../components/Layout';
import {Button, Toolbar, Typography} from "@material-ui/core";
import ReactHtmlParser from 'react-html-parser';

const Main = () => {
  const [image, setImage] = useState('')

  let fileReader;

  const handleFiles = files => {
    const file = files.item(0);
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
    }

  const handleFileRead = (e) => {
    const content = fileReader.result;
    console.log(content)
    setImage(content)
  }

  return (
    <>
      <ReactFileReader handleFiles={handleFiles} fileTypes={[".xlsx",".html", ".txt"]} >
        <Button
          variant='contained'
          color='secondary'
        >
          Upload results
        </Button>
      </ReactFileReader>

      <>{ ReactHtmlParser(image) }</>

    </>
  )
}

const LoadResults = () => {
  return (
    <DashboardLayout>
      <Toolbar>
        <Typography variant="h6">MOSCA results page</Typography>
      </Toolbar>
      <Main />
    </DashboardLayout>

  )
}

export default LoadResults;