import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/todo";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Formadd = () => {
    const [todo, setTodo] = useState("")
    const dispatch = useDispatch()
    const test = (todo.trim() === "")
    const handleSubmit = (e) => {
      if (!test) {
        //e.preventDefault()
        const newTodo = {
          id: Math.floor(Math.random() * 888888) + 100000,
          name: todo,
          isDone: false,
          // createAt: (new Date().toLocaleDateString())
  
        }
        dispatch(addTodo(newTodo))
        setTodo('')
        console.log(newTodo)
      } else {
        toast.warn("You should write something !", {
          position: toast.POSITION.TOP_CENTER,
          theme: "dark",
        });
        console.log("dfsdfs")
      }
  }
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
    return (
      <div>
        <div className='todoblock'>
          <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Add a new todo..." className='todo' onKeyPress={handleKeyPress}/>
          <button onClick={handleSubmit} className='add-btn'>Add</button>
        </div>
      </div>
    );
}

export default Formadd