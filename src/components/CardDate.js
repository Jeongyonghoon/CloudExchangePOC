const CardDate = props => {
  const getNumber = props.number

  const changeNumber = data => {
    const result = []
    result.push(data.slice(0,4)+'년 ')
    result.push(data.slice(3,5)+'월')
    return result
  }

  return (<>{changeNumber(getNumber)}</>)
}
CardDate.defaultProps = {
  number: 'yyyymmdd',
}
export default CardDate

/*
s = s.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3'); 숫자?

s = s.replace(/(\w{4})(\w{2})(\w{2})/g, '$1-$2-$3'); 문자?

const dateFormat = (value, pattern)=> {
const i = 0,
date = value.toString();
return pattern.replace(/#/g, _ => date[i++]);
}
const displayDate = dateFormat('19700101', '####-##-##');
*/