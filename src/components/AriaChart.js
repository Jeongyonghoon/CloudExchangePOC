import React from 'react';
import {Bar} from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// const data = {

//     labels: ['1', '2', '3', '4', '5', '6'],

//     datasets: [
//         {   
//           type : 'line',
//           label: 'EC2',
//           data: [12, 19, 3, 5, 2, 3],
//           fill: true,
//           backgroundColor: 'rgba(255, 99, 132,0.5)',
//           borderColor: 'rgba(255, 99, 132, 0.5)',
//         },
//         { 
//           type : 'line',
//           label: 'CloudFront',
//           data: [1, 2, 1, 1, 2, 2],
//           fill: true,
//           backgroundColor: 'rgba(54, 162, 235,0.5)',
//           borderColor: 'rgba(54, 162, 235, 0.5)',
//         },
//       ],
// }

// const options = {
//     scales: {
//       yAxes: [
//         {
//           type: 'linear',
//           display: true,
//           position: 'left',
//           id: 'y-axis-1',
//         },
//         {
//           type: 'linear',
//           display: true,
//           position: 'right',
//           id: 'y-axis-2',
//           gridLines: {
//             drawOnArea: false,
//           },
//         },
//       ],
//     },
//   };

/**
 * 
 * @param {*} props
 * - height(number) : chart height (default 80, number)
 * - data(object) : chart data (default { 'labels' : [], 'datasets' : []}, object )
 * @returns 
 */

const AriaChart = (props) => {
    
  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: true,
    plugins: {
      title: {
        display: true,
        text: props.data.title
      }
    }
  }

  return(
    <>
      <Bar data={props.data} options={options} height={props.height}></Bar>
    </>
  )
}

AriaChart.propTypes = {
  title: PropTypes.string,
  height: PropTypes.number,
  data: PropTypes.object
};

AriaChart.defaultProps = {
  height: 80,
  data: {"title" : "chart title" , "labels" : [], "datasets" : []}
};

export default AriaChart;