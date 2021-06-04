import React from 'react'
import { ComponentBox, ComponentRow, PageHeader } from '../src/components'
import { ChartContainer, CloudTableContainer, YearMonthSelectorContainer, AriaChartContainer } from '../src/containers'
import { parsingDetailBarChart } from '../src/util/parsing.js'

const Detail = () => {

  return(
    <>
      <PageHeader title={'클라우드 상세 요금'}></PageHeader>
      <ComponentRow spacing={2}>
        <YearMonthSelectorContainer></YearMonthSelectorContainer>
      </ComponentRow>
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

      <ComponentRow>
        <ComponentBox width={'100%'} spacing={2}>
          <AriaChartContainer dataURL={'/static/data/detail/ariaChart.json'}></AriaChartContainer>
        </ComponentBox>
      </ComponentRow>
    </>
  )
}

export default Detail
