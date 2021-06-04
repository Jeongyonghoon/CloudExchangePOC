import React from 'react'
import Styled from 'styled-components'
import { changeNumber } from './changeFormat'

const Box = Styled.div`
    color: rgba(0, 0, 0, 0.87);
    width: 100%;
    position: relative;
    // font-size: .875rem;
    background: #FFF;
    box-shadow: 0 1px 4px 0 rgb(0, 0, 0, 0.35);
    border-radius: 6px;
    flex-direction: column;
    margin: 30px 10px 30px 10px;
    //top right bottom left
    
    @media (max-width: 992px){
      width: 250px;
    }
`

const Top = Styled.div`
    text-align: right;
    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
    color: black;
    margin: 0 15px;
`

const Bottom = Styled.div`
    border-top: solid 2px #E6E6E6;
    margin: 0 15px 10px;
    align-items: center;
    padding-top: 10px; 
    font-size: 13px;
`

const Card = props => {

  const title = props.title
  const subtitle = props.subTitle
  const price = props.price

  return (

    <Box>
      <Top>
        <p>{title}</p>

        <h3>
          ₩
          {changeNumber(price)}
          <small> 원</small>
        </h3>

      </Top>

      <Bottom>
        <div>{subtitle}</div>
      </Bottom>
    </Box>
  )
}

Card.defaultProps = {
  title: 'default',
  price: 0,
  subTitle: 'default'
}
export default Card
