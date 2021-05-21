import React, { Component } from 'react'
import PageHeader from '../src/components/PageHeader'

class Dashboard extends Component {
  render () {
    return (
      <>
        <PageHeader icon={this.props.icon} primary={this.props.primary} />
      </>
    )
  }
}

export default Dashboard
