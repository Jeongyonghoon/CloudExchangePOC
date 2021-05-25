import React from 'react'
import Styled from 'styled-components'

const ComponentBox = props => {

  const Box = Styled.div`
    color: rgba(0, 0, 0, 0.87);
    width: ${props.width || '100%'};
    height: ${props.height}; // --> 100%가 들어가면 오히려 안맞음 이유는?
    position: relative;
    background: #FFF;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 35%);
    border-radius: 6px;
    flex-direction: column;
    margin: 30px 10px 30px 10px;
`

  // return (
  //   <Box>
  //     {props.component}
  //   </Box>
  // )

    return (
      <Box>
        {props.children}
      </Box>
    )
}
export default ComponentBox