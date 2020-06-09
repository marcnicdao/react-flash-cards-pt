import React, { Component } from 'react'
import Modal from './modal'

export default class ViewCards extends Component {
    constructor(props){
        super(props)
        this.state = {
            isModalShown: false,
            cardToDelete: {}
        }
        this.cancelDelete = this.cancelDelete.bind(this)
    }

    showDeleteModal(index) {
        const { cards, setActiveCard } = this.props
        const card = cards[index]
        this.setState({
            isModalShown: true,
            cardToDelete: card
        },
        setActiveCard(index)
        )
    }

    cancelDelete(){
        this.setState({ isModalShown: false })
    }
    render() {
        const { cards, deleteCard } = this.props
        const {isModalShown, cardToDelete} = this.state
        const cardList = cards.map((card, index)=>{
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
                        <div className="card-footer" onClick={()=>this.showDeleteModal(index)}>
                            <i className="far fa-trash-alt"></i>
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
                <Modal isShown={isModalShown}
                        card={cardToDelete}
                        cancelDelete={this.cancelDelete}
                        deleteCard={deleteCard}/>
            </div>
        )
    }
}
