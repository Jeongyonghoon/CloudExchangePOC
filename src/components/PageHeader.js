import React, { Component } from 'react'
import Divider from '@material-ui/core/Divider'

/*
- props 
  - title : show title of page
*/
class PageHeader extends Component {

  render () {

    return (
      <div style={{
        // backgroundColor: 'gray',
        // color: '#555555',
        // padding: '25px 0 25px 0'
      }}>

        <div style={{
          // display: 'inline-block',
          fontSize: '1.5rem',
          color : 'rgba(0,0,0,0.87)',
          fontWeight : '600',
          lineHeight : '1.25',
          padding: '10px 0'
          // verticalAlign: 'top',
          // lineHeight: '28px'
        }}>{this.props.title}</div>

        <Divider 
          style={{
            marginBottom : '25px',
            marginTop : '25px'
          }}
          
          ></Divider>
      </div>
    )
  }
}

export default PageHeader
