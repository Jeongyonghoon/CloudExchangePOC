import Slider from '@material-ui/core/Slider'
import React, { useEffect, useState } from 'react'

const ChartSlider = props => {

  const dataCount=props.dataCount;
  const viewCount=props.viewCount;

  return (
    <Slider
      value={viewCount}
      onChange={props.handleChange}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
      max={dataCount}
      min={0}
    />
  )
}
export default ChartSlider