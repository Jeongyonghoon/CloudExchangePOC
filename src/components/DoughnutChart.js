import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const DoughnutChart = props => {

  const labelData = props.labelData
  const valueData = props.valueData
  const chartHeight = props.chartHeight
  const chartColor = props.chartColor

  const chartData = {
    labels: labelData,
    datasets: [
      {
        data: valueData,
        backgroundColor: chartColor,
        borderWidth: 1,
      },
    ],
    borderWidth: 1,
  }

  const options = {
    legend: {
      position: 'bottom',
      align: 'start',
    },
  }

  return (
    <Doughnut data={chartData} height={chartHeight} options={options}/>
  )
}
DoughnutChart.defaultProps = {
  labelData: [],
  valueData: [],
  height: '100%'
}

export default DoughnutChart