import React from 'react'
import { ComponentBox, ComponentRow, PageHeader } from '../src/components'
import { ChartContainer, CloudTableContainer, YearMonthSelectorContainer, AriaChartContainer } from '../src/containers'
import { parsingDetailBarChart } from '../src/util/parsing.js'
import { useSelector } from 'react-redux'

const Detail = () => {

  return(
    <>
      <PageHeader title={'클라우드 상세 요금'}></PageHeader>
      <ComponentRow>
        <YearMonthSelectorContainer></YearMonthSelectorContainer>
      </ComponentRow>
      <ComponentRow>
        <ComponentBox height={'50%'} spacing={2}>
          <ChartContainer
            dataURL={'cloud/billings/detail/top?memberId='}
            chartType={'bar'}
            chartColor={'#FFDEAD'}
            chartHeight={100}
            isGetYearMonth={true}
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

      <ComponentRow>
        <ComponentBox width={'100%'} spacing={2}>
          <AriaChartContainer 
            dataURL={'/cloud/billings/product/main?memberId='}
            title={'주요 상품별 사용 요금 이력 [EC2, RDS, S3, CloudFront]'}
            ></AriaChartContainer>
        </ComponentBox>
      </ComponentRow>

      <ComponentRow>
        <ComponentBox width={'100%'} spacing={2}>
          <CloudTableContainer
            headerDataURL={'/cloud/billings/detail/header'}
            // headerDataURL={'/static/data/dashboard/header.json'}
            listDataURL={'/cloud//billings/detail?memberId='}
            // listDataURL={'/static/data/dashboard/charge.json'}
            bindProp={'yearMonth'}
            // width={'100%'}
          ></CloudTableContainer>
        </ComponentBox>
      </ComponentRow>

    </>
  )
}

export default Detail
