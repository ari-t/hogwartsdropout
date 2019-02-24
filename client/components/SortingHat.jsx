import React from 'react'
import {sortingHat} from '../sortingHatApi'

export default class SortingHat extends React.Component {
  constructor () {
    super()
    this.state = {
      sort: ''
    }
  }

  componentDidMount () {
    sortingHat()
      .then(res => {
        this.setState({sort: res.body})
      }
      )
      .catch(err => {
        console.error('Error:', err)
      })
  }

  render () {
    return (
      <div>
        <h1>Ask the sorting hat</h1>
        <p><strong>What Hogwarts house common room should I rob tonight?</strong></p>
        <p>{this.state}</p>
      </div>
    )
  }
}