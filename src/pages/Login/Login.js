import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Input from "../../components/Input";

const Login = () => {
  return (
    <Container width={390}>
      <Header title="Welcome back!" subtitle="Log in to continue." />

      <form className={styles.Form}>
        <div>
          <Input placeholder="Email" />
        </div>
        <div>
          <Input placeholder="Password" />
        </div>

        <Link to="/signup">Don't have an account? Sign up.</Link>

        <button type="submit">Log In</button>
      </form>
    </Container>
  );
};

export default Login;
