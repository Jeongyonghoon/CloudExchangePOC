import React, { useEffect } from 'react'
import Router from 'next/router'

const Invoice = () => {
  useEffect(() => {
    Router.push('/ready')
  })
  return (
    <></>
  )
}

export default Invoice
