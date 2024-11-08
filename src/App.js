import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Post from './components/Post';
import Login from './components/Login';
import Logout from './components/Logout';
import { useState } from 'react';
import Header from './components/Header';


function App() {

  const [ isActive, setIsActive ] = useState(localStorage.getItem("isAuth"));

  return (
    <div className='app'>
      <Router>
        <Header/>
        <div className='flex'>
          <Nav isActive={isActive}/>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/post' element={<Post />}></Route>
            <Route path='/login' element={<Login setIsActive={setIsActive}/>}></Route>
            <Route path='/logout' element={<Logout setIsActive={setIsActive}/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>


  );
}

export default App;
