import React from 'react';
import Bon from './Bon';
import { makeStyles} from '@material-ui/core/styles';


const useStyles =makeStyles({
    cardList:{
        width:'90vw',
        minHeight:'100vh',
        margin:'auto',
        display:'grid',
        gridTemplateColumns:'2fr 2fr',
        gridGap:'2px'
    }
})
const BonList = props => {
    const classes = useStyles();
        return(
        <div className={classes.cardList}>
                {props.bons.map(bon => (
                    <Bon key={bon.id} bon={bon} />
            ))}
</div>
)}
export default BonList;
