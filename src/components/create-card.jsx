import React, { Component } from 'react'

export default class CreateCard extends Component {
    constructor(props){
        super(props)
        this.submitHandler = this.submitHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
        this.reset = this.reset.bind(this)
        this.state = {
            question: '',
            answer: ''
        }
    }
    changeHandler(e){
        const {value, classList} = e.target
        if(classList.contains('answer')){
            this.setState({answer: value})
            return
        }
        if(classList.contains('question')){
            this.setState({question: value})
        }
    }
    submitHandler(e){
        e.preventDefault()
        const { addCard } = this.props
        const {answer, question } = this.state
        const newCard = {
            question: question,
            answer: answer
        }
        addCard(newCard)
        this.reset(e)
    }

    reset(e){
        e.preventDefault()
        this.setState({
            question: '',
            answer: ''
        })
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Create New Card</h1>
                <form onSubmit={this.submitHandler} onReset={this.reset}>
                    <div className="form-group">
                        <label htmlFor="question">Question:</label>
                        <textarea type="text"
                        className="form-control question"
                        id="question"
                        placeholder="Enter new question"
                        value={this.state.question}
                        onChange={this.changeHandler}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="answer">Answer:</label>
                        <textarea type="text"
                        className="form-control answer"
                        id="answer"
                        placeholder="Answer..."
                        value={this.state.answer}
                        onChange={this.changeHandler}/>
                    </div>
                    <button type="submit" className="btn btn-primary mr-1">Submit</button>
                    <button type="reset" className="btn btn-primary">Reset</button>
                </form>
            </div>
        )
    }
}
