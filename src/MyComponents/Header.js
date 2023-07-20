import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg p-1" style={{position:"relative",width:"100%",backgroundColor:"#222831"}}>
  <div className="container-fluid" >
    <Link className="navbar-brand" to="/" style={{color:"white"}}>{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={{color:"white"}}>Home</Link>
        </li>
        <li className="nav-item" >
          <Link className="nav-link active" aria-current="page" to="/about" style={{color:"white"}}>About</Link>
       </li>
        </ul>
        </div>
        
        <form className="d-flex" >
       
        <input className="form-control" type="search" placeholder="Search" aria-label="Search" style={{marginRight:"5px",height:"35px"}}></input>
        <button className="btn btn-sm btn-outline-success" type="submit" style={{marginLeft:"5px",height:"35px"}}>Search</button>
        </form>
     
      
     
     
    
    
  </div>
</nav>
  )
}
