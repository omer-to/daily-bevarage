import React from 'react'
import Bevarage from './components/Bevarage'
import Day from './components/Day'
import './styles/App.css'




class App extends React.Component {
    
    state = {
        date: new Date(),
    }

    onNewDay = () => {
        const {date} = this.state
        const newDate = new Date(Number(date))
        newDate.setDate(date.getDate() + 1)

        this.setState(() => {
            
            return {date: newDate}
            } 
        )
        
    }


    render() {
        
        const { bevarages } = this.props
       
        return (
            
            <>
                <Day day = {this.state.date} callbackOnClick = {this.onNewDay} />
                {bevarages.map( bevarage => <Bevarage key = {bevarage.bevarageName} bevarageName = {bevarage.bevarageName} bevarageImage = {bevarage.bevarageImage} date = {this.state.date}  /> ) }
            </>
        )
    }
}
export default App



