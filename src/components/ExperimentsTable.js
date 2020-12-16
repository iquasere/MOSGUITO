import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LabelledSelect from "./LabelledSelect";

import {
  Toolbar,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const ExperimentsTable = ({ experiments, setExperiments, nExperimentsRows, setExperimentsRows }) => {

  const increaseRows = () => {
    const newExperiments = [...experiments]

    newExperiments.push(
      {
        "Files":"",
        "Sample":"",
        "Data type":"",
        "Condition":"",
        "Name":""
      }
    )

    setExperiments(newExperiments)
    setExperimentsRows(nExperimentsRows + 1)
  }

  const decreaseRows = () => {
    const newExperiments = [...experiments]

    newExperiments.pop()

    setExperiments(newExperiments)
    setExperimentsRows(nExperimentsRows - 1)
  }

  const editExperiments = (value, n, field) => {
    const newExperiments = [...experiments]

    newExperiments[n][field] = value

    setExperiments(newExperiments)
  }

  return (
    <Paper>
      <Toolbar>
        <div>
          <Typography variant="h6">Experiments</Typography>
        </div>
      </Toolbar>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Files</TableCell>
            <TableCell width="20%">Sample</TableCell>
            <TableCell width="15%">Data type</TableCell>
            <TableCell width="10%">Condition</TableCell>
            <TableCell width="20%">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            Array(nExperimentsRows).fill().map((_, n) => (
              <TableRow key={n}>
                <TableCell>
                  <TextField
                    type='text'
                    value={experiments[n]["Files"]}
                    onChange={(ev) => editExperiments(ev.target.value, n, "Files")}
                    placeholder={""}
                    multiline
                    fullWidth
                  />
                </TableCell>

                <TableCell>
                  <TextField
                    type='text'
                    value={experiments[n]["Sample"]}
                    onChange={(ev) => editExperiments(ev.target.value, n, "Sample")}
                    placeholder={""}
                  />
                </TableCell>

                <TableCell>
                  <LabelledSelect
                    type='text'
                    value={experiments[n]["Data type"]}
                    onChange={(ev) => editExperiments(ev.target.value, n, "Data type")}
                    options={["dna", "mrna", "protein"]}
                  />
                </TableCell>

                <TableCell>
                  <TextField
                    type='text'
                    value={experiments[n]["Condition"]}
                    onChange={(ev) => editExperiments(ev.target.value, n, "Condition")}
                    placeholder={""}
                  />
                </TableCell>

                <TableCell>
                  <TextField
                    type='text'
                    value={experiments[n]["Name"]}
                    onChange={(ev) => editExperiments(ev.target.value, n, "Name")}
                    placeholder={""}
                  />
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      <Button
        onClick={(ev) => increaseRows()}
        variant='contained'
        color='secondary'
      >
        Add row
      </Button>
      <Button
        onClick={(ev) => decreaseRows()}
        variant='contained'
        color='secondary'
      >
        Remove last row
      </Button>
    </Paper>
  );
}

export default withStyles(styles)(ExperimentsTable);