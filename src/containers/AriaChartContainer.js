import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import AriaChart from '../components/AriaChart';
import axios from 'axios';

class AriaChartContainer extends Component{

    constructor(props) {
        super(props)
        this.state = ({data: null})
    }

    async initialize() {
        try {
            const response = await axios.get(
                'http://localhost:3100/static/data/ariaChart.json'
            )
            this.setState({data: response.data})
            console.log(this.state.data);
        } catch (e) {
            console.log(e)
        }
    }

    componentDidMount() {
        this.initialize()
    }

    render(){

        if(!this.state.data) return null
        
        return(
            <Grid container spacing={3}>
                <AriaChart data={this.state.data}></AriaChart>
            </Grid>
        )
    }

}

export default AriaChartContainer;