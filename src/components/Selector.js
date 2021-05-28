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
    <div style={{marginLeft : '75%'}}>
      <FormControl variant="outlined" className={classes.formControl} size='small' style={{minWidth: 340}}>
        <InputLabel 
          htmlFor="outlined-age-native-simple"
          style={{
            fontSize : '12px',
            lineHeight : '16px'
        }}>Name</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Name"
          inputProps={{
            name: 'age'
          }}
          style={{
              fontSize : '12px',
              lineHeight : '16px'
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>코오롱베니트 (이광훈)</option>
          <option value={20}>코오롱베니트 (정용훈)</option>
        </Select>
      </FormControl>
    </div>
  )
}       