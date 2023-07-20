import './App.css';
import { Header } from './MyComponents/Header';
import { ToDos } from './MyComponents/ToDos';
import { Footer } from './MyComponents/Footer';
import { AddToDo } from './MyComponents/AddToDo';
import { useEffect, useState } from 'react';
import { About } from './MyComponents/About';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {

  let initTodo;

  (localStorage.getItem("todos") == null) ? initTodo = [] : initTodo = JSON.parse(localStorage.getItem("todos"))

  // console.log("hi",localStorage.getItem("todos"))
  console.log("hello")

  const onDelete = (todo) => {
    console.log("i am a delete functikon of todo", todo)

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addtodo = (title, desc, e) => {
    // let x=e.title;
    console.log("hi")
    let sno;
    (todos.length == 0) ? (sno = 0) : (sno = todos[todos.length - 1].sno + 1)

    const mytodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, mytodo])
    console.log("todos", setTodos)





  }
  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <div className="App" style={{ position: "relative", minHeight: "100vh" }}>

      <BrowserRouter>
        <Header title="MytodosList"></Header>
        <Routes>
          <Route exact path="/" element={[<AddToDo style={{ position: "relative", top: "500px"  }} addtodo={addtodo} todos={todos}></AddToDo>, <ToDos todos={todos} onDelete={onDelete}></ToDos> ]} />

          <Route exact path="/about" element={<About />} />

        </Routes>

        <Footer></Footer>

      </BrowserRouter>

    </div>
  );
}

export default App;
