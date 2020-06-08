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
    <div className='d-flex justify-content-center'>
        <App navItems={navItems}/>
    </div>,
    document.getElementById('root')
)
