import React from 'react'
import Styled from 'styled-components'

const ComponentRow = props => {

  const Row = Styled.div`
    display : flex
    `

    return (
      <Row>
        {props.children}
      </Row>
    )
}

export default ComponentRow