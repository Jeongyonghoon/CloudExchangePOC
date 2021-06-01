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

/* --- 기존 코드 --- */
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';
// import FormHelperText from '@material-ui/core/FormHelperText';
//
// const useStyles = makeStyles((theme) => ({
//
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120,
//     },
//
//     selectEmpty: {
//         // marginTop: theme.spacing(2),
//     },
//
// }));
//
//
// export default function Selector(props) {
//
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     user: '',
//   });
//
//   const {label, options} = props
//   const handleChange = (event) => {
//     const user = event.target.name;
//     setState({
//       ...state,
//       [user]: event.target.value,
//     });
//   };
//
//   const mapSelectOptions = (options) => (
//     options.map(
//       (option) => <option value={option.id}>{option.username}</option>
//     )
//   )
//
//
//   return (
//     <div>
//       {/* <FormControl variant="outlined" className={classes.formControl} size='small' style={{minWidth: 250}}>
//         <InputLabel
//           htmlFor="outlined-age-native-simple"
//           style={{
//             fontSize : '12px',
//             lineHeight : '14px'
//         }}>{label}</InputLabel>
//         <Select
//           native
//           value={state.user}
//           onChange={handleChange}
//           label="User"
//           inputProps={{
//             name: 'user',
//             id: 'user-native-simple',
//           }}
//           style={{
//               fontSize : '12px',
//               lineHeight : '14px'
//           }}
//         >
//           <option aria-label="None" value="" />
//           {mapSelectOptions(options)}
//         </Select>
//       </FormControl> */}
//       <FormControl className={classes.formControl} size='small' style={{minWidth: 250}}>
//         <NativeSelect
//           value={state.user}
//           onChange={handleChange}
//           name="user"
//           className={classes.selectEmpty}
//           inputProps={{ 'aria-label': 'user' }}
//           style={{
//             fontSize : '12px',
//             lineHeight : '14px'
//           }}
//         >
//           {mapSelectOptions(options)}
//         </NativeSelect>
//         {/* <FormHelperText>With visually hidden label</FormHelperText> */}
//       </FormControl>
//     </div>
//   )
// }