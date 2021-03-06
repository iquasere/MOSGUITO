import React, {useState} from 'react';

import {DashboardLayout} from '../components/Layout';
import {Button} from "@material-ui/core";
import Accordion from "../components/Accordion";
import ImageZoom from 'react-medium-image-zoom'
import LabelledCheckbox from '../components/LabelledCheckbox';
import { accordeon } from './categories'

const Main = ({outputsFiles}) =>{
  const keggNames = outputsFiles.map((name)=>{
    return(name.name)
  })
  const badjoras = accordeon(keggNames)
  const [show, setShow] = useState(false);
  const [final, setFinal] = useState([]);

  const AccordionKeggMaps = () =>{
    const isTrue = (array) =>{
      if(array.length === 0 | array.length>6){
        if(array.length > 6){
          alert('Choose less KEGGMaps to display for a better performance')
        }else{alert('Please select KEGGMaps to display')
      }
      }else{
        setFinal(selected)
        setShow(true)
      }
    }
    const [selected, setSelected] = useState([]);
    const handleCheck = value => {
      console.log(value)
      const newList = [...selected]
      
  
      const index = newList.indexOf(value)
      console.log(index)
      if (index > -1) {
        newList.splice(index, 1)
      } else {
        newList.push(value)
      }
      setSelected(newList)
    }
    const handleToogle = ()=>{
      isTrue(selected)
    }

    return(
    <div>
    <Button
      variant='contained'
      color='primary'
      component="label"
      onClick = {handleToogle}>
        Click to view the KEGGMaps
    </Button>
    {badjoras.children.map((category, index) =>(
      <Accordion key={index} title={category.name}>
        {
          category.children.map((subCategory, index) =>(
          <Accordion key={index} title={subCategory.name}>{
            subCategory.children.map((subSubCategory, index) =>(
              <Accordion key={index} title={subSubCategory.name}>
                {subSubCategory.children.map(({name}, index)=>(
                  <LabelledCheckbox
                  key={name[0]}
                  label={name[1]}
                  checked = {selected.indexOf(name[1]) > -1}
                  setChecked = {()=> handleCheck(name[1])}/>)
                  )
                  }
              </Accordion>
            ))
          } </Accordion>
          ))
        }
      </Accordion>
    ))}
    </div>
    )
  }

  const ShowKeggmaps = ()=>{
    const getJsxFromFiles = (files) => {
      let blobNumber = 0;

      return files.map(file => {
        blobNumber++;

        const fileUrl = URL.createObjectURL(file.blob)

        return <div key={`blob_${blobNumber}`}>
        <h1 style= {{textAlign: 'center', fontWeight:'bold', marginBottom:'1cm'}}>{file.name}</h1>
        <ImageZoom image = {{src:fileUrl, style:{margin: 'auto', justifyContent: 'center'}, className : 'img'}}/>
        <br/>
        <hr/>
        <br/>
        </div>
      })
    }
    let keggToShow = [];
    for(let i = 0; i < outputsFiles.length ; i++){
      if(final.includes(outputsFiles[i].name[1])){
        keggToShow.push({name:outputsFiles[i].name[1], blob:outputsFiles[i].blob})
      }
    }

    const handleBack = ()=>{
       setShow(false)
    }
    return(
      <div>
        <Button
        variant='contained'
        color='primary'
        component="label"
        onClick = {handleBack}>
          Click to view the KEGGMaps
        </Button>
        {getJsxFromFiles(keggToShow)}
      </div>
    )
}
  const showMe = ()=>{
    if(show === false){
      return(AccordionKeggMaps)
    }else{
      return(ShowKeggmaps)
    }
  }
  const KEGGChange = showMe()


  return(
  <>
    <div>
    <KEGGChange/>
    </div>
  </>
  )
}
export const KeggMapsResults = ({ outputsFiles }) => {

  return (
    <DashboardLayout>
      <Main
        outputsFiles = {outputsFiles}
      />
    </DashboardLayout>
  )
}