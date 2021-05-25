import React, { Component } from 'react'
import Menu from '../components/Menu'
import axios from 'axios'

/**
 * props 
 * - url : api url 
 */
class MenuContainer extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      data: null
    })
  }

  async initialize(url) {
    try {
      const response = await axios.get(url)
      this.setState({
        data: response.data
      })
    } catch (e) {
      console.log(e)
    }
  }

  componentDidMount() {
    this.initialize(this.props.url)
  }

  render () {
    if (!this.state.data) return null

    return (
      <>
        <Menu pages={this.state.data.pages} />
      </>
    )
  }
}

export default MenuContainer
