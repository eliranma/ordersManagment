import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import logo from '../assets/aviv.png';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InfoIcon from '@material-ui/icons/Info';
import List from '@material-ui/core/List';
const drawerWidth = 200;


const useStyles = makeStyles((theme)=>({
    root:{
        height:'15vh',
        width:'100vw',
        display:'flex',
        justifyContent: 'center'
    },
    menuButton: {
        marginRight: theme.spacing(2),
      },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        height:'10vh',
        flexDirection:'row',
        backgroundColor:'#B4F8C8',

      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    appbarTitle:{
        flexGrow:'1',
        textAlign:'center',
        direction:'rtl',
        fontSize:'1.2rem',
        alignSelf:'center',
        opacity:'1'

    },
    listItem:{
        textDecoration:'none',
        color:'black'
    },
    // chevronIcon:{
    //   width:
    // }


}));

const Header = () =>{
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const theme=useTheme();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <AppBar className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
            <IconButton className={classes.drawerHeader} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <div className={classes.chevronIcon}><ChevronLeftIcon  /></div> :<div className={classes.chevronIcon}> <ChevronRightIcon /></div>}
          </IconButton>
          <List>
          <Link to='/bons'>
            <ListItem button key={"הזמנות חדשות"}>
              <ListItemIcon>
                  <SendIcon />
              </ListItemIcon>
              <ListItemText className={classes.listItem} primary={"הזמנות חדשות"} />
            </ListItem>
        </Link>
        <Link to='/history'>
            <ListItem button key={"היסטוריה"}>
              <ListItemIcon>
                  <InfoIcon />
              </ListItemIcon>
              <ListItemText className={classes.listItem} primary={'היסטוריה'} />
            </ListItem>
        </Link>
        </List>
      </Drawer>

                <h1 className={classes.appbarTitle}>מסך הזמנות</h1>
                <img src={logo} className={classes.logo} alt='logo' />
            </AppBar>
        </div>
    );
}
export default Header;
