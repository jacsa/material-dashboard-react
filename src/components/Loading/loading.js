import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
  center:{
    width:"100%",
    textAlign:"center",
    zIndex:999
  }
}));



const Loading = () => {
  const classes = useStyles();
  return ( 
    <div className={classes.center}> <CircularProgress className={classes.progress} color="secondary" />  </div>
  );
}

export default Loading;