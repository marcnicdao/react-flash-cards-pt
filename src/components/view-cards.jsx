import React, { Component } from 'react'

export default class ViewCards extends Component {
    render() {
        const { cards } = this.props
        const cardList = cards.map((card)=>{
            return(
                <div key={card.question} className='col mb-4 card-group'>
                    <div className="rounded-lg card h-100 text-center bg-dark text-white m-2"
                        >
                        <h5>Question:</h5>
                        <p>{card.question}</p>
                        <div className="card-body bg-info">
                            <h5>Answer:</h5>
                            <p>{card.answer}</p>
                        </div>
                    </div>
                </div>

            )
        })
        return (
            <div>
                <h1 className="text-center">My Cards</h1>
                <div className="row row-cols-4 row-cols-md-4">
                    {cardList}
                </div>

            </div>
        )
    }
}
