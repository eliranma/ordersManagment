import React, {useEffect, useState} from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { useContainedCardHeaderStyles } from '@mui-treasury/styles/cardHeader/contained';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import logo from '../assets/pizza.png';
import TimeElapsed from '../utils/TimeElapsed'

const useStyles = makeStyles(({ spacing }) => ({
  card: {
    marginTop: 10,
    maxHeight:'50vh',
    borderRadius: 25,
    transition: '0.3s',
    display:'flex',
    alignSelf:'center',
    flexDirection: 'column',
    width: '70vw',
    overflow: 'hidden',
    overflowY: 'auto',
    overflowX: 'none',
    background: ''
  },
  content: {
    paddingTop: 0,
    textAlign: 'center',
    transition: '1.3s',
    overflowY: 'auto',
    '& table': {
      marginBottom: 0,
    }
  },
  img:{
    width:'2vw',
    padding:'0 0 0 0'
  },
  header:{
    backgroundColor:'#C8CBE5',
    height:'8vh',
    textAlign:'center',
    alignSelf:'center',
    width:'68vw',
    alignContent: 'center',
    margin:'0 0 0 0',
    display:'flex-wrap',
    top:'0',
    borderRadius:'25px',
    overflow:'hidden',
  },
  cardSubHeader:{
    display:'flex',
    fontSize:'15px',
    justifyContent:'space-between',
    textAlign:'center',
    color:'black',

  },
  cardTitle:{
    fontSize:'20px',
    width:'',
    display:'flex',
    justifyContent:'space-between',
    color:'black',
  }
}));



const Bon = (props) => {
  const classes = useStyles();
  const bonHeaderStyles = useContainedCardHeaderStyles();
  const bonShadowStyles = useSoftRiseShadowStyles({ inactive: true });
  const bonHeaderShadowStyles = useFadedShadowStyles();
  const [hidden, setHidden] = useState(true);
  const [orderHidden, setOrderHidden] = useState(false);
    const handleClick=()=> (hidden)?setHidden(false):setHidden(true)


  return (
    <Card hidden={orderHidden} className={cx(classes.card, bonShadowStyles.root)}>
      <CardHeader
        onClick={handleClick}
        className={cx(bonHeaderShadowStyles.root, classes.header)}
        classes={bonHeaderStyles}
        title={<div className={classes.cardTitle}>
          <p>{props.bon.idDeal}</p>
          <TimeElapsed />
          </div>}
        subheader={
        <div className={classes.cardSubHeader} >
            <h6>{props.bon.pricelist}</h6>
            <p>{(props.bon.data).length} </p>
        </div>
        }
      />
      <CardContent hidden={hidden} className={classes.content}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{}</TableCell>
              <TableCell align="right">שם הפריט</TableCell>
              <TableCell align="right">כמות</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.bon.data.map(item => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                {item.image?<img className={classes.img} alt='pizz_part_icon' src={logo} />:''}
                </TableCell>
                <TableCell align="right">{item.name}</TableCell>
                <TableCell align="right">{item.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Bon;