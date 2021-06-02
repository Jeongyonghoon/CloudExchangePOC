import React from 'react'
import { ComponentBox, ComponentRow, PageHeader } from '../src/components'
import { ChartContainer, CloudTableContainer } from '../src/containers'

const Detail = () => {

  return(
    <>
      <PageHeader title={'클라우드 상세 요금'}></PageHeader>
      <ComponentRow>
        <ComponentBox height={'50%'} spacing={2}>
          <ChartContainer
            dataURL={'http://localhost:8000/DoughnutChartData'}
            chartType={'bar'}
            chartColor={'#FFDEAD'}
            chartHeight={100}
          ></ChartContainer>
        </ComponentBox>
      </ComponentRow>

      <ComponentRow>
        <ComponentBox marginTop={'30px'} spacing={2}>
          <CloudTableContainer
            dataURL={'http://localhost:8000/TableData'}
            width={'100%'}
          ></CloudTableContainer>
        </ComponentBox>
      </ComponentRow>
    </>
  )
}

export default Detail
