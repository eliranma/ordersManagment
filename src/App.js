import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Header from './components/Header';
import Main from './components/Main';
const useStyles = makeStyles((theme)=>({
  root:{
    minHeight:'100vh',
    backgroundColor:'white'

  }
}));
const App=()=> {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/' component={Main} />
      </Switch>
    </div>
  );
}

export default App;
