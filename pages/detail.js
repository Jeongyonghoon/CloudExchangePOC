import React, { Component } from 'react'
import { ComponentBox, ComponentRow, PageHeader } from '../src/components'
import { ChartContainer, CloudTableContainer } from '../src/containers'

class Detail extends Component {
  render () {

    return (
      <>
        <PageHeader title={'클라우드 상세 요금'}></PageHeader>
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

export default Detail
