/* http://172.18.10.31:8070/billings/product?member_id=193 */

import React, { useContext, useEffect, useState } from 'react'
import { BarChart, BoxHeader, ChartSlider, DoughnutChart } from '../components'
import { ThemeContext } from 'styled-components'
import { useSelector } from 'react-redux'
import {getParsingData} from '../util/parsing'

const axios = require('axios')

const ChartContainer = props => {
  const urlKey = useSelector(state => state.user.urlKey)

  const [labelData,setLabelData] = useState([])
  const [valueData,setValueData] = useState([])
  const [chartTitle, setChartTitle] = useState('default')

  const chartType = props.chartType
  const sliderDisplay = props.sliderDisplay
  const dataURL = props.dataURL
  const width = props.width
  const chartColor = props.chartColor
  const chartHeight = props.chartHeight

  // global color
  const themeContext = useContext(ThemeContext)
  const paletteKeys = Object.keys(themeContext.palette)
  const colors = paletteKeys.map(
    key => (themeContext.palette[key])
  )

  /* Chart data */
  const [chartValueData, setChartValueData] = useState([])
  const [chartLabelData, setChartLabelData] = useState([])

  /* Slider data */
  const [dataCount, setDataCount] = useState(0)

  /* Chart & Slider data */
  const [viewCount, setViewCount] = useState([])

  /* ----------- default ----------- */
  const defaultChart = () => {
    return [
      {
        price: 100,
        date: 'default'
      },
      {
        price: 200,
        date: 'default'
      }]
  }
  /* ----------- default ----------- */

  /* ----------- componentDidMount ----------- */
  // const setChartData = chartData => {
  //   chartData.forEach(function (item) {
  //     valueData.push(item['price'])
  //     labelData.push(item['date'])
  //   })
  //   setChartValueData(valueData)
  //   setChartLabelData(labelData)
  // }

  const setChartData = chartData => {
    const parsedData = getParsingData(chartData)
    setLabelData(parsedData.labels)
    setValueData(parsedData.datasets[0].data)
    setChartValueData(valueData)
    setChartLabelData(labelData)
  }

  const getData = async (apiKey) => {
    try {
      if (apiKey === undefined) apiKey = 0

      // url을 page에서 받는게 좋을 것 같음
      // const result = await axios.get(dataURL + `/${apiKey}`)

      const result = await axios.get(dataURL)
      /* props data setting */
      setChartData(result.data)
      setViewCount([0, result.data.length])
      setDataCount(result.data.length)
      setChartTitle(result.data.title)
    } catch (e) {

      setChartData(defaultChart())
      setViewCount([0, 2])
      setDataCount(2)

      console.log(e)
    }
  }

  useEffect(() => {
    getData(0)
  }, [])

  /* ----------- componentDidMount ----------- */

  /* ------------------------------------------------------------------------------------------------------------------ */

  /* ----------- componentDidUpdate ----------- */
  const handleChange = (e, newValue) => {
    e.preventDefault() // 애는 뭐하는 애인지 찾아봐
    setViewCount(newValue)
  }

  useEffect(() => {
    getData(urlKey)
  }, [urlKey])
  //preventDefault, stopPropagation

  useEffect(() => {
    setChartLabelData(labelData.slice(viewCount[0], viewCount[1]))
    setChartValueData(valueData.slice(viewCount[0], viewCount[1]))
  }, [viewCount])
  /* ----------- componentDidUpdate ----------- */

  return (
    <>
      <BoxHeader></BoxHeader>
      <div style={{ width: '80%', margin: 'auto', marginTop: '3%' }}>
        {chartType === 'bar' && <BarChart chartHeight={chartHeight} chartColor={colors[0]} labelData={chartLabelData}
                                          valueData={chartValueData}/>}
        {chartType === 'doughnut' &&
        <DoughnutChart chartHeight={chartHeight} labelData={chartLabelData} valueData={chartValueData}
                       chartColor={colors}/>}

        <div style={{ width: '100%', margin: 'auto' }}>
          {sliderDisplay &&
          <ChartSlider labelData={labelData} dataCount={dataCount} viewCount={viewCount} handleChange={handleChange}/>}
        </div>

      </div>
    </>
  )
}

export default ChartContainer