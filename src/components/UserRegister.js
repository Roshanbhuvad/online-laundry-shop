import React, { Component } from 'react'
import { register } from './UserFunction'
import validate from 'react-joi-validation';
import Joi from "joi-browser";

 const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

 const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};


class UserRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      phoneNumber: null,
      password: null,
      role: null,
      geometry: null,
      formErrors: {
      nameError: '',
      emailError: '',
      phoneNumberError: '',
      passwordError: ''
      }
};
}
handleSubmit = (e) => {
    e.preventDefault()
        if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
         Name: ${this.state.name}
         Email: ${this.state.email}
        password: ${this.state.password}
        phoneNumber: ${this.state.phoneNumber}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      phoneNumber: this.state.phoneNumber,
      role: this.state.role,
      geometry: this.state.geometry,
    }

    register(newUser).then(res => {
      this.props.history.push(`/user/logincustomer`)
    })
  };
   handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "name":
        formErrors.nameError =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "password":
        formErrors.passwordError =
          value.length < 5 ? "minimum 5 characaters required" : "";
        break;
      case "email":
        formErrors.emailError = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "phoneNumber":
        formErrors.phoneNumberError =
          value.length < 10 ? "minimum 10 characaters required" : "";
        break;
        default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };


  render() {
    const { formErrors } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.handleSubmit}>
              <h1 className="h3 mb-3 font-weight-normal" className="font-weight-bold text-primary">Register</h1>
              <div className="form-group">
                <label htmlFor="name" className="font-weight-bold text-danger">Name</label>
                <input
                className={formErrors.nameError.length > 0 ? "error" : null}
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter your name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 20, color: "red" }}>
            {this.state.nameError}
                {formErrors.nameError.length > 0 && (
                <span className="errorMessage">{formErrors.nameError}</span>
              )}
              </div>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="font-weight-bold text-danger">Email</label>
                <input
                 className={formErrors.emailError.length > 0 ? "error" : null}
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Enter your email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 20, color: "red" }}>
            {this.state.emailError}
                {formErrors.emailError.length > 0 && (
                <span className="errorMessage">{formErrors.emailError}</span>
              )}
              </div>
              </div>
                   <div className="form-group">
                <label htmlFor="phoneNumber" className="font-weight-bold text-danger">Mobile Number</label>
                <input
                className={formErrors.phoneNumberError.length > 0 ? "error" : null}
                  type="number"
                  className="form-control"
                  name="phoneNumber"
                  placeholder="Enter your Mobile Number"
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 20, color: "red" }}>
            {this.state.phoneNumberError}
                {formErrors.phoneNumberError.length > 0 && (
                <span className="errorMessage">{formErrors.phoneNumberError}</span>
                )}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="font-weight-bold text-danger">Password</label>
                <input
                className={formErrors.passwordError.length > 0 ? "error" : null}
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 20, color: "red" }}>
            {this.state.passwordError}
                {formErrors.passwordError.length > 0 && (
                <span className="errorMessage">{formErrors.passwordError}</span>
                )}
                </div>
              </div>
                <div className="form-group">
                <label htmlFor="role" className="font-weight-bold text-danger">Your Role</label>
                <input
                  type="text"
                  className="form-control"
                  name="role"
                  placeholder="Enter your Role"
                  value={this.state.role}
                  onChange={this.handleChange}
                />
              </div>
                     <div className="form-group">
                <label htmlFor="geometry" className="font-weight-bold text-danger">Location</label>
                <input
                  type="text"
                  className="form-control"
                  name="geometry"
                  placeholder="Enter your Location"
                  value={this.state.geometry}
                  onChange={this.handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>

     <p className="forgot-password text-right">
      Already registered <a href="/user/logincustomer">Login?</a></p>
            </form>
          </div>
        </div>
      </div>
    )
  };
};

export default UserRegister;