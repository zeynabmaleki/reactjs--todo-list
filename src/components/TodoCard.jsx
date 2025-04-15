import React from 'react'
import '../css/TodoCard.css';

export default function TodoCard(props) {
    const { children, handleDeleteTodos, handleEditTodos, index } = props
    return (
        <li className='todo-item' >
            {children}
            <div className='action-container'>

                <button onClick={() => handleEditTodos(index)}>
                    <i class="fa-solid fa-pen"></i>
                </button>

                <button onClick={() => handleDeleteTodos(index)}>
                    <i class="fa-solid fa-x"></i>
                </button>

            </div>
        </li>
    )
}
