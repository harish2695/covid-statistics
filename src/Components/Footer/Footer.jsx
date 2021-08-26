import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 30,
            marginTop: "40px",
            textAlign: "center"
          }}
        >
          Created by{" "}
          <a
            href="https://github.com/harishgowdagangadkar/covid-statistics"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
            Harish K R
          </a>
        </h6>
      </div>

      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 16,
            marginTop: "20px",
            textAlign: "center"
          }}
        >
          React JS Project developed with HTML5,CSS3 and JavaScript
        </h6>
      </div>
    </React.Fragment>
  );
};

export default Footer;
