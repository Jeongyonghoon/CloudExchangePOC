import React from 'react'
import Styled from 'styled-components'

const BoxHeader = props => {

  const title = props.title

  const Header = Styled.div`
    padding: 7px 0 7px 10px; 
    border-bottom: 2px solid #E6E6E6;
    font-size : 16px;
    font-weight : 1000;
  `

  return (
    <Header>{title}</Header>
  )
}
BoxHeader.defaultProps = {
  title: 'default',
}
export default BoxHeader