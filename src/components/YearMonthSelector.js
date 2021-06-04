import React, {useState} from 'react'
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

  const classes = useStyles()
  const [state, setState] = useState({
    yearMonth: '',
  })

  // const urlKey = useSelector(state => state.user.urlKey)

  // const { yearMonths } = props
  // const accountId = dispatch()
  const handleChange = (event) => {
    const yearMonth = event.target.name
    console.log(event.target.name);
    console.log(event.target.value);
    dispatch(yearMonthAction(event.target.value))
    setState({
      ...state,
      [yearMonth]: event.target.value,
    })
  }

  const mapSelectOptions = (options) =>{
    if(!options){
      return <option></option>
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
          value={state.user}
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