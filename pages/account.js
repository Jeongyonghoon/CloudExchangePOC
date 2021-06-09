import React, { useEffect } from 'react'
import Router from 'next/router'

const Account = () => {
  useEffect(() => {
    Router.push('/ready')
  })
  return (
    <></>
  )
}

export default Account