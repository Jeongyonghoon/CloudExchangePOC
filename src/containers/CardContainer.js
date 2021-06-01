import React, { useEffect, useState, useCallback } from 'react'
import { Card } from '../components'

import { useDispatch, useSelector } from 'react-redux';
import { userListAction, userKeyAction } from '../reducers/user'


const axios = require('axios')

const CardColor = ['#FF6666', '#3366CC', '#FFFF66', '#555555', '#33CC33', '#FF9900']

const CardContainer = props => {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.user.userList);

  const [cardData, setCardData] = useState([])
  const [viewData, setViewData] = useState([])
  const [testData, setTestData] = useState([])

  useEffect(()=>{
    dispatch(userListAction());
  },[dispatch])

  useEffect(()=>{
    setTestData(userList)
  },[userList])

  const onClickTest = () => {
    console.log(userList)
    console.log(testData)
    mapTest(testData)
  }
  const onClickTest2 = () => {
    console.log(userList)
    console.log(testData)
    mapTest(testData)
  }

  const mapTest = listData => {
    listData.forEach((item)=>{
      console.log(item['name'])
    })
  }

  const dataURL = props.dataURL

  const defaultCard = () => {
    const cardList=[]
    CardColor.forEach(function (item){
      cardList.push(
        <Card
          cardColor={item}
        ></Card>
      )
    })
    return cardList
  }

  const getData = async () => {
    try {
      const result = await axios.get(dataURL)
      setCardData(result.data)
      setData(result.data)
    } catch (e) {
      setViewData(defaultCard())
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
  }, [cardData])

  return (

    <>
      <div style={{ display: 'flex' }}>
        {viewData}
      </div>

      <div>
        <button onClick={onClickTest}>++</button>
        <button onClick={onClickTest2}>--</button>
      </div>
    </>
  )
}
export default CardContainer