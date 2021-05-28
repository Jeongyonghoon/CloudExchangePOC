import React from 'react'
import Styled from 'styled-components'


const BoxHeader = props => {

  const title=props.title

  const Header = Styled.div`
    padding: 10px 0 10px 10px;
    border-bottom: 2px solid #E6E6E6;
  `

  return(
    <Header>{title}</Header>
  )
}
BoxHeader.defaultProps={
  title:'default',
}
export default BoxHeader