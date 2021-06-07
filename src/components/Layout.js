import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {MenuContainer, SelectorContainer} from '../containers'
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
    backgroundColor : '#f7f9fc',
    flexGrow : 1
  },


  appBar: {
    marginLeft: 56,
    width: `calc(100% - ${56}px)`,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    top : 0,
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
  selector: {
    marginLeft: '40%'
  },
  menuButton: {
    // marginRight: 36,
    color: '#eeeeee',
    padding: 8
  },

  openButton: {
    color: '#eeeeee',
    padding: 8
  },

  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    zIndex: 5000
  },

  drawerPaper: {
    backgroundColor: '#233044'
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
    width : 56
  },
  drawerHeaderTitle : {
    color : '#000000',
    padding : '0.6em',
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

const Layout = props => {

  const classes = useStyles()
  const theme = useTheme()

  const [open, setOpen] = useState(true)
  const [elevation, setElevation] = useState(0)

  const handleGnbOpen = () => {
    setElevation(3)
  }

  const handleGnbClose = () => {
    setElevation(0)
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset == 0) {
        handleGnbClose()
      } else {
        handleGnbOpen()
      }
    }
  }, [])

  return (
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
          <img alt="logo" src="/static/header_logo.png" width="50px"></img>
          <Typography variant="h5" noWrap className={classes.drawerHeaderTitle}>
            Cloud Exchange
          </Typography>
          <Typography className={classes.selector}>
            <SelectorContainer dataURL="static/data/selector/userOptions.json"></SelectorContainer>
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
          paper: clsx(classes.drawerPaper, {
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
        <Divider/>
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

export default Layout
