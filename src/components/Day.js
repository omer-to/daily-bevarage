import React, { Component } from 'react'
import '../styles/Day.css'

export default class Day extends Component {
    render() {
        return (
            <div className = "nextday">
                Day: {this.props.day.toLocaleDateString()}
                <button onClick = { () => this.props.callbackOnClick()}>
                    See the next day
                </button>
            </div>
        )
    }
}
