import React from 'react';
import Todo from './Todo';


const TodoList = ({ todos , setTodos , filteredTodos }) => {
    return (
        <div class="todo-container">
      <ul class="todo-list"></ul>
      {filteredTodos.map((todo) => (
      <Todo 
      todo={todo} 
      key={todo.id} 
      text = {todo.text} 
      id={todo.id} 
      todos= {todos} 
      setTodos={setTodos}/>))}
    </div>
    )
}

export default TodoList;