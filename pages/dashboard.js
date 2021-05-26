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
          <ComponentBox width={'35%'}>
            <ChartContainer
              dataURL={'http://localhost:8000/DoughnutChartData'}
              chartType={'doughnut'}
              sliderDisplay={false}
            ></ChartContainer>
          </ComponentBox>


          <ComponentBox width={'65%'}>
            <ChartContainer
              dataURL={'http://localhost:8000/BarChartData'}
              chartType={'bar'}
              sliderDisplay={true}
            ></ChartContainer>
          </ComponentBox>

        </div>

        <ComponentBox width={'98.6%'}>
          <AriaChartContainer url={'http://localhost:3100/static/data/ariaChart.json'}></AriaChartContainer>
        </ComponentBox>

        <ComponentBox width={'98.6%'}>
          <CloudTableContainer
            dataURL={'http://localhost:8000/TableData'}
            width={'98.6%'}
          ></CloudTableContainer>
        </ComponentBox>
      </>
    )
  }
}

export default Dashboard
