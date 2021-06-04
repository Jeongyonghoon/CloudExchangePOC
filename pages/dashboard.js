import React from 'react'

import { AriaChartContainer, CardContainer, ChartContainer, CloudTableContainer } from '../src/containers'
import { ComponentBox, ComponentRow, PageHeader } from '../src/components'

const Dashboard = () => {
  return(
    <>
      <PageHeader title={'대시보드'}></PageHeader>
      <CardContainer
        // dataURL={'http://localhost:8000/CardData'}
        dataURL={'http://172.18.10.136:8000/CardData'}
      ></CardContainer>


      <ComponentRow>
        <ComponentBox width={'35%'} spacing={2}>
          <ChartContainer
            dataURL={'http://172.18.10.136:8000/DoughnutChartData'}
            chartType={'doughnut'}
            sliderDisplay={false}
            chartHeight={'275%'}
          ></ChartContainer>
        </ComponentBox>

        <ComponentBox width={'65%'} spacing={2}>
          <ChartContainer
            dataURL={'http://172.18.10.136:8000/BarChartData'}
            chartType={'bar'}
            sliderDisplay={true}
          ></ChartContainer>
        </ComponentBox>
      </ComponentRow>

      <ComponentRow>
        <ComponentBox width={'100%'} spacing={2}>
          <AriaChartContainer dataURL={'/cloud/billings/product/main?memberId=193'}></AriaChartContainer>
        </ComponentBox>
      </ComponentRow>

      <ComponentRow>
        <ComponentBox width={'100%'} spacing={2}>
          <CloudTableContainer
            dataURL={'http://172.18.10.136:8000/TableData'}
            width={'100%'}
          ></CloudTableContainer>
        </ComponentBox>
      </ComponentRow>
    </>
  )
}

export default Dashboard
