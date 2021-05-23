import React, {useState, useEffect} from 'react'

import Card from '../components/Card'

const CardContainer = () =>{
  return(
    <div style={{display:'flex'}}>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  )
}
export default CardContainer;