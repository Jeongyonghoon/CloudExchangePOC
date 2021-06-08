import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { changeNumber } from './changeFormat'

const Card = props => {

  const title = props.title
  const subtitle = props.subTitle
  const price = props.price

  const Box = Styled.div`
    color: rgba(0, 0, 0, 0.87);
    width: 100%;
    position: relative;
    background: #FFF;
    box-shadow: 0 1px 4px 0 rgb(0, 0, 0, 0.35);
    border-radius: 6px;
    flex-direction: column;
    margin-right: ${props.marginRight};
    
    @media (max-width: 992px){
      width: 250px;
    }
`

  const Top = Styled.div`
    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
    color: black;
    margin: 0 15px;
`

  const Bottom = Styled.div`
    text-align: right;
    border-top: solid 2px #E6E6E6;
    margin: 0 15px 10px;
    align-items: center;
    padding-top: 10px; 
    font-size: 13px;
`

  return (

    <Box>
      <Top>
        <div style={{textAlign:"left"}}><p>{title}</p></div>
        <div style={{textAlign:"right"}}>
          <h3>
            ₩{changeNumber(price)}
            <small> 원</small>
          </h3>
        </div>
      </Top>

      <Bottom>
        <div>{subtitle}</div>
      </Bottom>
    </Box>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  marginRight: PropTypes.string,
  price: PropTypes.number
}

Card.defaultProps = {
  title: 'default',
  subTitle: 'default',
  marginRight: '0px',
  price: 0
}
export default Card