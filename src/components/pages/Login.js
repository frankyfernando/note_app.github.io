import { useState, React } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
function Login() {
  const[username, setUsername] = useState("")
  const[password, setPassword] = useState("")
  const navigate = useNavigate();
  const handleClick = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3031",{username, password})
      const token = response.data.token
      localStorage.setItem("token", token)
      navigate("/layout/")
    } catch (err) {
      console.log("Login gagal", err.message)
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
            <p>Tidak punya akun? <Link to="/signup">Register Here</Link></p>
          </div>
          <button type="submit" className={styles.button}>Login</button>
        </div>
      </form>
    </div>
  );
}
export default Login;
