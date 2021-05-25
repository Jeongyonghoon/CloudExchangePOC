import React, { Component } from 'react'

import { AriaChartContainer, CardContainer, ChartContainer, CloudTableContainer } from '../src/containers'
import { CloudTable, ComponentBox } from '../src/components'

class Dashboard extends Component {
  render () {
    return (
      <>
        <CardContainer
          dataURL={'http://localhost:8000/CardData'}
        ></CardContainer>

        <div style={{ display: 'flex' }}>
          <ChartContainer
            dataURL={'http://localhost:8000/DoughnutChartData'}
            chartType={'doughnut'}
            sliderDisplay={false}
            width={'35%'}
          ></ChartContainer>

          <ChartContainer
            dataURL={'http://localhost:8000/BarChartData'}
            chartType={'bar'}
            sliderDisplay={true}
            width={'65%'}
          ></ChartContainer>
        </div>

        <ComponentBox width={'98.6%'}>
          <AriaChartContainer url={'http://localhost:3100/static/data/ariaChart.json'}></AriaChartContainer>
        </ComponentBox>

        <CloudTableContainer
          dataURL={'http://localhost:8000/TableData'}
          width={'98.6%'}
        ></CloudTableContainer>

      </>
    )
  }
}

export default Dashboard
