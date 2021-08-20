import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({
    root:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        width:'5vw',
        lineHeight:'0.75rem',
        fontSize:'10px'
    }
}))


const TimeElapsed = () => {
    const [counter, setCounter] = useState(0);
    const classes = useStyles();
    useEffect(()=>{
        let myInterval = setInterval(()=>{
            setCounter(counter+1)    
        })

    },1000)
    return(
        <div className={classes.root}>
            <p>זמן שעבר:</p>
            <p>{counter}</p>
        </div>
    )
};
export default TimeElapsed