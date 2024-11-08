import React, { useEffect, useState } from 'react'
import "./Home.css"
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from "../firebase";

const Home = () => {

  const [docList, setDocList] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(collection(db, "post"));
      const sortedDocs = data.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .sort((a, b) => b.createdAt.toDate() - a.createdAt.toDate()); 
      setDocList(sortedDocs); 
    };
    getPost();
  }, []);
  

  const deletelist = async (id) => {
    await deleteDoc(doc(db, "post", id));
    window.location.href = "/";
  }

  return (

    <div className='home'>
      {docList.map((list) => {
        return (
          <div className="postContents" key={list.id}>
            <div className="postHeader">
              <h3>{list.title}</h3>
            </div>
            <div className="postText">{list.text}</div>
            <div className="namedelete">
              <h3 className='username'>@{list.name.username}</h3>
              {/* {list.name.id === auth.currentUser?.uid && (
                <button onClick={() => deletelist(list.id)}>削除</button>
              )} */}
              <p className='date-text'>{list.createdAt?.toDate().toLocaleString()}</p>
              <button onClick={() => deletelist(list.id)}>削除</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home