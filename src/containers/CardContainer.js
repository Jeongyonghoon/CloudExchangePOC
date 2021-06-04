import React, { useEffect, useState } from 'react'
import { Card } from '../components'

const axios = require('axios')

const CardContainer = props => {
  const dataURL = props.dataURL

  const [cardData, setCardData] = useState([])
  const [viewData, setViewData] = useState([])

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
          // cardColor={CardColor[index]}
        ></Card>
      )
    })
    setViewData(cardList)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div style={{ display: 'flex' }}>
      {viewData}
    </div>
  )
}
export default CardContainer