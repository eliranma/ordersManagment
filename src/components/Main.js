// import db from '../OrderTemplate.json';
import React, {useEffect, useState} from 'react';
import BonList from './BonList';
import { makeStyles} from '@material-ui/core/styles';
import {firestore} from '../firebase/firebase.util';


const useStyles =makeStyles({
    root:{
        backgroundColor:'white',
        display:'flex',
        justifyContent:'center'
    }
})


const Main = () => {
    const [liveOrders, setLiveOrders] = useState([]);
    useEffect(()=>{
        const db = async ()=>{
            setLiveOrders(await firestore.collection('liveOrders').get())

        };
        console.log(liveOrders)
    }, [liveOrders])
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <BonList bons={liveOrders} />
        </div>
    )
}

export default Main