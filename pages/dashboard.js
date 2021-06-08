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


      {/*<ComponentRow>*/}
      {/*  <ComponentBox width={'35%'} spacing={2}>*/}
      {/*    <ChartContainer*/}
      {/*      dataURL={'/cloud/billings/'}*/}
      {/*      chartType={'doughnut'}*/}
      {/*      sliderDisplay={false}*/}
      {/*      chartHeight={'275%'}*/}
      {/*    ></ChartContainer>*/}
      {/*  </ComponentBox>*/}

      {/*  <ComponentBox width={'65%'} spacing={2}>*/}
      {/*    <ChartContainer*/}
      {/*      dataURL={'/cloud/billings/'}*/}
      {/*      chartType={'bar'}*/}
      {/*      sliderDisplay={true}*/}
      {/*    ></ChartContainer>*/}
      {/*  </ComponentBox>*/}
      {/*</ComponentRow>*/}

      {/*<ComponentRow>*/}
      {/*  <ComponentBox width={'100%'} spacing={2}>*/}
      {/*    <AriaChartContainer dataURL={'/cloud/billings/product/main?memberId=193'}></AriaChartContainer>*/}
      {/*  </ComponentBox>*/}
      {/*</ComponentRow>*/}

      <ComponentRow>
          <ComponentBox width={'100%'} marginTop={'30px'} marginBottom={'20px'}>
            <CloudTableContainer
              headerDataURL={'/cloud/billings/charge/header'}
              // headerDataURL={'/static/data/dashboard/header.json'}
              listDataURL={'/cloud/billings/charge?memberId='}
              // listDataURL={'/static/data/dashboard/charge.json'}
              bindProp={'yearMonth'}
              width={'100%'}
            ></CloudTableContainer>
          </ComponentBox>
        </ComponentRow>
    </>
  )
}

export default Dashboard
