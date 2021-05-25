import React, {PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';

class Row extends PureComponent{

    render(){
        return(
            <Grid container>
                {this.props.children}
            </Grid>
        )
    }
}

export default Row;