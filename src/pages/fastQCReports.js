import React, { useState } from 'react';

import { DashboardLayout } from '../components/Layout';
import { Button, Toolbar, Typography } from "@material-ui/core";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from "react-html-parser";
import Accordion from "../components/Accordion";


export const FastQCFiles = ({ outputsFiles }) => {
  const getJsxFromFiles = (files) => {
    let blobNumber = 0;

    return files.map(file => {
      blobNumber++;

      const fileUrl = URL.createObjectURL(file.blob)

      return <Accordion key={`accordion_${blobNumber}`} title={file.name}>
        <iframe src={fileUrl} style={{ width: "100%", height: "1000px" }}></iframe>
      </Accordion>
    })
  }

  return (
    <DashboardLayout outputsFiles={outputsFiles}>
      <Toolbar>
        <Typography variant="h6">FastQC Reports</Typography>
      </Toolbar>
      
      {getJsxFromFiles(outputsFiles.qcReports)}
    </DashboardLayout>
  )
}