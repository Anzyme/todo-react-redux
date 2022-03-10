import React from 'react'
import TodoItem from '../item/TodoItem';
import { useSelector } from 'react-redux';

export default function TodoList() {
  const todos = useSelector((state) => state.todos); //Recup les données du store et les assigne à notre const todos

  return (
    <ul className='list-group'>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed}/>
      })}
      </ul>
  )
}
