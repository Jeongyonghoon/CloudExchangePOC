import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },

    selectEmpty: {
        marginTop: theme.spacing(2),
    },

}));


export default function Selector() {

  const classes = useStyles();
  const [state, setState] = React.useState({
    name: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div style={{marginLeft : '95em'}}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Name</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Name"
          inputProps={{
            name: 'age'
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>User1</option>
          <option value={20}>User2</option>
          <option value={30}>User3</option>
        </Select>
      </FormControl>
    </div>
  )
}       