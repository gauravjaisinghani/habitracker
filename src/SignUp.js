import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import './styles/Authstack.css';
import { Link } from "react-router-dom";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className= "authcontainer">
      <h1>Sign Up</h1>
      <form className="form" onSubmit={handleSignUp}>
          <input name="email" type="email" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
      <p className="bottomline">Already have an account? <Link to={"/login"}>Log In</Link></p>
    </div>
  );
};

export default withRouter(SignUp);
