import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

export default function Chips() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Chip
        label="KFC"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
      <Chip
        label="McDonalds"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
      <Chip
        label="Bolan Sajji"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
      <Chip
        label="Kaybees"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
       <Chip
        label="Hardees"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
       <Chip
        label="Dominos"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
        <Chip
        label="Subway"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
        <Chip
        label="Karachi Foods"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
    </div>
  );
}