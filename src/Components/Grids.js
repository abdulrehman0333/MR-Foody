import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FoodCards from './FoodCards'
import AOS from 'aos';
import 'aos/dist/aos.css';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

class SpacingGrid extends Component {

  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }
renderSpacingGrid() {
  const [spacing, setSpacing] = React.useState(10);
  const classes = useStyles();

  function handleChange(event, value) {
    setSpacing(Number(value));
  }

  return (
    <Grid container className={classes.root} spacing={10}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2, 3, 4, 5].map(value => (
            <Grid key={value} item>
                <FoodCards />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
render() {
  return(
    <this.renderSpacingGrid />
  )
}
}

export default SpacingGrid;