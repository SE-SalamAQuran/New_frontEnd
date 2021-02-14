import React from "react";
import { Navbar } from "react-bootstrap";
import jsCookie from "js-cookie";
import "bootstrap/dist/css/bootstrap.min.css";

function ProfileHead() {
  let user = jsCookie.getJSON("user");
  return (
    <Navbar>
      <Navbar.Brand href="http://localhost:3000/">
        Navbar with text
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>Signed in as: {user.fname + " " + user.lname}</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default ProfileHead;
