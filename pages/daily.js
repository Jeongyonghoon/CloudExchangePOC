import React, { Component } from 'react'
import {ComponentRow, ComponentBox} from '../src/components'
import {ChartContainer, AriaChartContainer, CloudTableContainer} from '../src/containers'

class DailyProductBillingList extends Component {
  
  render () {
    return (
      <>
        <ComponentRow>
          <ComponentBox width={'35%'} marginRight={'20px'}>
            <ChartContainer
              dataURL={'http://localhost:3100/static/data/daily/dailyBillingRatio.json'}
              chartType={'doughnut'}
              sliderDisplay={false}
            ></ChartContainer>
          </ComponentBox>

          <ComponentBox width={'65%'}>
            <ChartContainer
              dataURL={'http://localhost:3100/static/data/daily/dailyBillingSummary.json'}
              chartType={'bar'}
              sliderDisplay={false}
            ></ChartContainer>
          </ComponentBox>
        </ComponentRow>

        <ComponentRow>
          <ComponentBox width={'100%'} marginTop={'30px'} >
            <AriaChartContainer dataURL={'http://localhost:3100/static/data/daily/dailyCloudBilling.json'}></AriaChartContainer>
          </ComponentBox>
        </ComponentRow>

        <ComponentRow>
          <ComponentBox width={'100%'} marginTop={'30px'} marginBottom={'20px'}>
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

export default DailyProductBillingList
