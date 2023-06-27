import React from "react";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_child_1}>
        <span
          style={{ fontWeight: "bold", fontSize: "small", color: "#151515" }}
        >
          Company, Inc.
        </span>
        <span className={styles.navbar_tag}>initial setup</span>
      </div>

      <div className={styles.navbar_child_2}>
        <div>
          <p style={{ fontSize: "small", color: "#42434d" }}>Kenny Xin</p>
          <p style={{ fontSize: "small", color: "#6f718a" }}>Kenny@xin.com</p>
        </div>
        <div className={styles.user_avatar}>kx</div>
      </div>
    </nav>
  );
};

export default Navbar;
