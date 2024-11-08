import React from 'react'
import "./Login.css"
import { auth, provider } from "../firebase.js";
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Login = ({ setIsActive }) => {

  const navigate = useNavigate();

  const googleLogin = () => {
    //Googleログイン
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isActive", true)
        setIsActive(true)
        navigate("/")
      })
  }


  return (
    <div className='login'>
      <div className='login-container'>
        <div className='login-title'>
          <h2>ログイン</h2>
        </div>
        <div className='login-input'>
          <div className='username-input'>
            <p className='input-text'>ユーザー名</p>
            <input type='text'></input>
          </div>
          <div className='password-input'>
            <p>パスワード</p>
            <input type='text'></input>
          </div>
          <button className='login-btn'>ログイン</button>
          <p className='login-text'>または</p>
          <button onClick={googleLogin} className='google-button'>Googleでログイン</button>
        </div>
      </div>
    </div>

  )
}

export default Login