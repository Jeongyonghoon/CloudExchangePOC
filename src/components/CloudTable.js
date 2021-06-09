import React from 'react'
import { DataGrid } from '@material-ui/data-grid'
import PropTypes from 'prop-types'
import { changeDate } from './changeFormat'
import { makeStyles } from '@material-ui/styles'

const checkType = ['accountId', 'accountName', 'productName', 'usageType', 'itemDescription']
const checkBold = ['totalCost', 'cost', 'usageQuantity']
//환경변수를 사용한 타입 지정 찾아보기
//지금 너무 하드코딩 - 동적으로 바꿀수있는 방법 생각하기

const useStyles = makeStyles({
  bold: {
    '& .MuiDataGrid-columnHeaderTitle': {
      fontWeight:'1000',
    },
    '& .super-app-theme--cell': {
      fontWeight: '1000',
    }
  }
})

const CloudTable = props => {
  const headerList = props.headerList
  const dataList = props.dataList

  const columns = []
  const rows = []

  const classes = useStyles();

  headerList.forEach((data, index) => {
    const item = {}

    if (data.value === 'yearMonth') item['type'] = 'date'
    else if (!checkType.includes(data.value)) item['type'] = 'number'

    if (checkBold.includes(data.value) ) item['cellClassName'] = 'super-app-theme--cell'

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
    <div className={classes.bold}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        autoHeight={true}
        disableColumnMenu
      />
    </div>
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