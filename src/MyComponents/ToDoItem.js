import React from 'react'
import nature from "./nature.jpg";
import stickey from "./stickey.png";
import './ToDos.css'

export const ToDoItem = ({todo, onDelete}) => {
  return (

    <div className="card container" style={{paddingBottom: "2.5rem",position:"relative", padding:"1rem",borderWidth: "0px"}}>
    <img src={stickey} className="card-img" alt="stickey note image"></img>
    <div className="card-img-overlay">
    <h4 style={{marginTop:"3rem",fontFamily:"Dancing Script"}}>{todo.title}</h4>
    <p style={{fontFamily:"Dancing Script"}}>{todo.desc}</p>
    <button className='btn btn-sm btn-danger' onClick={() => {onDelete(todo)}}>Delete</button>
    </div>
  </div>
  )
}
