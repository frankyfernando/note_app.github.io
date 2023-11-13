import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";

const linkStyle = {
  textDecoration: "none",
  color: "black",
  fontWeight: "bold",
  margin: "30px",
};
function Layout() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.navigate}>
          <ul className={styles.ul}>
            <li>
              <Link to="/layout/" style={linkStyle}>
                Calender
              </Link>
            </li>
            <li>
              <Link to="/layout/acara" style={linkStyle}>
                Acara
              </Link>
            </li>
            <li>
              <Link to="/layout/createnote" style={linkStyle}>
                CreateNote
              </Link>
            </li>
            <li>
              <button className={styles.button} onClick={handleClick}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
export default Layout;
