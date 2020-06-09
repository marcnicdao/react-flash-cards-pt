import React, { Component } from 'react'
import ViewCards from './view-cards'
import ReviewCards from './review-cards'
import CreateCard from './create-card'
import Nav from './nav'

export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            view: 'view-cards',
            cards: []
        }
        this.setView = this.setView.bind(this)
        this.addCard = this.addCard.bind(this)
    }

    setView(newView){
        this.setState({view: newView})
    }

    getView(){
        const { view, cards } = this.state
        switch(view){
            case 'create-card':
                return <CreateCard addCard={this.addCard}/>;
            case 'review-cards':
                return <ReviewCards />;
            case 'view-cards':
                return <ViewCards cards={cards}/>;
            default:
                return null;
        }
    }

    addCard(card){
        const {cards} = this.state
        this.setState(
            {cards: cards.concat(card)},
            this.saveCards
        )
    }

    saveCards(){
        const {cards} = this.state
        localStorage.setItem('flash-cards', JSON.stringify(cards))
    }

    componentDidMount(){
        const cards = localStorage.getItem('flash-cards')
        if (cards){
            this.setState({cards: JSON.parse(cards) })
        }
    }

    render(){
        console.log('Local Storage:',localStorage.getItem('flash-cards'))
        console.log('waht')
        console.log('Cards From App:', this.state.cards)
        const {navItems} = this.props
        const {view} = this.state
        return(
            <div className='col-9'>
                <Nav setView={this.setView}
                    navItems={navItems}
                    view={view}/>
                { this.getView() }
            </div>
        )
    }
}
