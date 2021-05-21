import React, { Component } from 'react'
// import * as MaterialIcons from '@material-ui/icons';

// const importIcon = '@material-ui/icons/' + this.props.icon;
// const IconComponent = React.lazy(()=>import(importIcon));

class PageHeader extends Component {
  render () {
    // const icon = this.props.icon;
    // const IconComponent = MaterialIcons[icon];
    // const importIcon = this.props.icon;
    // const IconComponent = lazy(()=>import(/* webpackMode: "eager" */ `@material-ui/icons/${importIcon}`));

    return (
      <div style={{
        backgroundColor: 'gray',
        color: 'white',
        padding: '10px 0 10px 24px'
      }}>

        {/* <Suspense fallback="X"> */}
        {/* <IconComponent></IconComponent> */}
        {/* </Suspense> */}
        <div style={{
          display: 'inline-block',
          fontSize: '14px',
          verticalAlign: 'top',
          lineHeight: '28px',
          marginLeft: '12px'
        }}>{this.props.primary}</div>

      </div>
    )
  }
}

export default PageHeader
