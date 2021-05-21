import React, { Component } from 'react'
import PageHeader from '../src/components/PageHeader'

class DailyProductBillingList extends Component {
  render () {
    console.log(this.props.router.route)

    return (
      <>
        <PageHeader route={this.props.router.route}  />
      </>
    )
  }
}

export default DailyProductBillingList
