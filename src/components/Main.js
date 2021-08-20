import db from '../OrderTemplate.json';
import React from 'react';
import BonList from './BonList';
import { makeStyles} from '@material-ui/core/styles';

const useStyles =makeStyles({
    root:{
        backgroundColor:'white',
        display:'flex',
        justifyContent:'center'
    }
})


const Main = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <BonList bons={db} />
        </div>
    )
}

export default Main