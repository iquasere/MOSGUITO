import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const Member = ({ name, imageLink, pageLink, company, role }) => {
    const classes = useStyles();

    return (
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={name} src={imageLink} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {role}
              </Typography>
              {<a href={pageLink} target="_blank" rel="noreferrer"><span style={{ color: 'orange' }}>at {company}</span></a>}
            </>
          }
        />
      </ListItem>
    )
}

export default Member