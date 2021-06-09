import React, { useEffect } from 'react'
import Router from 'next/router'

const Daily = () => {
  useEffect(() => {
    Router.push('/ready')
  })
  return (
    <></>
  )
}

export default Daily