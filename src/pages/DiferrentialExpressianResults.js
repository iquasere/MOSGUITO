import React, {useState} from 'react';

import {DashboardLayout} from '../components/Layout';
import {Button, Toolbar, Typography} from "@material-ui/core";
import ReactHtmlParser,{ processNodes, convertNodeToElement, htmlparser2 } from "react-html-parser";
import Accordion from "../components/Accordion";
import { file } from 'jszip';
import { Autorenew } from '@material-ui/icons';
import ImageZoom from 'react-medium-image-zoom'


export const DifferentialResults = ({ outputsFiles }) => {
  const getJsxFromFiles = (files) => {
    let blobNumber = 0;

    return files.map(file => {
      blobNumber++;

      const fileUrl = URL.createObjectURL(file.blob)

      return <div key={`blob_${blobNumber}`}>
      <h1 style= {{textAlign: 'center', fontWeight:'bold', marginBottom:'1cm'}}>{file.name}</h1>
      <ImageZoom image={{src:fileUrl, style:{margin: 'auto', marginBottom: '2cm', justifyContent: 'center'}, className : 'img'}} />
      </div>
    })
  }

  return (
    <DashboardLayout>
      <Toolbar>
        <Typography variant="h6">Differential Analysis Results</Typography>
      </Toolbar>
      
      {getJsxFromFiles(outputsFiles)}
    </DashboardLayout>
  )
}