import React, {useState, useEffect} from 'react'
import "./Login.css"
import gengar from "../img/login-gengar.png"

const Login = (props) => {

    const [values, setValues]=useState({
        username:"",
        password:""
    })

    const handleChange=(e)=>{
        
        setValues({...values, [e.target.name]:e.target.value});

        const newValues = { ...values, [e.target.name]: e.target.value };
    setValues(newValues);

    // Generate a unique key for this set of values
    const key = Date.now().toString(); // using timestamp as key

    // Get stored values from localStorage
    const storedValues = JSON.parse(localStorage.getItem("loginData")) || {};

    // Check if this set of values is different from the last stored values
    if (
        storedValues[key]?.username !== newValues.username ||
        storedValues[key]?.password !== newValues.password
    ) {
        // If values are different, store them with a unique key
        const newData = { ...storedValues, [key]: newValues };
        localStorage.setItem("loginData", JSON.stringify(newData));
        console.log("Stored values:");
    console.log(newData);
    }

    
        
        
        
    }

    const username=localStorage.getItem("username");
    const password=localStorage.getItem("password")

    useEffect(() => {
        localStorage.setItem("username", values.username);
        localStorage.setItem("password", values.password);

    }, [values.username, values.password])
    return (
      
      <div className="login-form">

          <form className="form">
              <img src={gengar}></img>
              <span>Create Account</span>
              <input type="text" placeholder="Username" value={values.username} name="username" className="input" onChange={handleChange}></input>
              <input type="password" placeholder="Password" name="password" value={values.password} className="input" onChange={handleChange}></input>

              <button disabled={values.username===""} onClick={props.login}>Log In</button>
          </form>
      </div>
      
  )
}

export default Login