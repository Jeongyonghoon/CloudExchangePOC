import React, { Component } from 'react'
import {AriaChartContainer} from '../src/containers';
import {ComponentRow, ComponentBox} from '../src/components';

class Invoice extends Component {
  render () {

    return (
      <ComponentRow>
        <ComponentBox width={'50%'}> 
          <AriaChartContainer dataURL={'http://localhost:3100/static/data/ariaChartTest.json'}></AriaChartContainer>
        </ComponentBox>
        <ComponentBox width={'50%'}> 
          <AriaChartContainer dataURL={'http://localhost:3100/static/data/ariaChartTest.json'}></AriaChartContainer>
        </ComponentBox>
        
      </ComponentRow>
    )
  }
}

export default Invoice
