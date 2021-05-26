import React, {PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

class Col extends PureComponent{

    render(){
        return(
            <Grid item xs={this.props.colNum}>
                <div style={{
                    color: 'rgba(0, 0, 0, 0.87)',
                    background: '#FFF',
                    boxShadow : '0 1px 4px 0 rgb(0 0 0 / 35%)',
                    borderRadius: '6px',
                    margin: '30px 10px 30px 10px',
                    textAlign : 'center'
                }}>
                    {this.props.children}
                </div>
            </Grid>
        )
    }
}

Col.propTypes = {
    colNum: PropTypes.number,
};
  
Col.defaultProps = {
    colNum: 12,
};

  
export default Col;