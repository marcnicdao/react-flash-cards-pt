import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'

const navItems = [
    {
        view: 'view-cards',
        text: 'My Cards'
    },
    {
        view: 'review-cards',
        text: 'Review Cards'
    },
    {
        view: 'create-card',
        text: 'Create Cards'
    },
]

ReactDOM.render(
    <App navItems={navItems}/>,
    document.getElementById('root')
)
