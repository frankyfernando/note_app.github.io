import { useState, React } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const[username, setUsername] = useState("")
  const[password, setPassword] = useState("")
  const navigate = useNavigate();
  const inputUsername = document.getElementById("inputUsername")
  const inputPassword = document.getElementById("inputPassword")
  const handleClick = (e) => {
    e.preventDefault();
    if(username === "admin" && password === "admin"){
      navigate("/layout")
    }
    else if(username === "admin" && password !== "admin"){
      inputPassword.className = styles.inputError
      inputUsername.className = styles.inputUsername
    }
    else if(username !== "admin" && password === "admin"){
      inputUsername.className = styles.inputError
      inputPassword.className = styles.inputPassword
    }
    else{
      inputUsername.className = styles.inputError
      inputPassword.className = styles.inputError
    }
      
    }
  
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleClick}>
        <div className={styles.login}>
          <h1>Login</h1>
          <div className={styles.input}>
            <input type="text" id="inputUsername" className={styles.inputUsername} placeholder="username" onChange={(e) => {setUsername(e.target.value)}} value={username}/>
            <input type="password" id="inputPassword" placeholder="password" className={styles.inputPassword} onChange={(e) => setPassword(e.target.value)} value={password}/>
          </div>
          <button type="submit" className={styles.button}>Login</button>
        </div>
      </form>
    </div>
  );
}
export default Login;
