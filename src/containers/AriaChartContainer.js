import React, { useEffect, useState, useContext } from 'react';
import {AriaChart, BoxHeader, Progress} from '../components';
import axios from 'axios';
import { ThemeContext } from "styled-components";
import {useDispatch, useSelector} from 'react-redux'
import {getParsingData} from '../util/parsing'

/**
 * props 
 * - dataURL : api dataURL 
 */

const AriaChartContainer = (props) => {

    // redux
    const themeContext = useContext(ThemeContext)
    const dispatch = useDispatch()

    const [data, setData] = useState(null)

    // parameters
    const memberId = useSelector(state => state.user.urlKey)
    const yearMonth = useSelector(state => state.yearMonth.yearMonth)

    const getData = async (dataURL)=>{
        try {
            const response = await axios.get(dataURL)
            console.log(response.data);
            setData(response.data)
            console.log(data);
        } catch (e) {
            setData(e.message)
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

    // const getAriaChartData = (data) => {

    //     const paletteKeys = Object.keys(themeContext.palette)

    //     const ariaChartData = {}
    
    //     ariaChartData['title'] = data['title']
    //     ariaChartData['labels'] = data['labels']
        
    //     const datasets = data['datasets'].map(
    //         (dataset,index) => {
    //             const newDataset = {
    //                 ...dataset,
    //                 backgroundColor : themeContext.palette[paletteKeys[index%paletteKeys.length]]+'80',
    //                 borderColor : themeContext.palette[paletteKeys[index%paletteKeys.length]]+'80'
    //             }
    //             return newDataset
    //         }
    //     )
    //     ariaChartData['datasets'] = datasets
        
    //     return ariaChartData
        
    // }

    // data(array)
    const getAriaChartData = (data) => {

        if(data.length>0){
            
            // array[0] : label (날짜)

            const dataKeys = Object.keys(data[0])
            const yearMonthKey = dataKeys.indexOf('yearMonth')
            const row = dataKeys.length
            const col = data.length
            const array = Array.from(Array(row), ()=> new Array(col))

            for(let i=0; i<col; i++){
                for(let j=0;j<row;j++){
                    if(j===0){
                        array[j][i] = data[i][dataKeys[j]].replace(/(\w{4})(\w{2})/g, '$1년 $2월')
                        continue
                    }
                    array[j][i] = data[i][dataKeys[j]]
                }
            }

            const paletteKeys = Object.keys(themeContext.palette)

            const ariaChartData = {}
            const datasets = []
            // chart title
            ariaChartData['title'] = 'aria chart title' // props로 받기?

            // x axis 
            ariaChartData['labels'] = array[yearMonthKey]

            let colorIndex = 0
            for(let i=0; i<row; i++){
                if(i==yearMonthKey) continue
                datasets.push({
                    label : dataKeys[i],
                    data : array[i],
                    backgroundColor : themeContext.palette[paletteKeys[colorIndex%paletteKeys.length]]+'80',
                    borderColor : themeContext.palette[paletteKeys[colorIndex%paletteKeys.length]]+'80'
                });
                colorIndex++
            }
            
            ariaChartData['datasets'] = datasets
            return ariaChartData

        }else{

        }

    }

    // if(data){
    //     getAriaChartData(data)
    // }

    useEffect(()=>{
        getData(props.dataURL)
        // test('cloud/users')
    },[])

    console.log(memberId, yearMonth);
    // return 안에 작성 가능

    return(
        <>  
            <BoxHeader title={'title'}></BoxHeader>
            <div style={{ width: '100%', margin: '0 auto' }}>
                {
                    data ? (
                        typeof data === "string" ?
                        <div style={{
                            "textAlign" : "center"
                        }}>{data}</div>
                        : <AriaChart data={getParsingData(data)} height={80}></AriaChart>
                    )
                    : <Progress></Progress>
                }

            </div>
        </>
    )
    

}

export default AriaChartContainer;

