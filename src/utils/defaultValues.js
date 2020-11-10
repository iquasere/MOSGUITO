import {
  assemblerOptions,
  errorModelOptions,
  markersetOptions,
  normalizationMethodOptions,
  keggcharterTaxaLevelOptions
} from './options'

export const defaultValues = {
  output: 'output',
  resourcesDirectory: 'resources_directory',
  threads: 1,
  doAssembly: true,
  assembler: assemblerOptions[0],
  errorModel: errorModelOptions[0],
  markerset: markersetOptions[0],
  diamondDatabase: 'resources_directory/uniprot.dmnd',
  diamondMaxTargetSeqs: 1,
  downloadUniprot: true,
  uniprotColumns: [],
  uniprotDatabases: [],
  normalizationMethod: normalizationMethodOptions[0],
  keggcharterMaps: [],
  keggcharterTaxaLevel: keggcharterTaxaLevelOptions[0],
  keggcharterNumberOfTaxa: 10
}
