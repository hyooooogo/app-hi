import React from 'react'
import "./Nav.css"
import { Link } from "react-router-dom";

const Nav = ({ isActive }) => {
    return (
        <nav className='navbar'>
            <div>
                <Link to="/">
                    <h2>ホーム</h2>
                </Link>
            </div>
            <div>
                <h2>プロフィール</h2>
            </div>
            <div>
                <Link to="/post">
                    <h2>投稿する</h2>
                </Link>
            </div>

            <div>
                {isActive ?
                    <Link to="/logout">
                        <h2>ログアウト</h2>
                    </Link>
                    :
                    <Link to="/login">
                        <h2>ログイン</h2>
                    </Link>
                }
            </div>

            <div className='more'>
                <h2>もっと見る</h2>
            </div>


        </nav>
    )
}

export default Nav