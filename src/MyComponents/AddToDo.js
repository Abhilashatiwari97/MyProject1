import React, { useState } from 'react'
import sky2 from './sky2.jpg'
import './ToDos.css'

export const AddToDo = (props) => {

  const [title, setTitle] =  useState("")
  const [desc, setDesc] = useState("")

  const submit = (e) =>{
    e.preventDefault();
    if(!title || !desc){
      alert("Title or Description cannot be empty")
    }
    
      else{
   
    props.addtodo(title,desc)
    // props.todos.map((ele)=>ele.title==title?alert("elements cant be same"):props.addtodo(title,desc))
    setDesc("");
    setTitle("");
    }
  }

  return (
    <div className='container' style={{position:"relative",top:"1rem",minHeight:"44vh",border:"solid 1px black",backgroundImage: 'url(' + require('./sky2.jpg') + ')',  backgroundPosition:'center',backgroundSize: 'cover', backgroundColor: "#cccccc"}}>
   {/* <img src={sky2} alt="Snow" style={{width:"100%",position:"absolute",left:"0",height:"44vh"}}></img> */}
    <form className="form-control" style={{border:"none",background:"none"}} onSubmit={submit}>
    <h3 style={{fontFamily:"Dancing Script",color:"white",textDecorationLine:"underline"}} >Add a ToDo</h3>
  <div className="mb-3">

    <label htmlFor="title" className="htmlForm-label" style={{display:"grid",textAlign:"center",marginBottom:"5px"}}>What you want to do?</label>
    <input type="text" className="form-control" value={title} style={{width:"20rem",textAlign:"center",display:"inline"}} onChange={(e) => {setTitle(e.target.value)}}  id="title" aria-describedby="emailHelp"></input>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label" style={{display:"grid"}}>Describe your activity</label>
    <input type="text" className="form-control" value={desc}  style={{width:"20rem",display:"inline"}} onChange={(e) => {setDesc(e.target.value)}} id="desc"></input>
  </div>
 
  <button type="submit" className="btn btn-sm btn-success" style={{marginTop:"1rem",marginBottom:"2px"}}  >+Add To Do</button>
</form>
</div>
  )
}
