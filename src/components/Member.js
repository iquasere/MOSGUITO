import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const Member = ({ name, imageLink, pageLink, company, color, role, description }) => {
    const classes = useStyles();

    return (
    <Card className={classes.root}>
      <CardContent>
        <div className={'container'} style={{marginBottom: '20px'}}>
          <div className={'left'} style={{marginRight: '10px'}}>
            <img src={imageLink} />
          </div>
          <div className={'right'}>
            <Typography variant="h5" component="h2">
              {name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {role}
            </Typography>
          </div>
        </div>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color={color}>
          {<a href={pageLink} target="_blank" style={{textDecoration:'none', color:color}}>@ {company}</a>}
        </Button>
      </CardActions>
    </Card>
    )
}

export default Member