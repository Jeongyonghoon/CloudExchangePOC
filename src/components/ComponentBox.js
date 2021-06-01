import React from 'react'
import Styled from 'styled-components'

const ComponentBox = props => {

  const spacing = props.spacing*5 +'px'

  const Box = Styled.div`
    color: rgba(0, 0, 0, 0.87);
    width: ${props.width || '100%'};
    height: ${props.height}; // --> 100%가 들어가면 오히려 안맞음 이유는?
    position: relative;
    background: #FFF;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.35);
    border-radius: 6px;
    flex-direction: column;
    
    // margin-top: ${props.marginTop || '0px'};
    // margin-bottom: ${props.marginBottom || '0px'};
    // margin-left: ${props.marginLeft || '0px'};
    // margin-right: ${props.marginRight || '0px'};
    margin-left: ${spacing || '0px'};
    margin-right: ${spacing || '0px'};
    // margin : ${spacing || '0px'};
  `
  return (
    <Box>
      {props.children}
    </Box>
  )
}
export default ComponentBox