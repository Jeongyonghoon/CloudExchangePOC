import React from 'react'
import { Bar, Chart } from 'react-chartjs-2'

Chart.defaults.plugins.legend.display = true

/*

- Props -
labelData : Array <String>
valueData : Array <long>

*/

const BarChart = props => {

  const labelData = props.labelData
  const valueData = props.valueData

  const chartData = {
    labels: labelData,
    datasets: [
      {
        label:'납부금액', // --> API형태 확인하고 props로 받을지 결정
        data: valueData,
        backgroundColor: '#58ACFA',
        borderColor: '#58ACFA',
        borderWidth: 1,
      },
    ],
  }

  return (
    <div style={{ width: '50%', height: '100%', margin: 'auto' }}>
      <Bar data={chartData}/>
    </div>
  )
}

export default BarChart