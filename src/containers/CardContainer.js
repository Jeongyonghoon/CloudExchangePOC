import React, { useState, useEffect } from 'react'

import Card from '../components/Card'

const axios = require('axios')

const CardColor = ['red','blue','yellow','black','green','grey'];

const CardContainer = props => {
  const [cardData, setCardData] = useState([]);
  const [viewData, setViewData] = useState([]);

  const getData = async () => {
    const result = await axios.get('http://localhost:8000/CardData')
    setCardData(result.data)
    setData(result.data)
  }

  const setData = dataList => {
    const cardList=[];
    dataList.forEach(function (item,index) {
      cardList.push(
        <Card
          title={item['title']}
          subTitle={item['subTitle']}
          price={item['price']}
          cardColor={CardColor[index]}
        ></Card>
      )
    })
    setViewData(cardList);
  }

  useEffect(() => {
    getData()
  }, [])

  // useEffect(() => {
  //   setData(cardData)
  // }, [cardData])

  console.log(viewData)
  return (
    <div style={{ display: 'flex'}}>
      {viewData}
    </div>
  )
}
export default CardContainer;