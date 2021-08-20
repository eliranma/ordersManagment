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
    borderRadius: spacing(0.5),
    transition: '0.3s',
    display:'flex',
    alignSelf:'center',
    flexDirection: 'column',
    width: '70vw',
    overflowY: 'auto',
    overflowX: 'none',
    background: '#ffffff',
  },
  content: {
    paddingTop: 0,
    textAlign: 'center',
    overflowY: 'auto',
    '& table': {
      marginBottom: 0,
    }
  },
  img:{
    width:'5vw',
    padding:'0 0 0 0'
  },
  header:{
    backgroundColor:'#C8CBE5',
    height:'8vh',
    textAlign:'center',
    alignSelf:'center',
    alignContent: 'center',
    margin:'0 0 0 0',
    display:'flex-wrap',
    justifyContent:'center',
    top:'0',
    borderRadius:'25px',
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
    display:'flex',
    justifyContent:'space-between',
    color:'black',
  }
}));

// let id = 0;
// const createData=(name, count)=>{
//   id += 1;
//   return { id, name, count };
// }

// const rows = [
//   // comment
//   createData('Frozen yoghurt', 159, 4.0),
//   createData('Ice cream sandwich', 237, 4.3),
//   createData('Eclair', 16.0, 6.0),
//   createData('Cupcake', 3.7, 4.3),
//   createData('Gingerbread', 16.0, 3.9),
// ];

const Bon = (props) => {
  const classes = useStyles();
  const bonHeaderStyles = useContainedCardHeaderStyles();
  const bonShadowStyles = useSoftRiseShadowStyles({ inactive: true });
  const bonHeaderShadowStyles = useFadedShadowStyles();
  const [hidden, setHidden] = useState(true);
    const handleClick=()=> (hidden)?setHidden(false):setHidden(true)

  
  return (
    <Card className={cx(classes.card, bonShadowStyles.root)}>
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