import React from 'react'
import { DataGrid } from '@material-ui/data-grid'
import Styled from 'styled-components'
import { changeDate, changeNumber } from './changeFormat'

// https://smartdevpreneur.com/the-easiest-way-to-implement-material-ui-table-search/  -->  search table

const HeadText = Styled.text`
    color: black;
    font-weight: 1000;
`

const CloudTable = props => {

  const headerData = props.headerList
  const tableData = props.dataList

  const columns = []
  headerData.forEach((data, index) => {
    const item = {}
    if (index === 0) item['type'] = 'date'
    item['field'] = data.value
    item['headerName'] = data.label
    item['flex'] = 1
    columns.push(item)
  })

  const rows = []
  tableData.forEach((data, index) => {
    const item = {}
    item['id'] = index
    headerData.forEach((key, index) => {
      if (index === 0) item[key.value] = changeDate(data[key.value])
      else item[key.value] = changeNumber(data[key.value])
    })
    rows.push(item)
  })

  return (
    <DataGrid rows={rows} columns={columns} pageSize={5} autoHeight={true} disableColumnMenu/>
  )
}
export default CloudTable