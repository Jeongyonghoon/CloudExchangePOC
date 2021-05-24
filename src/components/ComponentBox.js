import React from 'react'
import Styled from 'styled-components'

const ComponentBox = props => {

  const Box = Styled.div`
    color: rgba(0, 0, 0, 0.87);
    width: ${props.width || '500px'};
    height: ${props.height || '300px'};
    position: relative;
    background: #FFF;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 35%);
    border-radius: 6px;
    flex-direction: column;
    margin: 30px 10px 30px 10px;
`

  return (
    <Box>
      {props.component}
    </Box>
  )
}
export default ComponentBox