import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Link from 'next/link'
import {makeStyles} from '@material-ui/core/styles'
import * as MaterialIcons from '@material-ui/icons'

/**
 * Menu Component
 * 
 * - props
 *  - pages : pages Array (Object array)
 * 
 */
const useStyles = makeStyles((theme)=>({

  listItemText: {
    fontSize: '0.9em',
    paddingLeft: '16px',
    // color : 'white',
  },

  listItem : {
    // color : 'rgba(255, 255, 255, 0.8)',
    color : '#eeeeee',
    '&:hover' : {
      color : '#4fc3f7',
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      listItemText : {
        color : '#4fc3f7'
      }
    }
  }
})) ;

function Menu(props){

  const classes = useStyles()

  const createMenu = (pages) => {

    return (
      pages.map(
        page => {
          const icon = page.icon
          const Component = MaterialIcons[icon]
          return (
            <Link 
              key={page.id} 
              href={{
                pathname : '/' + page.page
              }}>
              <a>
                <ListItem button className={classes.listItem} >
                  <Component />
                  <ListItemText classes={{ primary: classes.listItemText }} primary={page.primary} />
                </ListItem>
              </a>
            </Link>
          )
        }
      )
    )
  }

  return (
    <>
      <List>
        {createMenu(props.pages)}
      </List>
    </>
  )

}

export default Menu
