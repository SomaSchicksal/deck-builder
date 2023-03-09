import Header from "./components/Header"
import Content from "./components/Content"
import './App.css';


import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import back1 from "./img/background1.jpg"
import React, {useState} from "react"
import DataContext from "./context/DataContext";
import Login from "./components/Login";
import Deckbuilder from './components/Deckbuilder';



function App() {

  const [loggedIn, setLoggedIn]=useState(false)

  const logged=()=>{
    setLoggedIn(true)
  }
  return (
    <Router>
      {/*{loggedIn ? (*/}
        <div className="App" >
        <Header></Header>
        
        <div className="main-content">
          
          <Routes>
            <Route path="/" element={<Deckbuilder></Deckbuilder>}></Route>
            
          </Routes>
        </div>

      </div>
      {/*}): <Login login={logged}></Login>} */}
    </Router>
  );
}

export default App;
