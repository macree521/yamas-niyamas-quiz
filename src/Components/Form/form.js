import React from 'react';

export default function Form ({ userInput }) {
    const handleChange = (event) => {
        console.log(event.target.value)
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