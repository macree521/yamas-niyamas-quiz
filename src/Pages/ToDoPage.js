import React, { useState, useEffect } from 'react';

import Card from '../Components/card';
import Form from '../Components/Form/form';

export default function ToDoPage () {
    const [todo, setTodo] = useState([])
    const [addTodo, setAddTodo] = useState('')

    useEffect(() => {
        fetch('/api').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => setTodo(data))
    },[])

    return (
        <div>
            <Form userInput={addTodo}/>
            <Card listOfTodos={todo}/>
        </div>
    );
}

// respone.data.map() 
// return (
//     <div>
//         <Card todo={todo}/>
//     </div>
// )

//console.log("response data", response)
            // return response.map() 

            // if(response.data.map()){
            //     return response.json()
            // }