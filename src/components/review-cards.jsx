import React, { Component } from 'react'

export default class ReviewCards extends Component {
    constructor(props){
        super(props)
        this.state={
            isFrontShown : true
        }
        this.nextCard = this.nextCard.bind(this)
        this.previousCard = this.previousCard.bind(this)
        this.flipCard = this.flipCard.bind(this)
    }
    componentDidMount(){
        this.props.setActiveCard(0)
    }

    nextCard(){
        const { activeCard, cards } = this.props.appState
        const nextIndex = activeCard < cards.length - 1 ? activeCard + 1 : 0
        this.props.setActiveCard(nextIndex)
        this.setState({ isFrontShown: true })
    }

    previousCard() {
        const { activeCard, cards } = this.props.appState
        const previousIndex = activeCard > 0 ? activeCard - 1 : cards.length - 1
        this.props.setActiveCard(previousIndex)
        this.setState({isFrontShown: true})
    }

    flipCard(e){
        if (e.target.classList.contains('arrow')){
            return
        }
        this.setState({isFrontShown: !this.state.isFrontShown})
    }

    render() {
        const { isFrontShown } = this.state
        const { activeCard, cards } = this.props.appState
        const card =  cards[activeCard]
        let face
        let faceClass
        if (isFrontShown){
            face = 'question'
            faceClass = ' bg-dark'
        } else {
            face = 'answer'
            faceClass = ' bg-info'
        }
        return (
            <div className="d-flex align-items-center flex-column">
                <h1 className="text-center">Review Cards</h1>
                <div onClick={this.flipCard} className={`px-5 d-flex justify-content-center align-items-center review-container${faceClass}`}>
                    <i className="fas fa-3x fa-chevron-left left arrow" onClick={this.nextCard}></i>
                    <h4>{card[face]}</h4>
                    <i className="fas fa-3x fa-chevron-right right arrow" onClick={this.previousCard}></i>
                </div>
            </div>
        )
    }
}
