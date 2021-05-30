import React, {Component} from 'react';
import {AriaChart, BoxHeader} from '../components';
import axios from 'axios';

/**
 * props 
 * - dataURL : api dataURL 
 */

class AriaChartContainer extends Component{

    constructor(props) {
        super(props)
        this.state = ({data: null})
        // this.state = ({data: {}})
    }

    async initialize(dataURL) {
        try {
            const response = await axios.get(dataURL)
            this.setState({data: response.data})
        } catch (e) {
            console.log(e)
        }
    }

    componentDidMount() {
        this.initialize(this.props.dataURL)
    }   

    getAriaChartData = (data) => {

        const ariaChartData = {}

        ariaChartData['title'] = data['title']
        ariaChartData['labels'] = data['labels']

        const datasets = data['datasets'].map(
            dataset => {

                const r = this.getRand(0,255)
                const g = this.getRand(0,255)
                const b = this.getRand(0,255)

                const newDataset = {
                    ...dataset,
                    backgroundColor : 'rgba(' + r + ',' + g + ',' + b + ',0.5)',
                    borderColor : 'rgba(' + r + ',' + g + ',' + b + ',0.5)'
                }
                return newDataset
            }
        )
        ariaChartData['datasets'] = datasets
        return ariaChartData
        
    }

    getRand = (min, max) => {
        if (min >= max) return false;
        return ~~(Math.random() * (max - min + 1)) + min;
    }

    render(){

        if(!this.state.data) return null
        
        return(
            <>  
                <BoxHeader title={this.state.data.title}></BoxHeader>
                <AriaChart data={this.getAriaChartData(this.state.data)} height={80}></AriaChart>
                
                {/* <BoxHeader ></BoxHeader>
                <AriaChart height={80}></AriaChart> */}

            </>
        )
    }

}

export default AriaChartContainer;