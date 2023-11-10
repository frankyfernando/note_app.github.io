import { useState, React } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const[username, setUsername] = useState("")
  const[password, setPassword] = useState("")
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    if(username === "admin" && password === "admin"){
      navigate("/layout")
    }
    else{
      alert("Login Gagal")
    }
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handleClick}>
        <div className={styles.login}>
          <h1>Login</h1>
          <div className={styles.input}>
            <input type="text" className={styles.inputUsername} placeholder="username" onChange={(e) => {setUsername(e.target.value)}} value={username}/>
            <input type="password" placeholder="password" className={styles.inputPassword} onChange={(e) => setPassword(e.target.value)} value={password}/>
          </div>
          <button type="submit" className={styles.button}>Login</button>
        </div>
      </form>
    </div>
  );
}
export default Login;
