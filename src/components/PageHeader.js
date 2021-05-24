import React, { Component } from 'react'

/*
- props 
  - title : show title of page
*/
class PageHeader extends Component {

  render () {

    return (
      <div style={{
        // backgroundColor: 'gray',
        color: '#555555',
        padding: '20px 0 20px 24px'
      }}>

        <div style={{
          display: 'inline-block',
          fontSize: '1.3em',
          verticalAlign: 'top',
          lineHeight: '28px',
        }}>{this.props.title}</div>

      </div>
    )
  }
}

export default PageHeader
