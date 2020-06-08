import React, { Component } from 'react'

export default class CreateCard extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center">Create New Card</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="question">Question:</label>
                        <textarea type="text"
                        class="form-control"
                        id="question"
                        placeholder="Enter new question"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="answer">Answer:</label>
                        <textarea type="email"
                        class="form-control"
                        id="answer"
                        placeholder="Answer..."/>
                    </div>

                </form>
            </div>
        )
    }
}
