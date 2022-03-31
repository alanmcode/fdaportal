import React from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Chatbot from './Chatbot';
import { Route, Routes, BrowserRouter as Router, Switch,  Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Button from './Components/Button';
import Header from './Components/Header';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Home> </Home>

      <Link to = "/">Home</Link><br></br>
      <Link to = "/login">Login</Link><br></br>
      <Link to = "/dashboard">Dashboard</Link><br></br>
      <Link to = "/chatbot">Chatbot</Link><br></br>
    
      
    </>
  );
}

export default App;
