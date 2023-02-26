import React, { useContext, useRef } from "react";
import { loginCall } from "../apiCalls";
import "./Login.css";

import { AuthContext } from "../context/AuthContext";
export const Login = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    console.log(email.current.value);
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);
  return (
    <div id="login-form" class="login-page">
      <div class="form-box">
        <div class="form">
          <form class="login-form" onSubmit={handleClick}>
            <center>
              <h1 class="main-heading">Login Form</h1>
            </center>
            <input
              type="email"
              name="emailid"
              placeholder="user name"
              ref={email}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              ref={password}
            />
            <button>LOGIN</button>
          </form>
          <br />
          <a href="">frogot password ?</a>
          <br />
          <p>
            I don't have an account..
            <a href="http://localhost:3000/Signup">SignUp</a>
          </p>
        </div>
      </div>
    </div>
  );
};
