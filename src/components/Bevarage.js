import React, { Component } from 'react'
import TimeLog from './TimeLog'

import '../styles/Bevarage.css'

class Bevarage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: this.props.date,
            time: [],
            isHovering: false
        }
    
    }
    
    onClick = (time) => {
        this.setState({time: [...this.state.time, time ]})
    }

    handleMouse = () => {
        this.setState(prevState => ({isHovering: !prevState.isHovering}))
    }

    static getDerivedStateFromProps (props, state) {
        
        if (props.date.getTime() !== state.date.getTime() )
        {    
            return  {...state, time: [], date : props.date}
        }
        return state
    }


    render() {

        return (
            <div className = "bevarage">
                <button                
                    type="button"
                    onClick = {() => this.onClick(new Date().toLocaleTimeString())}
                >
                    <img onMouseOver = {this.handleMouse} onMouseLeave = {this.handleMouse} src={this.props.bevarageImage} alt = {this.props.bevarageName} />
                    {this.state.isHovering && <div className = "dailytotal">Daily total: {this.state.time.length}</div>}
                </button>
                
                <div className = "times">
                    {this.state.time.map((item, index, array) => {
                        return (index === array.length - 1 || array.length === 1)
                        ? <TimeLog key = {index} time = {item} new = {true} />
                        : <TimeLog key = {index} time = {item} new = {false} />
                        
                    })}
                </div>
            </div>
        )
    }
}



export default Bevarage