import React, { useState } from 'react'; // Import useState
import '../css/TodoInput.css';

export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props;


    return (
        <div className="todo-input">
            <input
                type="text"
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
                placeholder="Add a new todo"
            />
            <button
                onClick={() => {
                    handleAddTodos(todoValue);
                    setTodoValue(''); // Clear input after adding
                }}
            >
                Add
            </button>
        </div>
    );
}