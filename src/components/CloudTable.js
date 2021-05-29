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
    font-family: twayair;
`

const ContentText = Styled.text`
    font-family: twayair;
`

const getRaw = dataList => {
  const getData = []
  for (let raw in dataList) {
    if (typeof dataList[raw] === 'number') {
      getData.push(
        <TableCell>
          <ContentText>
            <CardNumber number={dataList[raw]}/>
            </ContentText>
        </TableCell>
      )
    } else {
      getData.push(
        <TableCell>
          <ContentText>
            {dataList[raw]}
          </ContentText>
        </TableCell>
      )
    }
  }
  return getData
}

const CloudTable = props => {

  const colData = props.colList
  const rawData = props.rawList

  const viewColData = []
  const viewRawData = []

  for (let col in colData) {
    viewColData.push(
      <TableCell><HeadText>{colData[col]}</HeadText></TableCell>
    )
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