import React, { PureComponent } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Link from 'next/link'
import * as MaterialIcons from '@material-ui/icons'

class Menu extends PureComponent {
    createSideMenu = (pages) => {
      return (
        pages.map(
          page => {
            const icon = page.icon
            const Component = MaterialIcons[icon]
            return (
              <Link key={page.id} href={'/' + page.page}>
                <a>
                  <ListItem button>
                    <Component />
                    <ListItemText classes={this.props.classes} primary={page.primary} />
                  </ListItem>
                </a>
              </Link>
            )
          }
        )
      )
    }

    render () {
      return (
        <>
          <List>
            {this.createSideMenu(this.props.pages)}
          </List>
        </>
      )
    }
}

export default Menu
