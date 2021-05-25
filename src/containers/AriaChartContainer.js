import React, {Component} from 'react';
import {AriaChart} from '../components';
import axios from 'axios';

/**
 * props 
 * - dataURL : api dataURL 
 * - height : AriaChart Height
 */

class AriaChartContainer extends Component{

    constructor(props) {
        super(props)
        this.state = ({data: null})
    }

    async initialize(dataURL) {
        try {
            const response = await axios.get(dataURL)
            this.setState({data: response.data})
            console.log(this.state.data);
        } catch (e) {
            console.log(e)
        }
    }

    componentDidMount() {
        this.initialize(this.props.dataURL)
    }

    render(){

        if(!this.state.data) return null
        
        return(
            <>
                <AriaChart data={this.state.data} height={this.props.height}></AriaChart>
            </>
        )
    }

}

export default AriaChartContainer;