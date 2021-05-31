import React, { useEffect, useState, useCallback } from 'react'
import { Card } from '../components'

import { useDispatch, useSelector } from 'react-redux';
import { countPlusAction, countMinusAction, userListAction } from '../reducers/count'


const axios = require('axios')

const CardColor = ['#FF6666', '#3366CC', '#FFFF66', '#555555', '#33CC33', '#FF9900']

const CardContainer = props => {

  const dispatch = useDispatch(); // dispatch를 사용하기 쉽게 하는 hook
  // const count = useSelector(state => state.count.number); // store의 state를 불러오는 hook   store의 state 중에서 count의 state를 불러온다.
  const count = 0
  // const data = useSelector(state => state.count.data); // store의 state를 불러오는 hook   store의 state 중에서 count의 state를 불러온다.
  const data = 0
  const userList = useSelector(state => state.count.userList); // store의 state를 불러오는 hook   store의 state 중에서 count의 state를 불러온다.

  const onClickPlus = useCallback(() => { // useCallback은 최적화를 위한 hook이다 이 앱에선 굳이 사용 안 해도 되는데 습관이 들면 좋기에 사용.
    dispatch(countPlusAction());
  }, []);

  const onClickMinus = useCallback(() => {
    dispatch(countMinusAction());
  }, []);
  const onClickTest = useEffect(()=>{
    dispatch(userListAction());
  },[])


  const [cardData, setCardData] = useState([])
  const [viewData, setViewData] = useState([])

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
        <div>카운트 : {count}</div>
        <div>데이터 : {data}</div>
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
        <button onClick={onClickTest}>++</button>
      </div>
    </>
  )
}
export default CardContainer