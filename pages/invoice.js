import React, { Component } from 'react'
import {AriaChartContainer} from '../src/containers';
import {Row, Col} from '../src/components';

class Invoice extends Component {
  render () {

    return (
      <>  
        <AriaChartContainer url={'http://localhost:3100/static/data/ariaChart.json'}></AriaChartContainer>
        <Row>
          <Col colNum={12}>
            <div style={{backgroundColor : 'red'}}> test</div>
          </Col>
        </Row>
      </>
    )
  }
}

export default Invoice
