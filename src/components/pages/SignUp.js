import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";
import axios from "axios"
function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate()
  const handleClick = async(e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3031/signup", {username, password, confirmPassword})
    console.log(response)
    navigate("/")
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleClick}>
        <div className={styles.signup}>
          <h1>Sign Up</h1>
          <div className={styles.input}>
            <input
              type="text"
              id="inputUsername"
              className={styles.inputUsername}
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <input
              type="password"
              id="inputPassword"
              placeholder="password"
              className={styles.inputPassword}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <input
              type="password"
              placeholder="confirm password"
              className={styles.inputPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
            <p className={styles.switch}>
              Sudah punya akun? <Link to="/">Login</Link>
            </p>
          </div>
          <button type="submit" className={styles.button}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
