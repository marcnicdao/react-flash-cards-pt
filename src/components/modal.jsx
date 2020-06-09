import React, {Component} from 'react'

export default class Modal extends Component{
    render(){
        const {card, isShown, cancelDelete, deleteCard} = this.props
        const display = isShown ? '' : ' d-none'
        return(
            <div className={`delete-modal${display}`}>
                <div className="inner-modal">
                    <h4>Are you sure want to delete this card?</h4>
                    <div>
                        <b>Q:</b>{card.question}
                    </div>
                    <div>
                        <b>A:</b>{card.answer}
                    </div>
                    <button onClick={()=>{
                        deleteCard();
                        cancelDelete()
                        }}>Confirm</button>

                    <button onClick={cancelDelete}>Cancel</button>
                </div>
            </div>
        )
    }
}
