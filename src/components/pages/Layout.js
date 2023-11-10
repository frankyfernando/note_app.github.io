import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css"

const linkStyle = {
  textDecoration : "none",
  color : "black",
  fontWeight : "bold"
}
function Layout() {
    const navigate = useNavigate()
    const handleClick = () => navigate("/")
    
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.navigate}>
          <ul className={styles.ul}>
            <li>
              <Link to="/layout/" style={linkStyle}>Calender</Link>
            </li>
            <li>
              <Link to="/layout/note" style={linkStyle}>Note</Link>
            </li>
            <li>
              <Link to="/layout/history" style={linkStyle}>History</Link>
            </li>
            <li>
                <button className={styles.button} onClick={handleClick}>Logout</button>
            </li>
          </ul>
        </div>
      </header>
      <Outlet/>
    </div>
  );
}
export default Layout;
