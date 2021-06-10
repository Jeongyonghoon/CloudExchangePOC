import React from 'react'
import Styled from 'styled-components'

const ComponentBox = props => {

  const spacing = props.spacing*5 +'px'

  const Box = Styled.div`
    color: rgba(0, 0, 0, 0.87);
    width: ${props.width || '100%'};
    height: ${props.height};
    position: relative;
    background: #FFF;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.35);
    border-radius: 6px;
    flex-direction: column;
    margin : ${spacing || '0px'};
  `
  return (
    <Box>
      {props.children}
    </Box>
  )
}

ComponentBox.defaultProps={
  width:'100%',
}

export default ComponentBox