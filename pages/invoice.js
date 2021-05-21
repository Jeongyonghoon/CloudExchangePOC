import React, { Component } from 'react'
import PageHeader from '../src/components/PageHeader'

class Invoice extends Component {
  render () {
    console.log(this.props)

    return (
      <>
        <PageHeader icon={this.props.icon} primary={this.props.primary} />
      </>
    )
  }
}

export default Invoice
