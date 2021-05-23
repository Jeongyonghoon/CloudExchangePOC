import React, { Component } from 'react'
import PageHeader from '../src/components/PageHeader'

import CardContainer from '../src/containers/CardContainer'

class Dashboard extends Component {
  render () {
    return (
      <>
        <PageHeader icon={this.props.icon} primary={this.props.primary} />

        <CardContainer></CardContainer>
      </>
    )
  }
}

export default Dashboard
