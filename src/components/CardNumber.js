import React, { useEffect, useState } from 'react'

const CardNumber = props => {
  const [number, setNumber] = useState(0)
  const getNumber = props.number

  const changeNumber = N => {
    setNumber(N.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  }

  useEffect(() => {
    changeNumber(getNumber)
  }, [getNumber])

  return (<>{number}</>)
}
export default CardNumber