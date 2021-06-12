import React, { Component, useState, useEffect } from 'react';
import { DashboardLayout } from '../components/Layout';
import { Button, Toolbar, Typography } from "@material-ui/core";
import * as Papa from "papaparse"
import styled from 'styled-components';
import DataTable from 'react-data-table-component'
import Accordion from "../components/Accordion";
import { file } from 'jszip';

const Main = ({ outputsFolder }) => {
  const [tables, setTables] = useState([])
  let auxTables = []

  const updateTables = (file) => {
    auxTables.push(file)
    
    if(outputsFolder.length === auxTables.length){
      setTables(auxTables)
    }
  }

  const readCsv = (csvUrl, fileName) => {
    Papa.parse(csvUrl, {
      download: true,
      header: true,
      complete: function (results) {
        updateTables({ fileContent: results.data, fileName });
      }
    })
  }

  useEffect(() => {
    outputsFolder.map(file => {
      let csvUrl = URL.createObjectURL(file.blob)
      readCsv(csvUrl, file.name)
    })
  }, []);

  let tableCounter = 0

  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  const getColumnNamesFromData = (fileContent) =>{
      return Object.keys(fileContent[0]).map(key =>{
        return({name: capitalizeFirstLetter(key), selector: key, sortable: true})
      })
  }

  return (
    <main className='main'>
      <Toolbar>
        <Typography variant="h6">Quality check reports from assembly</Typography>
      </Toolbar>

      {tables.map(file => {
        tableCounter++;
        return (
          <Accordion key={`accordion_${tableCounter}`} title={file.fileName}>
            <DataTable
              pagination
              noHeader
              columns={getColumnNamesFromData(file.fileContent)}
              data={file.fileContent}
            />
          </Accordion>)
      })}

    </main>
  )
}

const AssemblyQC = ({ outputsFolder }) => {
  return (
    <DashboardLayout>
      <Main
        outputsFolder={outputsFolder}
      />
    </DashboardLayout>
  )
}

export default AssemblyQC;