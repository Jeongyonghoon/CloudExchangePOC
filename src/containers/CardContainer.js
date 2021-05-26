import React, { useEffect, useState } from 'react'
import { Card } from '../components'

const axios = require('axios')

const CardColor = ['#FF6666', '#3366CC', '#FFFF66', '#555555', '#33CC33', '#FF9900']

const CardContainer = props => {
  const [cardData, setCardData] = useState([])
  const [viewData, setViewData] = useState([])

  const dataURL = props.dataURL

  const getData = async () => {
    try {
      const result = await axios.get(dataURL)
      setCardData(result.data)
      setData(result.data)
    } catch (e) {
      console.log(e)
    }
  }

  const setData = dataList => {
    const cardList = []
    dataList.forEach(function (item, index) {
      cardList.push(
        <Card
          title={item['title']}
          subTitle={item['subTitle']}
          price={item['price']}
          cardColor={CardColor[index]}
        ></Card>
      )
    })
    setViewData(cardList)
  }

  useEffect(() => {
    getData()
  }, [])

  // useEffect(() => {
  //   setData(cardData)
  // }, [cardData])

  return (
    <div style={{ display: 'flex' }}>
      {viewData}
    </div>
  )
}
export default CardContainer