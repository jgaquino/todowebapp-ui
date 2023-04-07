import React from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.scss";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Input from "../../components/Input";

const Signup = () => {
  return (
    <Container width={390}>
      <Header
        title="Welcome!"
        subtitle="Sign up to start using Simpledo today."
      />

      <form className={styles.Form}>
        <div>
          <Input placeholder="Full Name" />
        </div>
        <div>
          <Input placeholder="Email" />
        </div>
        <div>
          <Input placeholder="Password" />
        </div>

        <Link to="/login">Do have an account? Sign in.</Link>

        <button type="submit">Sign Up</button>
      </form>
    </Container>
  );
};

export default Signup;
