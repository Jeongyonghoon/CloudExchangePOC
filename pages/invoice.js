import React, { Component } from 'react'
import {AriaChartContainer} from '../src/containers';
import {Row, Col} from '../src/components';

class Invoice extends Component {
  render () {

    return (
      <>  
        <Row>
          <Col colNum={6}>
            <AriaChartContainer dataURL={'http://localhost:3100/static/data/ariaChart.json'}></AriaChartContainer>
          </Col>
          <Col colNum={6}>
            <AriaChartContainer dataURL={'http://localhost:3100/static/data/ariaChart.json'}></AriaChartContainer>
          </Col>
        </Row>
      </>
    )
  }
}

export default Invoice
