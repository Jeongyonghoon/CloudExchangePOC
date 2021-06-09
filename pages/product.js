import React, { useEffect } from 'react'
import Router from 'next/router'

const Product = () => {
  useEffect(() => {
    Router.push('/ready')
  })
  return (
    <></>
  )
}

export default Product
