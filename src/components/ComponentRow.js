import React from 'react'
import Styled from 'styled-components'

const ComponentRow = props => {

  const spacing = props.spacing*5 +'px'

  const Row = Styled.div`
    display : flex;
    padding: ${spacing || '0'};

    @media (max-width: 992px){
      min-width: 992px;
    }
    `

    return (
      <Row>
        {props.children}
      </Row>
    )
}

export default ComponentRow