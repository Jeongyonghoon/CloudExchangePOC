import React, { useEffect, useState } from 'react'
import { BarChart, BoxHeader, ChartSlider, DoughnutChart } from '../components'

const axios = require('axios')

/*

- Data 형식 -
{
  "Date"  : String
  "Price" : long
}

- Props -
API URL (dataURL)             : String
SliderDisplay (sliderDisplay) : boolean
Type (chartType)              : 'pie' or 'bar' or 'line'

*/

const ChartContainer = props => {

  const [labelData] = useState([])
  const [valueData] = useState([])
  const [chartTitle, setChartTitle] = useState('default')

  const chartType = props.chartType
  const sliderDisplay = props.sliderDisplay
  const dataURL = props.dataURL
  const width = props.width
  const chartColor = props.chartColor
  const chartHeight = props.chartHeight

  /* Chart data */
  const [chartValueData, setChartValueData] = useState([])
  const [chartLabelData, setChartLabelData] = useState([])

  /* Slider data */
  const [dataCount, setDataCount] = useState(0)

  /* Chart & Slider data */
  const [viewCount, setViewCount] = useState([])

  /* ----------- componentDidMount ----------- */
  const setChartData = chartData => {
    chartData.forEach(function (item) {
      valueData.push(item['price'])
      labelData.push(item['date'])
    })
    setChartValueData(valueData)
    setChartLabelData(labelData)
  }

  const getData = async () => {
    try {
      const result = await axios.get(dataURL)

      /* props data setting */
      setChartData(result.data)
      setViewCount([0, result.data.length])
      setDataCount(result.data.length)
      setChartTitle(result.data.title)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  /* ----------- componentDidMount ----------- */

  /* ------------------------------------------------------------------------------------------------------------------ */

  /* ----------- componentDidUpdate ----------- */
  const handleChange = (e, newValue) => {
    e.preventDefault() // 애는 뭐하는 애인지 찾아봐
    setViewCount(newValue)
  }
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
        {chartType === 'bar' && <BarChart chartHeight={chartHeight} chartColor={chartColor} labelData={chartLabelData}
                                          valueData={chartValueData}/>}
        {chartType === 'doughnut' &&
        <DoughnutChart chartHeight={chartHeight} labelData={chartLabelData} valueData={chartValueData}/>}

        <div style={{ width: '100%', margin: 'auto' }}>
          {sliderDisplay &&
          <ChartSlider labelData={labelData} dataCount={dataCount} viewCount={viewCount} handleChange={handleChange}/>}
        </div>
      
      </div>
    </>
  )
}

export default ChartContainer