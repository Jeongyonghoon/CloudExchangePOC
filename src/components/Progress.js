import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

const Progress = () => {
  return (
    <div style={{
      width: '100%',
      textAlign: 'center',
      padding: '15px 0 15px 0'
    }}>
      <CircularProgress></CircularProgress>
    </div>

  )
}
export default Progress