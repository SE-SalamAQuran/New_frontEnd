import { React, useState } from "react";
import Head from "next/head";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Forms.module.css";
import Footer from "../components/Footer";
import axios from "axios";
import jsCookie from "js-cookie";

function Login() {
  const [state, setState] = useState({
    emailPhone: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setState((prev) => {
      if (name === "emailPhone") {
        return {
          emailPhone: value,
          password: prev.password,
        };
      } else if (name === "password") {
        return {
          emailPhone: prev.emailPhone,
          password: value,
        };
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const cred = {
      emailPhone: state.emailPhone,
      password: state.password,
    };
    axios
      .post("http://localhost:5000/users/login", cred)
      .then((res) => {
        window.location = "/";
        const token = res.data.token;
        jsCookie.set("token", token);
        let thisUser = res.data.decoded;
        jsCookie.set("user", JSON.stringify(thisUser));
      })
      .catch((err) => console.error("Error logging in!", err));
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#343a40" />
        <meta name="background-color" content="#888" />
        <meta
          name="description"
          content="Your number one app for real estate transactions"
        />
        <meta
          name="keywords"
          content="Real Estate, Lands, Apartments, Villas, Roofs, Sell/Buy/Rent"
        />
      </Head>

      <img
        className={styles.icon}
        src="https://img.icons8.com/pastel-glyph/50/000000/user-lock.png"
        alt="lock"
      />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={state.emailPhone}
            onChange={handleChange}
            type="email"
            name="emailPhone"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </Form.Group>
        <Button
          style={{
            justifyContent: "center",
            alignItem: "center",
            alignSelf: "center",
            marginTop: "6px",
          }}
          variant="dark"
          className={styles.button}
          type="submit"
        >
          Login
        </Button>
      </Form>

      <a href="http://localhost:3000/register" className={styles.link}>
        New user? Sign up for an account here
      </a>
      <Footer />
    </div>
  );
}
export default Login;
