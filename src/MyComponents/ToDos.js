import React from 'react'
import {ToDoItem} from './ToDoItem'
import './ToDos.css'

export const ToDos = (props) => {

    return (
        <div className='container' style={{maxWidth:"100%",position:"relative",top:"1rem",paddingTop:"1rem",minHeight:"42vh"}}>
            <h2 className='text-center' style={{fontFamily:"Dancing Script,sans-serif",textDecoration:"underline"}}>To Dos List</h2>
            {props.todos.length ==0 ? "No todos in the bucket" :
                props.todos.map((todo) => {
                return (<div style={{display:"inline-block", margin:"1rem", width:"15rem" }}> <ToDoItem key={todo.sno} todo={todo}  onDelete={props.onDelete}></ToDoItem> </div>)
            })}
        </div>
    )
}