import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Member from "./Member";

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

export default function MembersList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Member
        name={"Andreia F. Salvador"}
        imageLink={"https://www.ceb.uminho.pt/Media/GetMedia/c7b7a6ab-a690-4dc7-8703-a055dc9a4ac2"}
        pageLink={'https://www.ceb.uminho.pt/People/Details/c6b2fd64-389d-4700-ae5e-7ba9b7f26321'}
        company={"CEB"}
        role={""}
      />
      <Divider variant="inset" component="li" />
      <Member
        name={"João C. Sequeira"}
        imageLink={"https://www.ceb.uminho.pt/Media/GetMedia/4ce02006-2ae9-4173-9b48-12b1617d733f"}
        pageLink={'https://www.ceb.uminho.pt/People/Details/9fca8b19-e2c7-4d5f-acb8-c7e15c98ca47'}
        company={"CEB"}
        role={""}
      />
      <Divider variant="inset" component="li" />
      <Member
        name={"M. Madalena Alves"}
        imageLink={"https://www.ceb.uminho.pt/Media/GetMedia/67e1e08f-794f-4a6b-ae2e-c5928f429bee"}
        pageLink={'https://www.ceb.uminho.pt/People/Details/44265aed-6255-48b0-965d-8dbecf383f6e'}
        company={"CEB"}
        role={""}
      />
    </List>
  );
}