import React, { Component, useState, useEffect } from 'react';
import { DashboardLayout } from '../components/Layout';
import { Button, Toolbar, Typography } from "@material-ui/core";
import * as Papa from "papaparse"
import styled from 'styled-components';
import DataTable from 'react-data-table-component'
import Accordion from "../components/Accordion";
import { file } from 'jszip';

const Main = ({ outputsFolder }) => {
    const [table, setTable] = useState([])
    let auxTables = []

    const updateTables = (file) => {
        auxTables.push(file)

        if (outputsFolder.length === auxTables.length) {
            setTable(auxTables)
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


    const capitalizeFirstLetter = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1)
    }

    const getColumnNamesFromData = (fileContent) => {
        return Object.keys(fileContent[0]).map(key => {
            return ({ name: capitalizeFirstLetter(key), selector: key, sortable: true })
        })
    }

    console.log(table)

    const checkVoid = (file) =>{
        console.log(file)
        if(file[0] != undefined){
            return(<DataTable
                title={file[0].fileName}
                pagination
                noHeader
                columns={getColumnNamesFromData(file[0].fileContent)}
                data={file[0].fileContent}
            />)
        }else{
            return(<div/>)
        }
    }


    return (
        <main className='main'>
            <Toolbar>
                <Typography variant="h6">Entry Reports</Typography>
            </Toolbar>
            {checkVoid(table)}
            
        </main>
    )
}

const EntryReports = ({ outputsFolder }) => {
    return (
        <DashboardLayout>
            <Main
                outputsFolder={outputsFolder}
            />
        </DashboardLayout>
    )
}

export default EntryReports;