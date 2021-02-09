import React from 'react';

export default function Form ({ userInput, onFormChange, onFormSubmit }) {
    const handleChange = (event) => {
        onFormChange(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onFormSubmit()
    }

    return (
        <div className="inputForm">
            <form onSubmit={handleSubmit}>
                <input type='text' 
                required value={userInput}
                onChange={handleChange}
                ></input>
                <input type='submit'></input>
            </form>
        </div>
    );
}