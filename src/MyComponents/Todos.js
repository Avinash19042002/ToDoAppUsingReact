import React from 'react'
import {TodoItem} from "./TodoItem"
export const Todos = (props) => {
  return (
    <div className="container">
     <h3 className="my-3">Your Todo List :</h3>
     {props.todos.length===0?"No more Todo": 
     props.todos.map((todo)=>{  
       return <TodoItem todo = {todo} key={todo.Task_No} onDelete = {props.onDelete}/>
     })
     }
     
    </div>
  )
}
