import React from 'react'
import {Bored} from '../api'

export default class Dropout extends React.Component {
  constructor () {
    super()
    this.state = {
      bored: ''
    }
  }

  componentDidMount () {
    Bored()
      .then(res => {
        this.setState({bored: res.activity})
      }
      )
      .catch(err => {
        console.error('Error:', err)
      })
  }

  render () {
    return (
      <div>
        <h1>The Hogwarts Dropout</h1>
        <span><strong>Now that you've dropped out of Hogwarts, here's an idea.</strong></span> <br />
        <br />
        <span>You could:</span>
        <p>{this.state.bored} ...but not at Hogwarts coz you dropped out.</p>
      </div>
    )
  }
}
