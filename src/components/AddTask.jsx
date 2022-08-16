import { useState } from 'react';
import "../styles/AddTask.css";
import React from "react";
import { v4 as uuidv4 } from 'uuid';
 
function AddTask (props) {
    
    const [input, setInput] = useState('');
    
    const writing = e => {
        setInput(e.target.value);
    }

    const submit = e => {
        e.preventDefault();
        const newTask = {
            id: uuidv4(),
            text: {input},
            completed: false
        }
        
        props.onSubmit(newTask);
        setInput('');
    }

    return (
        <form 
            className='task-form'
            onSubmit={submit}>
            <input 
                className='task-input'
                type='text'
                placeholder='Enter product...'
                name="text"
                onChange={writing}
                value={input}
            />
            <button className='task-btn'>Add Product</button>
        </form>
    );
}

export default AddTask;