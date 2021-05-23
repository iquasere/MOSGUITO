import React, {useState} from 'react';

import {DashboardLayout} from '../components/Layout';
import {Button, Toolbar, Typography} from "@material-ui/core";
import ReactHtmlParser,{ processNodes, convertNodeToElement, htmlparser2 } from "react-html-parser";
import Accordion from "../components/Accordion";
import { file } from 'jszip';
import { Autorenew } from '@material-ui/icons';


export const KEGGMapsResults = ({ outputsFiles }) => {
  const getJsxFromFiles = (files) => {
    let blobNumber = 0;

    return files.map(file => {
      blobNumber++;

      const fileUrl = URL.createObjectURL(file)

      return <div key={`blob_${blobNumber}`}>
      <img src={fileUrl} style={{margin: 'auto', justifyContent: 'center'}}></img>
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