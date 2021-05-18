import React, {useState} from 'react';
import {DashboardLayout} from '../components/Layout';

export const AnnotationResults = ({ outputsFiles }) => {
  const getAnnotationResults = (files) => {
    console.log(files)
      
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
      
      {getAnnotationResults(outputsFiles)}
    </DashboardLayout>
  )
}