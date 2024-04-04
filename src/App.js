
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {AddToDo} from "./MyComponents/AddToDo";
import {Footer} from "./MyComponents/Footer";
import React, { useState } from 'react';
function App() {
  const onDelete=(todo)=>{
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }))
  }

  const addToDo=(title,desc)=>{
    console.log('I am adding Todo ',title,desc);
    let task_no=todos.length+1;
    let myTodo={
      Task_No: task_no,
      Title: title,
      Description: desc
    }
    console.log(myTodo);
    setTodos([...todos,myTodo]);
  }
   const[todos,setTodos]=useState([
    {
      Task_No : "task_1",
      Title : "Prepare for EndSem",
      Description : "Study Deep Learning & Soft Computing for Endsem"
    },
    {
      Task_No : "task_2",
      Title : "Prepare for Onboarding Test",
      Description : "Revise Advanced Java and Microsoft SQl server"
    },
    {
      Task_No : "task_3",
      Title : "Complete Final year Project",
      Description : "Go regularly for meet with monidipa"
    }
   ]);
  return (
   <>
    <Header title="To-Do-App"searchbar = {true}/>
    <AddToDo addToDo={addToDo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
   </>
  );
}

export default App;
