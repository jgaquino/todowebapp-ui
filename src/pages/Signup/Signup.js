import axios from "axios";
import React, { useCallback, useState } from "react";
import styles from "./Signup.module.scss";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Input from "../../components/Input";
import useSetAuthToken from "../../auth/useSetAuthToken";
import { Link } from "react-router-dom";

const Signup = () => {
  const setAuthToken = useSetAuthToken();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = useCallback(async () => {
    try {
      const res = await axios.post("http://localhost:4000/signup", {
        fullname,
        email,
        password,
      });
      setAuthToken(res.data);
    } catch (error) {
      alert(error.response.data.error);
    }
  }, [fullname, email, password]);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      signUp();
    },
    [fullname, email, password]
  );

  return (
    <Container width={390}>
      <Header
        title="Welcome!"
        subtitle="Sign up to start using Simpledo today."
      />

      <form onSubmit={onSubmit} className={styles.Form}>
        <div>
          <Input
            type="text"
            placeholder="Full Name"
            onChange={(value) => setFullname(value)}
          />
        </div>
        <div>
          <Input placeholder="Email" onChange={(value) => setEmail(value)} />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Password"
            onChange={(value) => setPassword(value)}
          />
        </div>

        <Link to="/login">Do have an account? Sign in.</Link>

        <button type="submit">Sign Up</button>
      </form>
    </Container>
  );
};

export default Signup;
