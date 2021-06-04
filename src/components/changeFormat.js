export const changeDate = data => {
  const result = []
  result.push(data.slice(0,4)+'년 ' + data.slice(4,6) + '월')
  return result
}

export const changeNumber = data => {
  return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}