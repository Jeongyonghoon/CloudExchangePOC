import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'

import { useDispatch , useSelector} from 'react-redux'
import { yearMonthAction } from '../reducers/yearMonth'

const useStyles = makeStyles((theme) => ({

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

  selectEmpty: {
    // marginTop: theme.spacing(2),
  },

}))

const YearMonthSelector = props => {

  const dispatch = useDispatch()
  // const yearMonth = useSelector(state => state.yearMonth.yearMonth) // userKey accountId로 바꾸기
  const classes = useStyles()
  // const [state, setState] = useState({
  //   yearMonth: '',
  // })

  const [yearMonth, setYearMonth] = useState('')
  // const [options, setOptions] = useState(props.op)
  // 한 번만 렌더링 하려면 두번째 인자로 빈 배열을 넣어줌

  // useEffect(()=>{
  //     setYearMonth(useSelector(state => state.yearMonth.yearMonth))
  //     console.log(yearMonth);
  // },[])

  useEffect(()=>{
    if(props.options){
      if(props.options.length===0){
        setYearMonth('')
        dispatch(yearMonthAction(''))
      }else{
        setYearMonth(props.options[0].value)
        dispatch(yearMonthAction(props.options[0].value))
      }
    }
  },[props.options])




  const handleChange = (event) => {
    setYearMonth(event.target.value)
    dispatch(yearMonthAction(event.target.value))
  }

  // const urlKey = useSelector(state => state.user.urlKey)

  // const { yearMonths } = props
  // const accountId = dispatch()
  // const handleChange = (event) => {
  //   const name = event.target.name
  //   // console.log(event.target.name);
  //   // console.log(event.target.value);
  //   // dispatch(yearMonthAction(event.target.value))
  //   setState({
  //     ...state,
  //     [name]: event.target.value,
  //   })
  //   dispatch(yearMonthAction(state.yearMonth))
  // }

  // useEffect(()=>{
  //   setState({
  //     ...state,
  //     yearMonth : yearMonth
  //   })
  // },[yearMonth])

  const mapSelectOptions = (options) =>{
    if(!options || options.length===0){
      return <option>No Data</option>
    }else{
      return(
        options.map(
          // (option) => <option value={option.value}>{option.value.slice(0,4) + '년 ' + option.value.slice(4)+'월'}</option>
          (option) => <option value={option.value}>{option.value.replace(/(\w{4})(\w{2})/g, '$1년 $2월')}</option>
        )
      )
    }
  }
  
  return (
    <div>
      <FormControl className={classes.formControl} size="small" style={{ minWidth: 250 }}>
        <NativeSelect
          value={yearMonth}
          onChange={handleChange}
          name="yearMonth"
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'user' }}
          style={{
            fontSize : '14px',
            lineHeight : '18px'
          }}
        >
          {mapSelectOptions(props.options)}
        </NativeSelect>
      </FormControl>
    </div>
  )
}
export default YearMonthSelector