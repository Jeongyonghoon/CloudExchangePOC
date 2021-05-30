import React from 'react';
import {Bar, Line} from 'react-chartjs-2';
import PropTypes from 'prop-types';

/**
 * https://reactchartjs.github.io/react-chartjs-2
 * - AriaChart Components
 * @param {*} props
 * - height(number) : chart height (default 150, number)
 * - data(object) : chart data (default { 'labels' : [], 'datasets' : []}, object )
 * 
 * @returns 
 */

const AriaChart = (props) => {
  
  // # version 3 options

  // const options = {
  //   responsive: true,
  //   interaction: {
  //     mode: 'index',
  //     intersect: false
  //   },
  //   fill : true,
  //   stacked: true,
  //   plugins: {
  //     title: {
  //       display: true,
  //       text: props.data.title
  //     }
  //   }
  // }

  const options = {

    type : 'line',

    title : {
      display : true,
      text : props.data.title
    },
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: false,
    },

    elements: {
      line: {
          tension: 0 // disables bezier curves
      }
    },
    
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }

  return(
    <>
      <Line data={props.data} options={options} height={props.height}></Line>
    </>
  )
}

AriaChart.propTypes = {
  title: PropTypes.string,
  height: PropTypes.number,
  data: PropTypes.object
};

AriaChart.defaultProps = {
  height: 150,
  data: {"title" : "chart title" , "labels" : [], "datasets" : []}
};

export default AriaChart;