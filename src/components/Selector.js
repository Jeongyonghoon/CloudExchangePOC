import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'

import { userKeyAction } from '../reducers/user'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

  selectEmpty: {
    // marginTop: theme.spacing(2),
  },

}))

const Selector = props => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const { label, options } = props
  const handleChange = (event) => {
    dispatch(userKeyAction(event.target.value))
  }

  const mapSelectOptions = (options) => {
    const result = []
    if (!options) return null

    options.forEach(item => {
      result.push(<option value={item.memberId} key={item.memberId}>{item.companyName} ({item.name})</option>)
    })

    return result
  }

  return (
    <div>
      <FormControl className={classes.formControl} size="small" style={{ minWidth: 250 }}>
        <NativeSelect
          onChange={handleChange}
          name="user"
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'user' }}
          style={{
            fontSize: '14px',
            lineHeight: '18px'
          }}
        >
          {mapSelectOptions(options)}
        </NativeSelect>
      </FormControl>
    </div>
  )
}
export default Selector