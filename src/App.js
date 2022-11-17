import React from "react";
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       <div className="header">
         <NavLink className="active" to="/">Home</NavLink>
         <NavLink className="active" to="/login">Login</NavLink>
         <NavLink className="active" to="/dashboard">Dashboard</NavLink>
       </div>
       <div className="content">
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/login" element={ <Login/>}/>
          <Route path="/dashboard" element= {<Dashboard/> }/>
        </Routes>
       </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
