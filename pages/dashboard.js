import React from 'react'

import { AriaChartContainer, CardContainer, ChartContainer, CloudTableContainer } from '../src/containers'
import { ComponentBox, ComponentRow, PageHeader } from '../src/components'

const Dashboard = () => {
  return(
    <>
      <PageHeader title={'대시보드'}></PageHeader>
      <CardContainer
        dataURL={'/cloud/billings/charge/recent?memberId='}
      ></CardContainer>


      <ComponentRow>
        <ComponentBox width={'35%'} spacing={2}>
          <ChartContainer
            dataURL={'/cloud/billings/product?memberId='}
            chartType={'doughnut'}
            sliderDisplay={false}
            chartHeight={'275%'}
          ></ChartContainer>
        </ComponentBox>

        <ComponentBox width={'65%'} spacing={2}>
          <ChartContainer
            dataURL={'/cloud/billings/charge/cost?memberId='}
            chartType={'bar'}
            sliderDisplay={true}
          ></ChartContainer>
        </ComponentBox>
      </ComponentRow>

      <ComponentRow>
        <ComponentBox width={'100%'} spacing={2}>
          <AriaChartContainer dataURL={'/cloud/billings/product/main?memberId='}></AriaChartContainer>
        </ComponentBox>
      </ComponentRow>

      <ComponentRow>
          <ComponentBox width={'100%'} spacing={2}>
            <CloudTableContainer
              headerDataURL={'/cloud/billings/charge/header'}
              listDataURL={'/cloud/billings/charge?memberId='}
              width={'100%'}
            ></CloudTableContainer>
          </ComponentBox>
        </ComponentRow>
    </>
  )
}

export default Dashboard
