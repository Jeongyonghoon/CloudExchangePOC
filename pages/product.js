import React, { Component } from 'react'
import { ComponentRow, ComponentBox, CloudTable } from '../src/components'
import {ChartContainer, CloudTableContainer} from '../src/containers'

class CloudBillingList extends Component {
  render () {

    return (
      <>
        <ComponentRow>
          <ComponentBox height={'50%'}>
            <ChartContainer
              dataURL={'http://localhost:8000/DoughnutChartData'}
              chartType={'bar'}
              chartColor={'#F08080'}
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

export default CloudBillingList
