import React, { useEffect, useState, useContext } from 'react';
import {AriaChart, BoxHeader, Progress} from '../components';
import axios from 'axios';
import { ThemeContext } from "styled-components";
import {useDispatch, useSelector} from 'react-redux'
import {getParsingData} from '../util/parsing'
import { getYearMonth } from '../reducers/yearMonth'

/**
 * props 
 * - dataURL : api dataURL 
 */

const AriaChartContainer = (props) => {

    // parameter props
    const {isGetYearMonth, title} = props

    // const getParameterUrl = (dataURL, isGetYearMonth)=>{

    //     if(isGetYearMonth){
    //         console.log(dispatch(getYearMonth()))
    //     }
    // }

    
    // redux
    const themeContext = useContext(ThemeContext)
    const dispatch = useDispatch()

    const [data, setData] = useState(null)

    // parameters
    const memberId = useSelector(state => state.user.memberId)
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

    // memberId, yearMonth가 바뀔 때 마다 다시 데이터 불러오기
    // memberId, yearMonth가 값이 없을 경우?
    useEffect(()=>{
        if(isGetYearMonth){
            getData(props.dataURL + memberId + '&yearMonth=' + yearMonth)
        }else{
            getData(props.dataURL + memberId)
        }
    },[memberId, yearMonth])

    console.log(memberId, yearMonth);
    // return 안에 작성 가능

    return(
        <>  
            <BoxHeader title={title}></BoxHeader>
            <div style={{ width: '95%', margin: '0 auto' }}>
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

