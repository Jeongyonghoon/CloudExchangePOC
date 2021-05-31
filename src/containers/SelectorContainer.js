import React, {Component} from 'react';
import {Selector} from '../components';
import axios from 'axios';

/**
 * props 
 * - dataURL : api dataURL 
 */

class SelectorContainer extends Component{

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

    render(){

        if(!this.state.data) return null
        
        return(
            <>  
                <Selector label={this.state.data.label} options={this.state.data.options}></Selector>
            </>
        )
    }

}

export default SelectorContainer;