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
  const [state, setState] = React.useState({
    user: '',
  })

  const { label, options } = props
  const handleChange = (event) => {
    const user = event.target.name
    dispatch(userKeyAction(event.target.value))
    setState({
      ...state,
      [user]: event.target.value,
    })
  }

  const mapSelectOptions = (options) =>(
    options.map(
      (option) => <option value={option.id}>{option.username}</option>
    )
  )

  return (
    <div>
      <FormControl className={classes.formControl} size="small" style={{ minWidth: 250 }}>
        <NativeSelect
          value={state.user}
          onChange={handleChange}
          name="user"
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'user' }}
          style={{
            fontSize: '12px',
            lineHeight: '14px'
          }}
        >
          {mapSelectOptions(options)}
        </NativeSelect>
      </FormControl>
    </div>
  )
}
export default Selector