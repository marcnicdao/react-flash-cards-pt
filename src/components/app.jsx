import React, { Component } from 'react'
import ViewCards from './view-cards'
import ReviewCards from './review-cards'
import CreateCard from './create-card'
import Nav from './nav'

export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            view: 'view-cards'
        }
        this.setView = this.setView.bind(this)
    }

    setView(newView){
        this.setState({view: newView})
    }

    getView(){
        const {view} = this.state
        switch(view){
            case 'create-card':
                return <CreateCard />;
            case 'review-cards':
                return <ReviewCards />;
            case 'view-cards':
                return <ViewCards />;
            default:
                return null;
        }
    }

    render(){
        const {navItems} = this.props
        const {view} = this.state
        return(
            <div>
                <Nav setView={this.setView}
                    navItems={navItems}
                    view={view}/>
                { this.getView() }
            </div>
        )
    }
}
