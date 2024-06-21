import React from "react";
import "../styles/mix.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Log In</h1>
            <p>Hi, We are you glad you are back. Please login.</p>
          </div>
          <form>
            <div className="form_input">
              <lable htmlFor="email">Email</lable>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter your email address"
              ></input>
            </div>
            <button className="btn">Login</button>
            <p>Dont't have and account <NavLink to="/register">Sign up</NavLink></p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
