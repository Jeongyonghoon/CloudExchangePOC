import React, { Component } from 'react'
import { ComponentRow, ComponentBox, CloudTable, PageHeader } from '../src/components'
import {ChartContainer, CloudTableContainer} from '../src/containers'

class Product extends Component {
  render () {

    return (
      <>
        <PageHeader title={'클라우드 상품 요금'}></PageHeader>
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

export default Product
