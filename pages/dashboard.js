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

        {/* <div style={{ display: 'flex' }}>
          <ChartContainer
            // dataURL={'http://localhost:8000/DoughnutChartData'}
            dataURL={'http://172.18.10.136:8000/DoughnutChartData'}
            chartType={'doughnut'}
            sliderDisplay={false}
            width={'35%'}
          ></ChartContainer>

          <ChartContainer
            // dataURL={'http://localhost:8000/BarChartData'}
            dataURL={'http://172.18.10.136:8000/BarChartData'}
            chartType={'bar'}
            sliderDisplay={true}
            width={'65%'}
          ></ChartContainer>
        </div> */}

        <ComponentRow>
          <ComponentBox width={'35%'}>
            <ChartContainer
              // dataURL={'http://localhost:8000/DoughnutChartData'}
              dataURL={'http://172.18.10.136:8000/DoughnutChartData'}
              chartType={'doughnut'}
              sliderDisplay={false}
              width={'35%'}
            ></ChartContainer>
          </ComponentBox>
          <ComponentBox width={'65%'}>
            <ChartContainer
              // dataURL={'http://localhost:8000/BarChartData'}
              dataURL={'http://172.18.10.136:8000/BarChartData'}
              chartType={'bar'}
              sliderDisplay={true}
              width={'65%'}
            ></ChartContainer>
          </ComponentBox>
        </ComponentRow>

        <ComponentRow>
          <ComponentBox width={'98.6%'}>
            <AriaChartContainer dataURL={'http://localhost:3100/static/data/ariaChartTest.json'}></AriaChartContainer>
          </ComponentBox>
        </ComponentRow>


        <CloudTableContainer
          // dataURL={'http://localhost:8000/TableData'}
          dataURL={'http://172.18.10.136:8000/TableData'}
          width={'98.6%'}
        ></CloudTableContainer>

      </>
    )
  }
}

export default Dashboard
