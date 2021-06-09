import React from 'react'
import { DataGrid } from '@material-ui/data-grid'
import PropTypes from 'prop-types'
import { changeDate } from './changeFormat'

const checkType = ['accountId', 'accountName', 'productName', 'usageType', 'itemDescription']
//환경변수를 사용한 타입 지정 찾아보기

const CloudTable = props => {
  const headerList = props.headerList
  const dataList = props.dataList

  const columns = []
  const rows = []

  headerList.forEach((data, index) => {
    const item = {}

    if (data.value === 'yearMonth') item['type'] = 'date'
    else if (!checkType.includes(data.value)) item['type'] = 'number'

    item['field'] = data.value
    item['headerName'] = data.label
    item['flex'] = 1

    columns.push(item)
  })

  dataList.forEach((data, index) => {
    const item = {}

    item['id'] = index
    headerList.forEach((key, index) => {
      if (key.value === 'yearMonth') item[key.value] = changeDate(data[key.value])
      else if (!checkType.includes(key.value)) item[key.value] = Number(data[key.value])
      else item[key.value] = data[key.value]
    })
    rows.push(item)
  })

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={10}
      autoHeight={true}
      disableColumnMenu/>
  )
}

CloudTable.propTypes = {
  headerList: PropTypes.object,
  dataList: PropTypes.object
}

CloudTable.defaultProps = {
  headerList: [],
  dataList: []
}

export default CloudTable