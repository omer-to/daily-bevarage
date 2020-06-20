import React, {Component} from 'react'
import '../styles/TimeLog.css'

class TimeLog extends Component {
    
    render() {
        
        return (
            <span className = "time" style={{textDecorationLine: this.props.new ? "none" : "line-through"}}>
                {this.props.time}
            </span>
        )
    }
}
export default TimeLog