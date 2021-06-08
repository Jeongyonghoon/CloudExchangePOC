import React from 'react'
import { Bar } from 'react-chartjs-2'

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
  labelData: [],
  valueData: [],
  chartColor: '#58ACFA',
}
export default BarChart