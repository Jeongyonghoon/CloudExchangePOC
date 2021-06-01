import React, { Component } from 'react'
import {ComponentRow, ComponentBox, PageHeader} from '../src/components'
import {ChartContainer, AriaChartContainer, CloudTableContainer} from '../src/containers'

class Daily extends Component {
  
  render () {
    return (
      <>
        <PageHeader title={'일별 클라우드 상품 요금'}></PageHeader>
        <ComponentRow spacing={2}>
          <ComponentBox width={'35%'} spacing={2}>
            <ChartContainer
              dataURL={'http://localhost:3100/static/data/daily/dailyBillingRatio.json'}
              chartType={'doughnut'}
              sliderDisplay={false}
              chartHeight={'275%'}
            ></ChartContainer>
          </ComponentBox>

          <ComponentBox width={'65%'} spacing={2}>
            <ChartContainer
              dataURL={'http://localhost:3100/static/data/daily/dailyBillingSummary.json'}
              chartType={'bar'}
              sliderDisplay={false}
            ></ChartContainer>
          </ComponentBox>
        </ComponentRow>

        <ComponentRow spacing={2}>
          <ComponentBox width={'100%'}  spacing={2}>
            <AriaChartContainer dataURL={'http://localhost:3100/static/data/daily/dailyCloudBilling.json'}></AriaChartContainer>
          </ComponentBox>
        </ComponentRow>

        <ComponentRow spacing={2}>
          <ComponentBox width={'100%'} spacing={2}>
            <CloudTableContainer
              dataURL={'http://localhost:3100/static/data/daily/dailyCloudBillingDetail.json'}
              width={'100%'}
            ></CloudTableContainer>
          </ComponentBox>
        </ComponentRow>
      </>
    )
  }
}

export default Daily
