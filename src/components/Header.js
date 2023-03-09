import React, {useState} from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import poke from "../img/pokemon-logo4.png"
import magic from "../img/magic.jpeg"

const Header = () => {
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const logout = () => {
    localStorage.removeItem("username");
    setUsername(null);
  }
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/"><img src={poke} className="header-images" alt="Pokemon logo" /></Link>
      </div>
      <div className="navbar-right">
      {username && <div className="account">{username}</div>}
        {username && <button onClick={logout}>Logout</button>}
      </div>
    </nav>
  )
}

export default Header