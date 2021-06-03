const CardNumber = props => {
  const getNumber = props.number

  const changeNumber = data => {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (<>{changeNumber(getNumber)}</>)
}
CardNumber.defaultProps = {
  number: '0000',
}
export default CardNumber