import React, { useContext } from 'react';
import {Bar, Line} from 'react-chartjs-2';
import PropTypes, { element } from 'prop-types';
import { ThemeContext } from "styled-components";

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
  const themeContext = useContext(ThemeContext)

  const getColors = (data) => {

    const paletteKeys = Object.keys(themeContext.palette)

    const colorData = {
      labels : data.labels,
      datasets : data.datasets.map(
        (dataset,index) => {
          const newDataset = {
              ...dataset,
              backgroundColor : themeContext.palette[paletteKeys[index%paletteKeys.length]],
              borderColor : themeContext.palette[paletteKeys[index%paletteKeys.length]]
          }
          return newDataset
        }
      )
    }

    return colorData
  }

  const options = {

    type : 'line',
    
    // title : {
    //   display : true,
    //   text : props.data.title
    // },
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: false,
      // titleFontFamily : '맑은고딕, Malgun Gothic, dotum, gulim, sans-serif',
      // bodyFontFamily : '맑은고딕, Malgun Gothic, dotum, gulim, sans-serif'
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
    },

    legend : {
      labels : {
        // fontFamily : "맑은고딕, Malgun Gothic, dotum, gulim, sans-serif"
      }
    }
  }

  console.log(props.data);
  return(
    <>
      <Line data={getColors(props.data)} options={options} height={props.height}></Line>
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