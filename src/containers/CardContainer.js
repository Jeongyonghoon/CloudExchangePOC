import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Card, ComponentBox } from '../components'
import { useSelector } from 'react-redux'
import resultDefault from '../../public/static/data/dashboard/recentDefault.json'

const axios = require('axios')

const CardContainer = props => {
  const memberId = useSelector(state => state.user.memberId)

  const dataURL = props.dataURL

  const [viewData, setViewData] = useState([])

  const getData = async () => {
    try {
      const result = await axios.get(dataURL + `${memberId}`)

      if (result.data.length > 0) setData(result.data)
      else setData(resultDefault)

    } catch (e) {
      console.log(e)
    }
  }

  const setData = dataList => {
    const cardList = []

    const width = 100 / dataList.length + '%'

    dataList.forEach(function (item, index) {
      let marginRight = '15px'
      if (index === dataList.length - 1) marginRight = '0px'
      cardList.push(
          <Card
            title={item['label']}
            subTitle={item['sublabel']}
            price={item['value']}
            marginRight={marginRight}
            width={width} 
            spacing={2}
          ></Card>
      )
    })
    setViewData(cardList)
  }

  useEffect(() => {
    getData(memberId)
  }, [memberId])

  return (
    <>
      {viewData}
    </>
  )
}

CardContainer.propTypes = {
  dataURL: PropTypes.string
}

CardContainer.defaultProps = {
  dataURL: ''
}

export default CardContainer