import React, { useState } from 'react'
import "./Post.css"
import { db, auth } from "../firebase";
import { collection, addDoc  } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const Post = () => {

  const navigate = useNavigate();

  const [postTitle, setPostTitle] = useState("")
  const [postText, setPostText] = useState("")
  const [count, setCount] = useState(0);


  const addPost = async () => {
    await addDoc(collection(db, "post"), {
      name: {
        username: auth.currentUser.displayName
      },
      title: postTitle,
      text: postText,
      createdAt: new Date()
    });
    
    navigate("/")
  }

  const textChange = (e) => {
    setPostText(e.target.value);
    setCount(e.target.value.length);
  }



  return (
    <div className='post'>
      <div className='post-container'>
        <h1>記事を投稿する</h1>
        <div className='inputPost'>
          <div>タイトル</div>
          <input type='text' placeholder='タイトルを記入'
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </div>
        <div className='inputPost'>
          <div>投稿</div>
          <textarea 
            placeholder='投稿内容を記入'
            onChange={textChange}
          ></textarea>
          <p className='count'>文字数: {count}</p>
        </div>
        <button className='postbtn' onClick={addPost} >投稿する</button>
      </div>
    </div>
  )
}

export default Post
