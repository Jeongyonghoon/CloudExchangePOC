import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const chartColor=[
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 206, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(255, 159, 64, 0.2)',]

const DoughnutChart = props => {

  const labelData = props.labelData
  const valueData = props.valueData

  const chartData = {
    labels: labelData,
    datasets: [
      {
        data:valueData,
        backgroundColor:chartColor,
        borderWidth: 1,
        },
    ],
    borderWidth:1,
  }

  return(
    <div style={{ width: '50%', height: '100%', margin: 'auto' }}>
      <Doughnut data={chartData}/>
    </div>
  );
}

export default DoughnutChart;