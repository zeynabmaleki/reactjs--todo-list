import { useState, useEffect } from 'react'
import './css/App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

function persistData(newList) {
  localStorage.setItem('todos', JSON.stringify({ todos: newList }))
}


  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodos(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodos(index)
  }

  useEffect(() => { 
    if(!localStorage){
      return
    }
    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }

    localTodos= JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <div className='App'>
      <div className="todo-app">
        <h1>Todo List</h1>

        <TodoInput
          todoValue={todoValue}
          setTodoValue={setTodoValue}
          handleAddTodos={handleAddTodos} />

        {todos.length === 0 ? (
          <p className="no-todos">No todos yet...</p>
        ) : (
          <TodoList
            handleDeleteTodos={handleDeleteTodos}
            handleEditTodos={handleEditTodos}
            todos={todos} />
        )}

      </div>

      <div className="footer">
        <p>Made with ❤️ by Your Name</p>
      </div>
    </div>
  )
}

export default App
