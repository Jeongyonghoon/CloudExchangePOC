import React from 'react'
import { DataGrid } from '@material-ui/data-grid'
import PropTypes from 'prop-types'
import { changeDate } from './changeFormat'

const CloudTable = props => {
  const headerList = props.headerList
  const dataList = props.dataList

  const columns = []
  const rows = []

  headerList.forEach((data, index) => {
    const item = {}

    if (index === 0) item['type'] = 'date'
    else item['type'] = 'number'

    item['field'] = data.value
    item['headerName'] = data.label
    item['flex'] = 1

    columns.push(item)
  })

  dataList.forEach((data, index) => {
    const item = {}

    item['id'] = index
    headerList.forEach((key, index) => {
      if (index === 0) item[key.value] = changeDate(data[key.value])
      else item[key.value] = Number(data[key.value])
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