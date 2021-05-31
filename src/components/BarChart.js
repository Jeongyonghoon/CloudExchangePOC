import React from 'react'
import { Bar } from 'react-chartjs-2'

// Chart.defaults.plugins.legend.display = false

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
        data: valueData,
        backgroundColor: chartColor,
        borderColor: chartColor,
        borderWidth: 1,
      },
    ],
  }

  const options = {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

  return (
    <Bar data={chartData} height={chartHeight} options={options}/>
  )
}

BarChart.defaultProps = {
  chartColor: '#58ACFA',

}
export default BarChart