import React, { useEffect, useState, useContext } from 'react';
import {AriaChart, BoxHeader, Progress} from '../components';
import axios from 'axios';
import { ThemeContext } from "styled-components";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

/**
 * props 
 * - dataURL : api dataURL 
 */

const AriaChartContainer = (props) => {

    const [data, setData] = useState(null)
    const themeContext = useContext(ThemeContext)

    const getData = async (dataURL)=>{
        try {
            const response = await axios.get(dataURL)
            setData({data: response.data})
        } catch (e) {
            console.log(e)
        }
    }

    const test = async (dataURL)=>{
        try {
            const response = await axios.get(dataURL)
            console.log(response.data)

        } catch (e) {
            console.log(e)
        }
    }

    const getAriaChartData = (data) => {

        const paletteKeys = Object.keys(themeContext.palette)

        const ariaChartData = {}
    
        ariaChartData['title'] = data['title']
        ariaChartData['labels'] = data['labels']
        
        const datasets = data['datasets'].map(
            (dataset,index) => {
                const newDataset = {
                    ...dataset,
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
        test('cloud/users')
    },[])

    // return 안에 작성 가능
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
                <div style={{ width: '100%', margin: '0 auto' }}>
                    <AriaChart data={getAriaChartData(data.data)} height={80}></AriaChart>
                </div>
            </>
        )
    }

}

export default AriaChartContainer;

