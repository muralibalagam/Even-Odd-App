// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {isClick: 0}

  clickButton = () => {
    this.setSate(preValue => ({isClick: preValue.isClick}))
  }

  render() {
    const {isClick} = this.state
    const random = Math.ceil(Math.random() * 100)
    // const isCheke = isClick ? random : random

    let a
    if (random % 2 === 0) {
      a = 'Even'
    } else {
      a = 'Odd'
    }

    return (
      <div className="bg-container">
        <div className="sub-container">
          <h1 className="heading">Count {isClick}</h1>
          <p className="description">Count is {a}</p>
          <button className="button" type="button" onClick={this.clickButton}>
            Increment
          </button>
          <p className="paragraph">
            Increased By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
