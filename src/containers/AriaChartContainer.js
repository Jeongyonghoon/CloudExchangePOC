import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import AriaChart from '../components/AriaChart';
import {Row, Col} from '../components';
import axios from 'axios';

/**
 * props 
 * - url : api url 
 */

class AriaChartContainer extends Component{

    constructor(props) {
        super(props)
        this.state = ({data: null})
    }

    async initialize(url) {
        try {
            const response = await axios.get(url)
            this.setState({data: response.data})
            console.log(this.state.data);
        } catch (e) {
            console.log(e)
        }
    }

    componentDidMount() {
        this.initialize(this.props.url)
    }

    render(){

        if(!this.state.data) return null
        
        return(
            <>
                {/* <Grid container spacing={3}>
                    <AriaChart data={this.state.data}></AriaChart>
                    <AriaChart data={this.state.data}></AriaChart>
                </Grid> */}
                <Row>
                    <Col colNum={11}>
                        <AriaChart data={this.state.data} height={80}></AriaChart>
                    </Col>
                </Row>
            </>
        )
    }

}

export default AriaChartContainer;