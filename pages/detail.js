import React from 'react'
import { ComponentBox, ComponentRow, PageHeader } from '../src/components'
import { ChartContainer, CloudTableContainer, YearMonthSelectorContainer } from '../src/containers'

const Detail = () => {

  return (
    <>
      <PageHeader title={'클라우드 상세 요금'}></PageHeader>
      <ComponentRow>
        <YearMonthSelectorContainer></YearMonthSelectorContainer>
      </ComponentRow>
      <ComponentRow>
        <ComponentBox height={'40%'} spacing={2}>
          <ChartContainer
            dataURL={'cloud/billings/detail/top?memberId='}
            chartType={'bar'}
            chartColor={'#FFDEAD'}
            chartHeight={100}
            bindParam={'yearMonth'}
            title={'클라우드 상품 단위별 상위 요금'}
          ></ChartContainer>
        </ComponentBox>
      </ComponentRow>

      {/* <ComponentRow>
        <ComponentBox marginTop={'30px'} spacing={2}>
          <CloudTableContainer
            dataURL={'http://172.18.10.31:8070/billings/detail?memberId=13&yearMonth=202012'}
            width={'100%'}
          ></CloudTableContainer>
        </ComponentBox>
      </ComponentRow> */}

      {/* <ComponentRow>
        <ComponentBox width={'100%'} spacing={2}>
          <AriaChartContainer 
            dataURL={'/cloud/billings/product/main?memberId='}
            title={'주요 상품별 사용 요금 이력 [EC2, RDS, S3, CloudFront]'}
            ></AriaChartContainer>
        </ComponentBox>
      </ComponentRow> */}

      <ComponentRow>
        <ComponentBox width={'100%'} spacing={2}>
          <CloudTableContainer
            headerDataURL={'/cloud/billings/detail/header'}
            listDataURL={'/cloud/billings/detail?memberId='}
            bindParam={'yearMonth'}
            width={'100%'}
            title={'클라우드 상세 요금'}
          ></CloudTableContainer>
        </ComponentBox>
      </ComponentRow>
    </>
  )
}
export default Detail
