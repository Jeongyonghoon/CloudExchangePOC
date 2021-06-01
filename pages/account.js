import React, { Component } from 'react'
import {ComponentRow, ComponentBox, PageHeader} from '../src/components'
import { AriaChartContainer, CloudTableContainer} from '../src/containers'

class AccountBillingList extends Component {
  render () {
    return (
      <>
        <PageHeader title={'클라우드 계정별 요금'}></PageHeader>
        <ComponentRow>
          <ComponentBox width={'100%'}>
            <AriaChartContainer dataURL={'http://localhost:3100/static/data/account/accountBilling.json'}></AriaChartContainer>
          </ComponentBox>
        </ComponentRow>

        <ComponentRow>
          <ComponentBox width={'100%'} marginTop={'30px'} marginBottom={'20px'}>
            <CloudTableContainer
              dataURL={'http://localhost:3100/static/data/account/accountBillingDetail.json'}
              width={'100%'}
            ></CloudTableContainer>
          </ComponentBox>
        </ComponentRow>
      </>
    )
  }
}

export default AccountBillingList
