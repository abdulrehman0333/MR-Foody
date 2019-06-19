
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
        label="Karachi"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
      <Chip
        label="Lahore"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
      <Chip
        label="Islamabad"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
      <Chip
        label="Rawalpindi"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
       <Chip
        label="Faisalabad"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
       <Chip
        label="Multan"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
       <Chip
        label="Hyderabad"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
       <Chip
        label="Sialkot"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
       <Chip
        label="Peshawar"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
       <Chip
        label="Sukkur"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
       <Chip
        label="Murree"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
       <Chip
        label="Sahiwal"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
       <Chip
        label="Quetta"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
       <Chip
        label="Okara"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
       <Chip
        label="Jhelum"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
       <Chip
        label="Sargodha"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
       <Chip
        label="Larkana"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
       <Chip
        label="Sadiqabad"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
    </div>
  );
}