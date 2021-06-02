import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import CardNumber from './CardNumber'
import Styled from 'styled-components'

// https://smartdevpreneur.com/the-easiest-way-to-implement-material-ui-table-search/  -->  search table

const HeadText = Styled.text`
    color: black;
    font-weight: 1000;
`

const CloudTable = props => {

  const colData = props.headerList
  const rowData = props.dataList

  const viewColData = []
  const viewRowData = []

  const getRowData = data => {
    const result = []
    for(let i in data){
      result.push(<TableCell>{data[i]}</TableCell>)
    }
    return result
  }

  for (let col in colData) {
    viewColData.push(
      <TableCell><HeadText>{colData[col]}</HeadText></TableCell>
    )
  }

  for (let i in rowData){
    viewRowData.push(
      <TableRow>{getRowData(rowData[i])}</TableRow>
    )
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">

        <TableHead>
          <TableRow>
            {viewColData}
          </TableRow>
        </TableHead>

        <TableBody>
          {viewRowData}
        </TableBody>

      </Table>
    </TableContainer>
  )
}
export default CloudTable