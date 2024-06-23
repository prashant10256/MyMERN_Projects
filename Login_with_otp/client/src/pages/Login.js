import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/mix.css";

const Login = () => {

    const [email, setEmail] = useState("")
    console.log(email);

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
              <label htmlFor="email" >Email</label>
              <input
                type="email"
                name="email"
                id=""
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
              />
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
