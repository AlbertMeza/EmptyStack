import React from 'react';
import { useState } from 'react';

{/* const LoginPage = (props) => { */}
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e) {
    this.props.onUsernameChange(e.target.username);
    this.props.onIsInstructorChange(e.target.is_instructor);
    this.props.onSessionObjChange(e.target.session_obj);
  }

  // let [usernameee, setUsername] = useState(null);

  // function handleSubmit(e) {
  //   setUsername(e.currentTarget.username.value);
  // }

  render() {

    const username = this.props.username;
    const isInstructor = this.props.isInstructor;
    const sessionObj = this.props.sessionObj;

    return (
          <>
    {/*[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]*/}
    {/*[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]*/}
    {/*[if IE 8]>         <html class="no-js lt-ie9"> <![endif]*/}
    {/*[if gt IE 8]>      <html class="no-js"> <!--<![endif]*/}
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <title />
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />
    <link rel="stylesheet" href="./login.css" />
    {/*[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
    <![endif]*/}
    <div className="container">
      <div
        className="row align-items-center  justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="col-md-4" />
        <div className="col-md-4  justify-content-center">
          {/*BOOTSTRAP FORM*/}
          <form method="post" action="http://localhost:3001/users/login" onSubmit={this.handleChange} >
            {/* Email input */}
            <div className="form-outline mb-4">
              <input
                type="text"
                id="form2Example1"
                className="form-control"
                name="username"
                username={username}
              />
              <label className="form-label" htmlFor="form2Example1">
                Username
              </label>
            </div>
            {/* Password input */}
            <div className="form-outline mb-4">
              <input
                type="password"
                id="form2Example2"
                className="form-control"
                name="password"
              />
              <label className="form-label" htmlFor="form2Example2">
                Password
              </label>
            </div>
            {/* 2 column grid layout for inline styling */}
            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                {/* Checkbox */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="form2Example31"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="form2Example31">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>
              <div className="col">
                {/* Simple link */}
                <a href="#!">Forgot password?</a>
              </div>
            </div>
            {/* Submit button */}
            <button type="submit" className="btn btn-primary btn-block mb-4">
              Sign in
            </button>
            {/* Register buttons */}
            <div className="text-center">
              <p>
                Not a member? <a href="/register">Register</a>
              </p>
              <p>or sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f" />
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google" />
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter" />
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github" />
              </button>
            </div>
          </form>
          {/*BOOTSTRAP FORM*/}
        </div>
        <div className="col-md-4" />
      </div>
    </div>
    {/*BOOTSTRAP JS IMPORT*/}
    {/*BOOTSTRAP JS IMPORT*/}
  </>
      )
  }
}
  
 export default LoginPage