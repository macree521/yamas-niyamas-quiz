import React from 'react';

export default function Form ({ userInput, onFormChange }) {
    const handleChange = (event) => {
        onFormChange(event.target.value)
    }

    return (
        <div className="inputForm">
            <form>
                <input type='text' 
                required value={userInput}
                onChange={handleChange}
                ></input>
                <input type='submit'></input>
            </form>
        </div>
    );
}