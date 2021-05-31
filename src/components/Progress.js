import React, {PureComponent} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

class Progress extends PureComponent{

    render(){
        return(
            
                <div style={{
                    width : '100%',
                    textAlign : 'center',
                    padding : '15px 0 15px 0'
                }}>
                    <CircularProgress></CircularProgress> 
                </div>
            
        )
    }
}

export default Progress