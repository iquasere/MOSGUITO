import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {
  Toolbar,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper, Button, CardActions, TextField,
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


const attributes = ["Files", "Sample", "Data type", "Condition", "Name"]

const ExperimentsTable = ({ experiments, onChange }) => {

  const [nrows, setRows] = useState(0)

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

    onChange(newExperiments)
    setRows(nrows + 1)
  }

  const editExperiments = (value, n, field) => {
    const newExperiments = [...experiments]

    newExperiments[n][field] = value

    onChange(newExperiments)
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
            {
              attributes.map((attr, index) => (
                <TableCell key={index}>{attr}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            Array(nrows).fill().map((_, n) => (
              <TableRow key={n}>
                {
                  attributes.map((attr, index) => (
                    <TableCell key={index}>
                      <TextField
                        key={index}
                        type='text'
                        value={experiments[n][attr]}
                        onChange={(ev) => editExperiments(ev.target.value, n, attr)}
                        placeholder={""}
                      />
                    </TableCell>
                    )
                  )
                }
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
    </Paper>
  );
}

export default withStyles(styles)(ExperimentsTable);