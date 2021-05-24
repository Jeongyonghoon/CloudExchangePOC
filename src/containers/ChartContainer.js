import React, { useEffect, useState } from 'react'
import BarChart from '../components/BarChart'
import ChartSlider from '../components/ChartSlider'
import DoughnutChart from '../components/DoughnutChart'

const axios = require('axios')

/*

- Data 형식 -
{
  "Date"  : String
  "Price" : long
}

- Props -
API URL       : String
SliderDisplay : boolean
Type          : 'pie' or 'bar' or 'line'

*/

let labelData = [];
let valueData = [];

const ChartContainer = props => {
  const chartType = props.chartType;
  const sliderDisplay = props.sliderDisplay;
  const dataURL = props.dataURL;

  /* Chart data */
  const [chartValueData, setChartValueData] = useState([]);
  const [chartLabelData, setChartLabelData] = useState([]);

  /* Slider data */
  const [dataCount, setDataCount] = useState(0);

  /* Chart & Slider data */
  const [viewCount, setViewCount] = useState([]);

  /* ----------- componentDidMount ----------- */
  const setChartData = chartData => {
    labelData = []; // --> 다른 API 호출 대비 초기화
    valueData = [];

    chartData.forEach(function (item) {
      valueData.push(item['price'])
      labelData.push(item['date'])
    })
    setChartValueData(valueData)
    setChartLabelData(labelData)
  }

  const getData = async () => {
    const result = await axios.get(
      dataURL
    )
    /* props data setting */
    setChartData(result.data)
    setViewCount([0, result.data.length])
    setDataCount(result.data.length)
  }

  useEffect(() => {
    getData()
  }, []);
  /* ----------- componentDidMount ----------- */

  /* ------------------------------------------------------------------------------------------------------------------ */

  /* ----------- componentDidUpdate ----------- */
  const handleChange = (e, newValue) => {
    e.preventDefault() // 애는 뭐하는 애인지 찾아봐
    setViewCount(newValue)
  }

  useEffect(()=>{
    setChartLabelData(labelData.slice(viewCount[0],viewCount[1]));
    setChartValueData(valueData.slice(viewCount[0],viewCount[1]));
  },[viewCount]);
  /* ----------- componentDidUpdate ----------- */

  return (
    <div style={{ width: '100%', height: '100%', margin: 'auto' }}>
      {chartType==='bar' && <BarChart labelData={chartLabelData} valueData={chartValueData}/>}
      {chartType==='doughnut' && <DoughnutChart labelData={chartLabelData} valueData={chartValueData}/>}
      <div style={{ width: '50%', margin: 'auto' }}>
        <ChartSlider dataCount={dataCount} viewCount={viewCount} handleChange={handleChange}/>
      </div>
    </div>
  )
}
export default ChartContainer;