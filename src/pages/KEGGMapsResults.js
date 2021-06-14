import React, {useState} from 'react';

import {DashboardLayout} from '../components/Layout';
import {Button, Toolbar, Typography} from "@material-ui/core";
import ReactHtmlParser,{ processNodes, convertNodeToElement, htmlparser2 } from "react-html-parser";
import Accordion from "../components/Accordion";
import { file } from 'jszip';
import { Autorenew } from '@material-ui/icons';
import ImageZoom from 'react-medium-image-zoom'
import LabelledCheckbox from '../components/LabelledCheckbox';
import KeggMaps from './keggmaps';

const Main = ({outputsFiles}) =>{
  const keggNames = outputsFiles.map((name)=>{
    return(name.name)
  })
  let show = false;
  const [selected, setSelected] = useState([]); //state n funciona, necessa´rio para renderizar de novo a página
  const accordionKeggMaps = () =>{
    const isTrue = (array) =>{
      if(array.length > 6){
        alert('Choose less KEGGMaps to displat for a better performance')
      }else{
        show = true
      }
    }
    const handleCheck = value => {
      const newList = selected
      
  
      const index = newList.indexOf(value)
      if (index > -1) {
        alert()
        newList.splice(index, 1)
      } else {
        newList.push(value)
      }
      console.log(newList)
      setSelected(newList)
      console.log(selected)
    }

    return(
    <div>
      <Accordion  title = 'KeggMaps Results'>
        {keggNames.map((index) =>(
          <LabelledCheckbox
            key = {index[0]}
            label = {index[1]}
            checked = {selected.indexOf(index[1]) > -1}
            setChecked={() => handleCheck(index[1])}/>
      ))}
      </Accordion>
      <Button
      variant='contained'
      color='primary'
      component="label"
      onClick = {isTrue(selected)}>
        Click to view the KEGGMaps
      </Button>
    </div>
    )
  }
  const getJsxFromFiles = (files) => {
    let blobNumber = 0;

    return files.map(file => {
      blobNumber++;

      const fileUrl = URL.createObjectURL(file)

      return <div key={`blob_${blobNumber}`}>
      <ImageZoom image = {{src:fileUrl, style:{margin: 'auto', justifyContent: 'center'}, className : 'img'}}/>
      <br/>
      <hr/>
      <br/>
      </div>
    })
  }
  const badjoras = ()=>{
    if(show == false){
      return(accordionKeggMaps)
    }else{
      //Ver quais é que estão selecionados e mostra-los
    }
  }
  const KEGGChange = badjoras()


  return(
  <>
    <div>
    <KEGGChange/>
    </div>
  </>
  )
}
export const KEGGMapsResults = ({ outputsFiles }) => {

  return (
    <DashboardLayout>
      <h1>Teste</h1>
      <Main
        outputsFiles = {outputsFiles}
      />
    </DashboardLayout>
  )
}