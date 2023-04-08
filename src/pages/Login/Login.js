import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Input from "../../components/Input";
import axios from "axios";
import useSetAuthToken from "../../auth/useSetAuthToken";

const Login = () => {
  const setAuthToken = useSetAuthToken();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        const res = await axios.post("http://localhost:4000/login", {
          email,
          password,
        });
        setAuthToken(res.data);
      } catch (error) {
        alert(error.response.data.error);
      }
    },
    [email, password]
  );

  return (
    <Container width={390}>
      <Header title="Welcome back!" subtitle="Log in to continue." />

      <form onSubmit={onSubmit} className={styles.Form}>
        <div>
          <Input
            type="email"
            placeholder="Email"
            onChange={(value) => setEmail(value)}
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Password"
            onChange={(value) => setPassword(value)}
          />
        </div>

        <Link to="/signup">Don't have an account? Sign up.</Link>

        <button type="submit">Log In</button>
      </form>
    </Container>
  );
};

export default Login;
