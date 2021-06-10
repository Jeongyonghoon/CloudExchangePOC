import Slider from '@material-ui/core/Slider'
import React from 'react'
import Tooltip from "@material-ui/core/Tooltip";

const ValueLabelComponent = props => {
  const { children, open, value } = props;

  return(
    <Tooltip open={open} enterTouchDelay={0} placement={'top'} title={value}>
      {children}
    </Tooltip>
  )
}

const ChartSlider = props => {
  const dataCount = props.dataCount
  const viewCount = props.viewCount
  const labelData = props.labelData

  const dateText = value => {
    if (viewCount[1] == value) return `${labelData[value - 1]}`
    return `${labelData[value]}`
  }

  const marks=[
    {
      value:0,
      label:labelData[0]
    },
    {
      value: dataCount/2,
      label:labelData[(dataCount/2)-1]
    },
    {
      value: dataCount,
      label:labelData[dataCount-1]
    }
  ];

  return (
    <Slider
      ValueLabelComponent={ValueLabelComponent}
      value={viewCount}
      onChange={props.handleChange}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
      max={dataCount}
      min={0}
      marks={marks}
      valueLabelFormat={dateText}
      style={{color : "#434A54"}}
    />
  )
}
export default ChartSlider
