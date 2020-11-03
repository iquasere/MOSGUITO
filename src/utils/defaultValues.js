import { assemblerOptions } from './options'

export const defaultValues = {
  output: '',
  threads: 1,
  doAssembly: true,
  assembler: assemblerOptions[0],
  diamondMaxTargetSeqs: 1,
  downloadUniprot: true
}
