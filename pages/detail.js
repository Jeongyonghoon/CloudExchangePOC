import React, { Component } from 'react'
import { ComponentBox, ComponentRow } from '../src/components'
import { ChartContainer, CloudTableContainer } from '../src/containers'

class CloudBillingDetailList extends Component {
  render () {

    return (
      <>
        <ComponentRow>
          <ComponentBox height={'50%'}>
            <ChartContainer
              dataURL={'http://localhost:8000/DoughnutChartData'}
              chartType={'bar'}
              chartColor={'#FFDEAD'}
              chartHeight={100}
            ></ChartContainer>
          </ComponentBox>
        </ComponentRow>

        <ComponentRow>
          <ComponentBox marginTop={'30px'} marginBottom={'20px'}>
            <CloudTableContainer
              dataURL={'http://localhost:8000/TableData'}
              width={'100%'}
            ></CloudTableContainer>
          </ComponentBox>
        </ComponentRow>
      </>
    )
  }
}

export default CloudBillingDetailList
