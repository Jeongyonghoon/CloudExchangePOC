import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { BarChart, BoxHeader, ChartSlider, DoughnutChart } from '../components'
import { ThemeContext } from 'styled-components'
import { useSelector } from 'react-redux'
import { getParsingData } from '../util/parsing'

const axios = require('axios')

const ChartContainer = props => {

  const memberId = useSelector(state => state.user.memberId)
  const yearMonth = useSelector(state => state.yearMonth[props.bindParam])
  const { isGetYearMonth, title } = props

  const [labelData, setLabelData] = useState([])
  const [valueData, setValueData] = useState([])
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

  /* ----------- componentDidMount ----------- */
  const setChartData = chartData => {
    const parsedData = getParsingData(chartData)
    setLabelData(parsedData.labels)
    setValueData(parsedData.datasets[0].data)
    setChartValueData(valueData)
    setChartLabelData(labelData)
  }

  const getData = async (dataURL) => {
    try {
      const result = await axios.get(dataURL)
      /* props data setting */

      console.log(result)
      setChartData(result.data)
      setViewCount([0, result.data.length])
      setDataCount(result.data.length)
      setChartTitle(result.data.title)
    } catch (e) {
      console.log(e + ' (ChartContainer.js Error!) ')
    }
  }

  useEffect(() => {
    if (isGetYearMonth) {
      getData(props.dataURL + memberId + '&yearMonth=' + yearMonth)
    } else {
      getData(props.dataURL + memberId)
    }
  }, [memberId, yearMonth])

  /* ----------- componentDidMount ----------- */

  /* ------------------------------------------------------------------------------------------------------------------ */

  /* ----------- componentDidUpdate ----------- */
  const handleChange = (e, newValue) => {
    e.preventDefault()
    setViewCount(newValue)
  }

  useEffect(() => {
    setChartLabelData(labelData.slice(viewCount[0], viewCount[1]))
    setChartValueData(valueData.slice(viewCount[0], viewCount[1]))
  }, [viewCount])
  /* ----------- componentDidUpdate ----------- */

  return (
    <>
      <BoxHeader title={title}></BoxHeader>
      <div style={{ width: '95%', margin: 'auto', marginTop: '3%' }}>
        {chartType === 'bar' &&
        <BarChart chartHeight={chartHeight} chartColor={colors[0]} labelData={chartLabelData}
                  valueData={chartValueData}/>}
        {chartType === 'doughnut' &&
        <DoughnutChart chartHeight={chartHeight} labelData={chartLabelData} valueData={chartValueData}
                       chartColor={colors}/>}

        <div style={{ width: '95%', margin: 'auto' }}>
          {sliderDisplay &&
          <ChartSlider labelData={labelData} dataCount={dataCount} viewCount={viewCount} handleChange={handleChange}/>}
        </div>

      </div>
    </>
  )
}

ChartContainer.propTypes = {
  chartType: PropTypes.string,
  sliderDisplay: PropTypes.bool,
  dataURL: PropTypes.string,
  chartColor: PropTypes.string,
}

ChartContainer.defaultProps = {
  chartType: 'bar',
  sliderDisplay: false,
  dataURL: '',
  width: '100%',
  chartHeight: '100%',
  chartColor: '#58ACFA'
}

export default ChartContainer