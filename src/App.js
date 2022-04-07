
import React from 'react';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Chatbot from './Components/Chatbot/Chatbot';
import Prev_Queries from './Prev_Queries';
import Profile_Edit from './Profile_Edit';
import { Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
    <Navbar></Navbar>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/chatbot' element={<Chatbot/>}/>
        <Route path='/profile_edit' element={<Profile_Edit/>}/>
        <Route path='/prev_queries' element={<Prev_Queries/>}/>
      </Routes>
      
    
    </>
  );
}

export default App;