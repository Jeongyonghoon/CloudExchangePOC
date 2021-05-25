import React, { Component } from 'react'

import CardContainer from '../src/containers/CardContainer'
import ChartContainer from '../src/containers/ChartContainer'
import ComponentBox from '../src/components/ComponentBox'
import {Row, Col, ComponentRow} from '../src/components'
import {AriaChartContainer} from '../src/containers'

class Dashboard extends Component {
  render () {
    return (
      <>
        <CardContainer></CardContainer>

        <ComponentRow>
          <ComponentBox width={'65%'}>
              <ChartContainer
                dataURL={'http://172.18.10.136:8000/BarChartData'}
                chartType={'bar'}
                sliderDisplay={true}
              ></ChartContainer>
          </ComponentBox>
          <ComponentBox width={'35%'}>
              <ChartContainer
                dataURL={'http://172.18.10.136:8000/DoughnutChartData'}
                chartType={'doughnut'}
                sliderDisplay={false}
              ></ChartContainer>
          </ComponentBox>
          
        </ComponentRow>

        <ComponentRow>
          <ComponentBox width={'99%'}>
            <AriaChartContainer dataURL={'http://localhost:3100/static/data/ariaChart.json'} height={80}></AriaChartContainer>
          </ComponentBox>
        </ComponentRow>

        

        <div style={{display:'flex'}}>
          {/* <ComponentBox
            component={
              <ChartContainer
                dataURL={'http://172.18.10.136:8000/DoughnutChartData'}
                chartType={'doughnut'}
                sliderDisplay={false}
              ></ChartContainer>}
            width={'35%'}
          ></ComponentBox> */}
{/* 
          <ComponentBox width={'65%'}>
              <ChartContainer
                dataURL={'http://172.18.10.136:8000/BarChartData'}
                chartType={'bar'}
                sliderDisplay={true}
              ></ChartContainer>
          </ComponentBox> */}

          {/* <ComponentBox
            component={
              <ChartContainer
                dataURL={'http://172.18.10.136:8000/BarChartData'}
                chartType={'bar'}
                sliderDisplay={true}
              ></ChartContainer>}
            width={'65%'}
          ></ComponentBox> */}
        </div>
{/* 
        <Row>
          <Col colNum={10}>
            <AriaChartContainer dataURL={'http://localhost:3100/static/data/ariaChart.json'} height={80}></AriaChartContainer>
          </Col>
        </Row> */}
      </>
    )
  }
}

export default Dashboard
