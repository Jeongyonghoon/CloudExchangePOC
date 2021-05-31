import React, { Component } from 'react'

import { AriaChartContainer, CardContainer, ChartContainer, CloudTableContainer } from '../src/containers'
import { CloudTable, ComponentBox, ComponentRow } from '../src/components'

class Dashboard extends Component {
  render () {
    return (
      <>
        <CardContainer
          // dataURL={'http://localhost:8000/CardData'}
          dataURL={'http://172.18.10.136:8000/CardData'}
        ></CardContainer>


        <ComponentRow>
          <ComponentBox width={'35%'} marginRight={'20px'}>
            <ChartContainer
              dataURL={'http://172.18.10.136:8000/DoughnutChartData'}
              chartType={'doughnut'}
              sliderDisplay={false}
              chartHeight={'275%'}
            ></ChartContainer>
          </ComponentBox>

          <ComponentBox width={'65%'}>
            <ChartContainer
              dataURL={'http://172.18.10.136:8000/BarChartData'}
              chartType={'bar'}
              sliderDisplay={true}
            ></ChartContainer>
          </ComponentBox>
        </ComponentRow>

        <ComponentRow>
          <ComponentBox width={'100%'} marginTop={'30px'}>
            <AriaChartContainer dataURL={'/static/data/ariaChart.json'}></AriaChartContainer>
          </ComponentBox>
        </ComponentRow>

        <ComponentRow>
          <ComponentBox width={'100%'} marginTop={'30px'} marginBottom={'20px'}>
            <CloudTableContainer
              dataURL={'http://172.18.10.136:8000/TableData'}
              width={'100%'}
            ></CloudTableContainer>
          </ComponentBox>
        </ComponentRow>
      </>
    )
  }
}

export default Dashboard
