import React, { Component, useState, useEffect } from 'react';
import { DashboardLayout } from '../components/Layout';
import { Button, Toolbar, Typography } from "@material-ui/core";
import * as Papa from "papaparse"
import styled from 'styled-components';
import DataTable from 'react-data-table-component'
import Accordion from "../components/Accordion";
import { file } from 'jszip';

const Main = ({ outputsFolder }) => {

    const replaceArray = (array) =>{
        return array.map((dic)=>{
            const newReplace = {}
            for(const [key, value] of Object.entries(dic)){
                let newKey = key.replaceAll('.', '/').replaceAll('[','(').replaceAll(']',')').replaceAll(':','_').replaceAll('{','(').replaceAll('}',')')
                newReplace[newKey] = value
            }
            return newReplace
        })
    }
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
                results.data.pop()
                let parse = replaceArray(results.data)
                updateTables({ fileContent: parse, fileName });
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
            console.log(key)
            return ({ name: capitalizeFirstLetter(key), selector: key, sortable: true })
        })
    }

    const checkVoid = (file) =>{
        console.log(file)
        if(file[0] != undefined){
            return(<DataTable
                style={{ width: "100%", height: "100%" }}
                title={file[0].fileName}
                pagination
                paginationRowsPerPageOptions = {[10,20,30,40,50]}
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
                <Typography variant="h6">Protein Reports</Typography>
            </Toolbar>
            {checkVoid(table)}
            
        </main>
    )
}

const ProteinReports = ({ outputsFolder }) => {
    return (
        <DashboardLayout>
            <Main
                outputsFolder={outputsFolder}
            />
        </DashboardLayout>
    )
}

export default ProteinReports;