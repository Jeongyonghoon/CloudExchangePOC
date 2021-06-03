import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import CardNumber from './CardNumber'
import CardDate from './CardDate'
import { DataGrid } from '@material-ui/data-grid';
import Styled from 'styled-components'

// https://smartdevpreneur.com/the-easiest-way-to-implement-material-ui-table-search/  -->  search table

const HeadText = Styled.text`
    color: black;
    font-weight: 1000;
`

const CloudTable = props => {

  const headerData = props.headerList
  const tableData = props.dataList

  const columns = []
  headerData.forEach(data=>{
    const item={}
    item['field']=data.value
    item['headerName']=data.label
    item['flex']=1
    columns.push(item)
  })

  const rows=[]
  tableData.forEach(data=>{
    const item={}
    console.log(data[0])
  })


  // const getRowData = data => {
  //   const result = []
  //   data.forEach((item, index) => {
  //     if(index==0) result.push(<TableCell><CardDate number={item}/></TableCell>)
  //     else result.push(<TableCell><CardNumber number={item}/></TableCell>)
  //   })
  //   return result
  // }
  //
  // headerData.forEach(item => {
  //   viewHeaderData.push(<TableCell><HeadText>{item}</HeadText></TableCell>)
  // })
  //
  // tableData.forEach(item => {
  //   viewTableData.push(<TableRow>{getRowData(item)}</TableRow>)
  // })

  return (

    <DataGrid rows={rows} columns={columns} pageSize={5}/>
    // <TableContainer component={Paper}>
    //   <Table aria-label="simple table">
    //
    //     <TableHead>
    //       <TableRow>
    //         {viewHeaderData}
    //       </TableRow>
    //     </TableHead>
    //
    //     <TableBody>
    //       {viewTableData}
    //     </TableBody>
    //
    //   </Table>
    // </TableContainer>
  )
}
export default CloudTable