import React, {useState} from 'react';

import {DashboardLayout} from '../components/Layout';
import {Button, Toolbar, Typography} from "@material-ui/core";
import ReactHtmlParser,{ processNodes, convertNodeToElement, htmlparser2 } from "react-html-parser";
import Accordion from "../components/Accordion";
import { file } from 'jszip';


export const FastQCFiles = ({ outputsFiles }) => {
  const getJsxFromFiles = (files) => {
    let blobNumber = 0;

    return files.map(file => {
      blobNumber++;

      const fileUrl = URL.createObjectURL(file)

      return <div key={`blob_${blobNumber}`}>
      <iframe src={fileUrl} style={{width: "1000px", height: "300px"}}></iframe>
      <br/>
      <hr/>
      <br/>
      </div>
    })
  }

  return (
    <DashboardLayout>
      <h1>Teste</h1>
      
      {getJsxFromFiles(outputsFiles)}
    </DashboardLayout>
  )
}