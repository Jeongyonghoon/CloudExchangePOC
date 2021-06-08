import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Card } from '../components'
import { useSelector } from 'react-redux'

const axios = require('axios')

const CardContainer = props => {
  const memberId = useSelector(state => state.user.memberId)

  const dataURL = props.dataURL

  const [viewData, setViewData] = useState([])

  const getData = async () => {
    try {
      const result = await axios.get(dataURL + `${memberId}`)
      setData(result.data)
    } catch (e) {
      console.log(e)
    }
  }

  const setData = dataList => {
    const cardList = []
    dataList.forEach(function (item, index) {
      let marginRight = '15px'
      if (index === dataList.length - 1) marginRight = '0px'
      cardList.push(
        <Card
          title={item['label']}
          subTitle={item['sublabel']}
          price={item['value']}
          marginRight={marginRight}
        ></Card>
      )
    })
    setViewData(cardList)
  }

  useEffect(() => {
    getData(memberId)
  }, [memberId])

  return (
    <div style={{ display: 'flex', marginBottom: '30px' }}>
      {viewData}
    </div>
  )
}

CardContainer.propTypes = {
  dataURL: PropTypes.string
}

CardContainer.defaultProps = {
  dataURL: ''
}

export default CardContainer