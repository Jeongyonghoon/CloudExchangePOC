import React, {useEffect, useState} from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Selector } from '.'
import {MenuContainer, PageHeaderContainer} from '../containers'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const drawerWidth = 250

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    '& a': {
      textDecoration: 'none',
      color: 'inherit'
    },
    padding : '0 20px 0 20px',
    backgroundColor : '#f7f9fc'
    // position : 'absolute',
    // top : 50,
    // left : 0,
    // right : 0
  },
  
  appBar: {
    // transition: theme.transitions.create(['margin', 'width'], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen
    // }),
    // height : '200px',
    top : 0,
    transition: theme.transitions.create(['all'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    // backgroundColor : '#1976d2',
    // backgroundColor : '#232f3e',
    // backgroundColor : '#233044',
    backgroundColor : '#ffffff',
    textAlign : 'center'
  },
  appBarHeader : {
    color : '#eeeeee',
    // marginLeft: drawerWidth,
  },
  // appBarShift: {
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   marginLeft: drawerWidth,
  //   transition: theme.transitions.create(['margin', 'width'], {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen
  //   })
  // },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    top : -100
    // opacity : 0,
    // display: 'none'
    // height : '0px'
    // elevation : 0
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    // backgroundColor : '#232f3e',
    backgroundColor : '#233044',
    // top : 50
  },

  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },

  drawerHeaderTitle : {
    color : '#eeeeee',
    padding : '0.6em',
    fontSize : '1.2rem'
  },

  drawerHeaderIcon : {
    color : 'rgba(255, 255, 255, 0.9)'
  },

  // divider : {
  //   backgroundColor : 'rgba(255, 255, 255, 0.9)'
  // },

  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    // transition: theme.transitions.create('margin', {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen
    // }),
    // marginLeft: -drawerWidth
    padding : '0px 20px 0px 20px',
    padding : '20px'
  },
  contentShift: {
    // transition: theme.transitions.create('margin', {
    //   easing: theme.transitions.easing.easeOut,
    //   duration: theme.transitions.duration.enteringScreen
    // }),
    marginLeft: 0
  }

}))

export default function Layout (props) {
  const classes = useStyles()
  const theme = useTheme()

  const [open, setOpen] = useState(true)
  const [offset, setOffset] = useState(0)

  const [elevation, setElevation] = useState(0)

  const handleGnbOpen = () => {
    setElevation(3)
  }

  const handleGnbClose = () => {
    setElevation(0)
  }

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
      console.log(open);
      if(window.pageYOffset==0){
        handleGnbClose();
      }else{
        handleGnbOpen();
      }
    }
  }, [])

  // console.log(offset);

  // if(window!==undefined){
  //   window.onscroll = () => {
  //     console.log(window.pageYOffset);
  //     if(window.pageYOffset>0){
  //       handleDrawerOpen();
  //     }else{
  //       handleDrawerClose();
  //     }
  //   }
  // }

  return (
    
      <div className={classes.root}>
        <CssBaseline />
        {/* <AppBar
          // color="primary"
          // elevation={0} remove shadow
          position='fixed'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        > */}
        <AppBar
          // color="primary"
          elevation={elevation} 
          position='fixed'
          // className={clsx(classes.appBar, !open && classes.hide)}
          className={clsx(classes.appBar)}
        >
          <Toolbar>
            {/* <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton> */}
            {/* <Typography variant='h1' noWrap className={classes.appBarHeader}>
              <Selector></Selector>
            </Typography> */}
            <Selector></Selector>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={true}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            {/* <IconButton onClick={handleDrawerClose} className={classes.drawerHeaderIcon}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton> */}
            {/* <Avatar alt='logo' src="/static/header_logo.png" variant="square"></Avatar> */}
            <img alt='logo' src="/static/header_logo.png" width="50px"></img>
            <Typography variant='h6' noWrap className={classes.drawerHeaderTitle}>
              Cloud Exchange
            </Typography>
          </div>
          <Divider className={classes.divider}/>
          <MenuContainer url={'/static/data/layout.json'}></MenuContainer>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <PageHeaderContainer></PageHeaderContainer>
          {/* page component */}
          {props.children}

        </main>
      </div>
    
  )
}
