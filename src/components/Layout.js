import React, {useEffect, useState} from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {MenuContainer, PageHeaderContainer, SelectorContainer} from '../containers'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { defaults } from 'react-chartjs-2'

defaults.global.defaultFontFamily = '맑은고딕, Malgun Gothic, dotum, gulim, sans-serif'
defaults.global.defaultFontSize = 12

const drawerWidth = 250

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& a': {
      textDecoration: 'none',
      color: 'inherit'
    },
    // padding : '0 20px 0 20px',
    backgroundColor : '#f7f9fc',
    flexGrow : 1
  },
  
  // appBar: {
  //   // transition: theme.transitions.create(['margin', 'width'], {
  //   //   easing: theme.transitions.easing.sharp,
  //   //   duration: theme.transitions.duration.leavingScreen
  //   // }),
  //   // height : '200px',
  //   top : 0,
  //   transition: theme.transitions.create(['all'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen
  //   }),
  //   // backgroundColor : '#1976d2',
  //   // backgroundColor : '#232f3e',
  //   // backgroundColor : '#233044',
  //   backgroundColor : '#ffffff',
  //   marginLeft: drawerWidth
  // },

  // appBarShift: {
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   marginLeft: drawerWidth,
  //   transition: theme.transitions.create(['margin', 'width'], {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen
  //   })
  // },

  // hide: {
  //   display: 'none',
  // },
  // drawer: {
  //   width: drawerWidth,
  //   flexShrink: 0,
  //   whiteSpace: 'nowrap',
  // },
  // drawerOpen: {
  //   width: drawerWidth,
  //   transition: theme.transitions.create('width', {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  // drawerClose: {
  //   transition: theme.transitions.create('width', {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  //   overflowX: 'hidden',
  //   width: theme.spacing(7) + 1,
  //   [theme.breakpoints.up('sm')]: {
  //     width: theme.spacing(9) + 1,
  //   },
  // },
  // toolbar: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'flex-end',
  //   padding: theme.spacing(0, 1),
  //   // necessary for content to be below app bar
  //   ...theme.mixins.toolbar,
  // },
  // content: {
  //   flexGrow: 1,
  //   padding: theme.spacing(3),
  // },

  // menuButton: {
  //   marginRight: theme.spacing(2)
  // },
  // hide: {
  //   top : -100
  //   // opacity : 0,
  //   // display: 'none'
  //   // height : '0px'
  //   // elevation : 0
  // },
  // drawer: {
  //   width: drawerWidth,
  //   flexShrink: 0,
  // },
  // drawerPaper: {
  //   width: drawerWidth,
  //   // backgroundColor : '#232f3e',
  //   backgroundColor : '#233044',
  //   // top : 50
  // },

  // drawerHeader: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   padding: theme.spacing(0, 2),
  //   // necessary for content to be below app bar
  //   ...theme.mixins.toolbar,
  //   justifyContent: 'flex-start',
  //   minHeight : 50
  // },

  // drawerHeaderTitle : {
  //   color : '#eeeeee',
  //   padding : '0.6em',
  //   fontSize : '1.2rem'
  // },

  // drawerHeaderIcon : {
  //   color : 'rgba(255, 255, 255, 0.9)'
  // },

  // // divider : {
  // //   backgroundColor : 'rgba(255, 255, 255, 0.9)'
  // // },

  // content: {
  //   flexGrow: 1,
  //   // padding: theme.spacing(3),
  //   // transition: theme.transitions.create('margin', {
  //   //   easing: theme.transitions.easing.sharp,
  //   //   duration: theme.transitions.duration.leavingScreen
  //   // }),
  //   // marginLeft: -drawerWidth
  //   padding : '0px 20px 0px 20px',
  //   padding : '20px'
  // },
  // contentShift: {
  //   // transition: theme.transitions.create('margin', {
  //   //   easing: theme.transitions.easing.easeOut,
  //   //   duration: theme.transitions.duration.enteringScreen
  //   // }),
  //   marginLeft: 0
  // },

  // selector : {
  //   marginLeft : '80%'
  // }

  appBar: {
    marginLeft: 56,
    width: `calc(100% - ${56}px)`,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    top : 0,
    // backgroundColor : '#1976d2',
    // backgroundColor : '#232f3e',
    // backgroundColor : '#233044',
    backgroundColor : '#ffffff'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  selector : {
    marginLeft : '40%'
  },
  menuButton: {
    // marginRight: 36,
    color : '#eeeeee',
    padding : 8
  },

  openButton: {
    color : '#eeeeee',
    padding : 8
  },

  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    zIndex : 5000
  },

  drawerPaper: {
    backgroundColor : '#233044'
  },

  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    // width: theme.spacing(7) + 1,
    // [theme.breakpoints.up('sm')]: {
    //   width: theme.spacing(9) + 1,
    // },
    width : 56
  },
  drawerHeaderTitle : {
    color : '#000000',
    padding : '0.6em',
    // fontSize : '1.2rem'
    fontWeight : 'bold',
    flexGrow : 1
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.onscroll = () => {
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
    
      // <div className={classes.root}>
      //   <CssBaseline />
      //   {/* <AppBar
      //     // color="primary"
      //     // elevation={0} remove shadow
      //     position='fixed'
      //     className={clsx(classes.appBar, {
      //       [classes.appBarShift]: open
      //     })}
      //   > */}
      //   <AppBar
      //     // color="primary"
      //     elevation={elevation} 
      //     position='fixed'
      //     // className={clsx(classes.appBar, !open && classes.hide)}
      //     // className={clsx(classes.appBar)}
      //     className={classes.appBar}
      //   >
      //     <Toolbar>
      //       {/* <IconButton
      //         color='inherit'
      //         aria-label='open drawer'
      //         onClick={handleDrawerOpen}
      //         edge='start'
      //         className={clsx(classes.menuButton, open && classes.hide)}
      //       >
      //         <MenuIcon />
      //       </IconButton> */}
      //       <Typography noWrap className={classes.selector}>
      //         {/* <Selector></Selector> */}
      //         <SelectorContainer dataURL='static/data/selector/userOptions.json'></SelectorContainer>
      //       </Typography>
      //       {/* <Selector className={classes.selector}></Selector> */}
      //     </Toolbar>
      //   </AppBar>
      //   <Drawer
      //     className={classes.drawer}
      //     variant='persistent'
      //     anchor='left'
      //     open={true}
      //     classes={{
      //       paper: classes.drawerPaper
      //     }}
      //   >
      //     <div className={classes.drawerHeader}>
      //       {/* <IconButton onClick={handleDrawerClose} className={classes.drawerHeaderIcon}>
      //         {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      //       </IconButton> */}
      //       {/* <Avatar alt='logo' src="/static/header_logo.png" variant="square"></Avatar> */}
      //       <img alt='logo' src="/static/header_logo.png" width="50px"></img>
      //       <Typography variant='h6' noWrap className={classes.drawerHeaderTitle}>
      //         Cloud Exchange
      //       </Typography>
      //     </div>
      //     <Divider className={classes.divider}/>
      //     <MenuContainer url={'/static/data/layout.json'}></MenuContainer>
      //   </Drawer>
      //   <main
      //     className={clsx(classes.content, {
      //       [classes.contentShift]: open
      //     })}
      //   >
      //     <div className={classes.drawerHeader} />
      //     <PageHeaderContainer></PageHeaderContainer>
      //     {/* page component */}
      //     {props.children}

      //   </main>
      // </div>
      <div className={classes.root}>
      <CssBaseline />
      <AppBar
        elevation={elevation}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
            <img alt='logo' src="/static/header_logo.png" width="50px"></img>
            <Typography variant='h5' noWrap className={classes.drawerHeaderTitle}>
              Cloud Exchange
            </Typography>
            <Typography className={classes.selector}>
              <SelectorContainer dataURL='static/data/selector/userOptions.json'></SelectorContainer>
            </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx(classes.drawerPaper,{
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          {
            open ? <IconButton onClick={handleDrawerClose} className={classes.openButton}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton> : 
          <IconButton
          // color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
          }

        </div>
        <Divider />
        <MenuContainer url={'/static/data/layout.json'}></MenuContainer>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <PageHeaderContainer></PageHeaderContainer> */}
           {/* page component */}
           {props.children}
      </main>
    </div>
  )
}
