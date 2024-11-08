import React from 'react'
import "./Logout.css"
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsActive }) => {

  const navigate = useNavigate();

  const googleLogout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsActive(false);
      navigate("/login")
    }).catch((error) => {
    });
  }
  return (
    <div className='logout'>
      <div className='logout-container'>
        <div className='logout-title'>
          <h2>ログアウト</h2>
        </div>
          <p className='logout-text'>ログアウトしますか？</p>
          <button onClick={googleLogout} className='logout-button'>ログアウト</button>
      </div>
    </div>
  )
}

export default Logout