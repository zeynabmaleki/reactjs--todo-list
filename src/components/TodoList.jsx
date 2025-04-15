import React from 'react'
import TodoCard from './TodoCard'
import '../css/TodoList.css'

export default function TodoList(props) {
    const { todos } = props

    return (
        <ul className="todo-list">
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard {...props}
                        key={todoIndex}
                        index={todoIndex}>{todo}</TodoCard>
                )
            })}
        </ul>
    )
}
