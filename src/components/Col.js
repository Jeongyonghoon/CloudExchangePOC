import React, {PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';

class Col extends PureComponent{

    render(){
        return(
            <Grid item xs={this.props.colNum}>
                {this.props.children}
            </Grid>
        )
    }
}

export default Col;