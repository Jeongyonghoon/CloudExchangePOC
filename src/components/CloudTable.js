import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const CloudTable = props => {

  const colData = props.colList
  const rawData = props.rawList

  const viewColData = []
  const viewRawData = []

  for (let col in colData) {
    viewColData.push(
      <TableCell>{colData[col]}</TableCell>
    )
  }

  const getRaw = dataList => {
    const getData=[]
    for (let raw in dataList){
      getData.push(
        <TableCell>{dataList[raw]}</TableCell>
      )
    }
    return getData
  }

  rawData.forEach(function (item) {
    viewRawData.push(
      <TableRow>
        {getRaw(item)}
      </TableRow>
    )
  })


  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">

        <TableHead>
          <TableRow>
            {viewColData}
          </TableRow>
        </TableHead>


        <TableBody>
          {viewRawData}
        </TableBody>

      </Table>
    </TableContainer>
  )
}
export default CloudTable