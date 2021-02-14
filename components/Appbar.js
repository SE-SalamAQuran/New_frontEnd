import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Nav.module.css";
import jsCookie from "js-cookie";

export default function Appbar() {
  function isLogged() {
    return jsCookie.getJSON("user") == null ? false : true;
  }

  function LoggedUser() {
    let user = jsCookie.getJSON("user");
    return (
      <Nav.Link className={styles.link} href="http://localhost:3000/profile">
        {user.fname + " " + user.lname}
      </Nav.Link>
    );
  }
  function Guest() {
    return <Nav.Link href="http://localhost:3000/login">Login</Nav.Link>;
  }

  function Greeting() {
    if (isLogged) {
      return <LoggedUser></LoggedUser>;
    } else {
      return <Guest></Guest>;
    }
  }

  return (
    <div id={styles.appBar}>
      <Navbar expand="xl" bg="dark" variant="dark">
        <Navbar.Brand href="http://localhost:3000/">
          <img
            src="https://img.icons8.com/wired/50/ffffff/real-estate.png"
            alt="logo"
            className={styles.logo}
          />{" "}
          Palestinian Estates
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link className={styles.link} href="http://localhost:3000/lands">
            Lands
          </Nav.Link>
          <Nav.Link className={styles.link} href="http://localhost:3000/villas">
            Villas
          </Nav.Link>
          <Nav.Link className={styles.link} href="http://localhost:3000/roofs">
            Roofs
          </Nav.Link>
          <Nav.Link
            className={styles.link}
            href="http://localhost:3000/apartments-rent"
          >
            Apartments for Rent
          </Nav.Link>
          <Nav.Link
            className={styles.link}
            href="http://localhost:3000/apartments-sale"
          >
            Apartments for Sale
          </Nav.Link>
          <Navbar.Text>
            <Greeting></Greeting>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
