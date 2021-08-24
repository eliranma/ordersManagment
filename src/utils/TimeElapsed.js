import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({
    root:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        direction:'rtl',
        width:'5vw',
        paddingRight:'5',
        alignSelf:'center',
        lineHeight:'0.75rem',
        fontSize:'15px'
    }
}))


const TimeElapsed = (min, sec) => {
    const [second, setSecond] = useState('00');
    const [minute, setMinute] = useState('00');
    const [isActive, setIsActive] = useState(true);
    const [counter, setCounter] = useState(0);
    const classes = useStyles();
    useEffect(() => {
        let intervalId;

        if (isActive) {
          intervalId = setInterval(() => {
            const secondCounter = counter % 60;
            const minuteCounter = Math.floor(counter / 60);

            const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
            const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;

            setSecond(computedSecond);
            setMinute(computedMinute);

            setCounter(counter => counter + 1);
          }, 1000)
        }
          return () => clearInterval(intervalId);
  }, [isActive, counter])
    min=minute;
    sec=second;
    return(
        <div className={classes.root}>
            <p>זמן שעבר:</p>
            <p>{minute}:{second}</p>
        </div>
    )
};
export default TimeElapsed