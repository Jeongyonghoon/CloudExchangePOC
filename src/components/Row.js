import React from 'react'
import Grid from '@material-ui/core/Grid'

const Row = props => {
    return(
      <Grid container>
          {props.children}
      </Grid>
    )
}
export default Row;
