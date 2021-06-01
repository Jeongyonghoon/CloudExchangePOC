import React, { useEffect, useState, useContext } from 'react';
import {AriaChart, BoxHeader, Progress} from '../components';
import axios from 'axios';
import { ThemeContext } from "styled-components";

/**
 * props 
 * - dataURL : api dataURL 
 */

// const themeContext = useContext(ThemeContext)

// class AriaChartContainer extends Component{

//     constructor(props) {
//         super(props)
//         this.state = ({
//             data: null,
//             completed : 0
//         })
//         // this.state = ({data: {}})
//     }

//     async initialize(dataURL) {
//         try {
//             const response = await axios.get(dataURL)
//             this.setState({data: response.data})
//         } catch (e) {
//             console.log(e)
//         }
//     }

//     componentDidMount() {
//         setTimeout(()=>this.initialize(this.props.dataURL), 5000)
//     }   

//     getAriaChartData = (data) => {

//         const ariaChartData = {}

//         ariaChartData['title'] = data['title']
//         ariaChartData['labels'] = data['labels']

//         const datasets = data['datasets'].map(
//             dataset => {

//                 const r = this.getRand(0,255)
//                 const g = this.getRand(0,255)
//                 const b = this.getRand(0,255)

//                 const newDataset = {
//                     ...dataset,
//                     backgroundColor : 'rgba(' + r + ',' + g + ',' + b + ',0.5)',
//                     borderColor : 'rgba(' + r + ',' + g + ',' + b + ',0.5)'
//                 }
//                 return newDataset
//             }
//         )
//         ariaChartData['datasets'] = datasets
//         return ariaChartData
        
//     }

//     getRand = (min, max) => {
//         if (min >= max) return false;
//         return ~~(Math.random() * (max - min + 1)) + min;
//     }

//     render(){
//         if(!this.state.data) {
//             return (
//                 <>
//                     <Progress></Progress>
//                 </>
//             ) 
//         }

//         return(
//             <>  
//                 <BoxHeader title={this.state.data.title}></BoxHeader>
//                 <AriaChart data={this.getAriaChartData(this.state.data)} height={80}></AriaChart>
//             </>
//         )
//     }

// }

// export default AriaChartContainer;

const AriaChartContainer = (props) => {

    const [data, setData] = useState(null)
    const themeContext = useContext(ThemeContext)

    console.log(themeContext);
    const getData = async (dataURL)=>{
        try {
            const response = await axios.get(dataURL)
            setData({data: response.data})
            console.log(data);
        } catch (e) {
            console.log(e)
        }
    }

    // const getRand = (min, max) => {
    //     if (min >= max) return false;
    //     return ~~(Math.random() * (max - min + 1)) + min;
    // }

    const getAriaChartData = (data) => {

        console.log(themeContext.palette.aqua);
        const paletteKeys = Object.keys(themeContext.palette)
        console.log(paletteKeys);

        const ariaChartData = {}
    
        ariaChartData['title'] = data['title']
        ariaChartData['labels'] = data['labels']
        
        const datasets = data['datasets'].map(
            (dataset,index) => {
    
                // const r = getRand(0,255)
                // const g = getRand(0,255)
                // const b = getRand(0,255)
    
                const newDataset = {
                    ...dataset,
                    // backgroundColor : 'rgba(' + r + ',' + g + ',' + b + ',0.5)',
                    // borderColor : 'rgba(' + r + ',' + g + ',' + b + ',0.5)'
                    backgroundColor : themeContext.palette[paletteKeys[index%paletteKeys.length]]+'80',
                    borderColor : themeContext.palette[paletteKeys[index%paletteKeys.length]]+'80'
                }
                return newDataset
            }
        )
        ariaChartData['datasets'] = datasets
        
        return ariaChartData
        
    }

    useEffect(()=>{
        getData(props.dataURL)
    },[])

    if(!data) {

        return (
            <>
                <Progress></Progress>
            </>
        ) 
    }else{

        return(
            <>  
                <BoxHeader title={data.data.title}></BoxHeader>
                <AriaChart data={getAriaChartData(data.data)} height={80}></AriaChart>
            </>
        )
    }

}

export default AriaChartContainer;

