import React, { Component } from 'react'

import CardContainer from '../src/containers/CardContainer'
import ChartContainer from '../src/containers/ChartContainer'
import ComponentBox from '../src/components/ComponentBox'

class Dashboard extends Component {
  render () {
    return (
      <>
        <CardContainer></CardContainer>

        <div style={{display:'flex'}}>
          <ComponentBox
            component={
              <ChartContainer
                dataURL={'http://localhost:8000/DoughnutChartData'}
                chartType={'doughnut'}
                sliderDisplay={false}
              ></ChartContainer>}
            width={'35%'}
            height={'400px'}
          ></ComponentBox>

          <ComponentBox
            component={
              <ChartContainer
                dataURL={'http://localhost:8000/BarChartData'}
                chartType={'bar'}
                sliderDisplay={true}
              ></ChartContainer>}
            width={'65%'}
            height={'400px'}
          ></ComponentBox>
        </div>
      </>
    )
  }
}

export default Dashboard
