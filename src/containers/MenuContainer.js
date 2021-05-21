import React, { Component } from 'react'
import Menu from '../components/Menu'
import axios from 'axios'

class MenuContainer extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      data: null
    })
  }

  async initialize () {
    try {
      const response = await axios.get('http://localhost:3100/static/data/layout.json')
      this.setState({
        data: response.data
      })
    } catch (e) {
      console.log(e)
    }
  }

  componentDidMount () {
    this.initialize()
  }

  render () {
    if (!this.state.data) return null

    return (
      <>
        <Menu classes={this.props.classes} pages={this.state.data.pages} />
      </>
    )
  }
}

export default MenuContainer
