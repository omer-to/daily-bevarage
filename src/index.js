import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import CoffeeImage from './images/coffee.jpg'
import TeaImage from './images/tea.jpg'

const bevarages = [
    {bevarageName: "coffee", bevarageImage: CoffeeImage},
    {bevarageName: "tea", bevarageImage: TeaImage},
]



ReactDOM.render(
    <App bevarages = {bevarages} />,
    document.querySelector("#root")
)
