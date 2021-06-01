import React from 'react'
import Styled from 'styled-components'

const ComponentRow = props => {

  const spacing = props.spacing*5 +'px'

  const Row = Styled.div`
    display : flex;
    padding: ${spacing || '0'};
    `

    return (
      <Row>
        {props.children}
      </Row>
    )
}

export default ComponentRow