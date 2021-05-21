import React, { Component } from 'react'
import PageHeader from '../src/components/PageHeader'

class DailyProductBillingList extends Component {
  render () {
    console.log(this.props)

    return (
      <>
        <PageHeader icon={this.props.icon} primary={this.props.primary} />
      </>
    )
  }
}

export default DailyProductBillingList
