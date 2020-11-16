import {
  assemblerOptions,
  errorModelOptions,
  markersetOptions,
  normalizationMethodOptions,
  keggcharterTaxaLevelOptions
} from './options'

export const emptyValues = {
    "output":"",
    "resourcesDirectory":"",
    "threads":1,
    "experiments": "",
    "doAssembly":true,
    "assembler":assemblerOptions[0],
    "errorModel":errorModelOptions[0],
    "markerset":markersetOptions[0],
    "diamondDatabase":"",
    "diamondMaxTargetSeqs":1,
    "downloadUniprot":true,
    "uniprotColumns":[],
    "uniprotDatabases":[],
    "normalizationMethod":normalizationMethodOptions[0],
    "keggcharterMaps":[],
    "keggcharterTaxaLevel":keggcharterTaxaLevelOptions[0],
    "keggcharterNumberOfTaxa":1
}
