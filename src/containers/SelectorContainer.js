import React, { useEffect, useState } from 'react'
import { Selector } from '../components'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import { userListAction } from '../reducers/user'

/**
 * props
 * - dataURL : api dataURL
 */

const SelectorContainer = props => {
  /* -- redux --- */
  const dispatch = useDispatch()
  const userList = useSelector(state => state.user.userList)
  /* -- redux --- */

  const [data, setData] = useState(null)
  const [userData, setUserData] = useState([])

  const initialize = async (dataURL) => {
    try {
      const response = await axios.get(dataURL)
      setData(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    initialize(props.dataURL)
  }, [])

  /* -- redux --- */
  useEffect(() => {
    dispatch(userListAction())
  }, [dispatch])
  useEffect(() => {
    setUserData(userList)
  }, [userList])
  /* -- redux --- */

  if (!data) return null
  return (
    <>
      <Selector label={data.label} options={userData}></Selector>
    </>
  )
}
export default SelectorContainer

/* --- 기존 코드 --- */
// import React, {Component} from 'react';
// import {Selector} from '../components';
// import axios from 'axios';
//
// /**
//  * props
//  * - dataURL : api dataURL
//  */
//
// class SelectorContainer extends Component{
//
//     constructor(props) {
//         super(props)
//         this.state = ({data: null})
//         // this.state = ({data: {}})
//     }
//
//     async initialize(dataURL) {
//         try {
//             const response = await axios.get(dataURL)
//             this.setState({data: response.data})
//         } catch (e) {
//             console.log(e)
//         }
//     }
//
//     componentDidMount() {
//         this.initialize(this.props.dataURL)
//     }
//
//     render(){
//
//         if(!this.state.data) return null
//
//         return(
//             <>
//                 <Selector label={this.state.data.label} options={this.state.data.options}></Selector>
//             </>
//         )
//     }
//
// }
//
// export default SelectorContainer;