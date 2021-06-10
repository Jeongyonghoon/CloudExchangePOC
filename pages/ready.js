import React from 'react'
import Typography from '@material-ui/core/Typography'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { Button } from '@material-ui/core';
import Link from 'next/link'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  button : {
    background : '#4fc3f7',
    color : '#E6E9ED',
    '&:hover' : {
      background : '#4fc3f7'
    }
  }
}))


const Ready = () => {

  const classes = useStyles()

  return(

    <div style={{
      textAlign : "center",
      position : "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      // height : "100%"
    }}>

      <div>
        <ErrorOutlineIcon
          style={{
            fontSize : 200,
            color : "#4fc3f7"
          
          }}
        ></ErrorOutlineIcon>
      </div>
      <Typography variant="h3">
        준비중인 페이지입니다.
      </Typography>
      <Typography variant="subtitle1" style={{margin : "25px 0", color : "#434A54"}}>
        죄송합니다. 현재 메뉴는 준비중입니다. 
      </Typography>
      <Link 
        href={{
          pathname: '/dashboard'
        }}>
        <a>
          <Button className={classes.button}>대시보드 가기</Button>
        </a>
      </Link>
    </div>

  )
}
export default Ready
