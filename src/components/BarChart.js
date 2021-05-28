import React from 'react'
import { Bar, Chart } from 'react-chartjs-2'

// Chart.defaults.plugins.legend.display = true

/*
- Props -
labelData : Array <String>
valueData : Array <long>
'#58ACFA'
*/

const BarChart = props => {

  const labelData = props.labelData
  const valueData = props.valueData
  const chartColor = props.chartColor
  const chartHeight = props.chartHeight

  const chartData = {
    labels: labelData,
    datasets: [
      {
        label:'납부금액', // --> API형태 확인하고 props로 받을지 결정
        data: valueData,
        backgroundColor: chartColor,
        borderColor: chartColor,
        borderWidth: 1,
      },
    ],
  }

  return (
<<<<<<< HEAD
    <Bar data={chartData} />
=======
    <Bar data={chartData} height={chartHeight}/>
>>>>>>> main
  )
}

BarChart.defaultProps={
  chartColor:'#58ACFA',

}
export default BarChart