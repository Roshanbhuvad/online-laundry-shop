import React, { Component } from 'react'
import { Shopregister } from './ShopFunction'
import validate from 'react-joi-validation';
import Joi from "joi-browser";

 const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

/*var schema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phoneNumber: Joi.number().required(),
  password: Joi.string().min(8).required(),
  OpeningTime: Joi.string().required(),
  ClosingTime: Joi.string().required(),
  price: Joi.string().required(),
  role: Joi.string().required(),
  address: Joi.string().required(),
}); */

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


class ShopRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      phoneNumber: null,
      password: null,
      OpeningTime: null,
      ClosingTime: null,
      image: '',
      geometry: '',
      role: null,
      address: null,
      formErrors: {
      nameError:'',
      emailError:'',
      phoneNumberError: '',
      OpeningTimeError: '',
      ClosingTimeError: '',
      passwordError:''
      }
      
    };
  } 

    /*this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  } */

  /*onChange(e) {
    this.setState({ [e.target.name]: e.target.value }) */

  handleSubmit = (e) => {
    e.preventDefault()
        if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
         Name: ${this.state.name}
         Email: ${this.state.email}
        password: ${this.state.password}
        phoneNumber: ${this.state.phoneNumber}
        OpeningTime: ${this.state.OpeningTime}
        ClosingTime: ${this.state.ClosingTime}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
      OpeningTime: this.state.OpeningTime,
      ClosingTime: this.state.ClosingTime,
      price: this.state.price,
      image: this.state.image,
      geometry: this.state.geometry,
      role: this.state.role,
      address: this.state.address,
    }

    Shopregister(newUser).then(res => {
      this.props.history.push(`/shops/login`)
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
        case "ClosingTime":
        formErrors.ClosingTimeError =
          value.length < 2 ? "minimum 2 characaters required" : "";
        break;
        case "OpeningTime":
        formErrors.OpeningTimeError =
          value.length < 2 ? "minimum 2 characaters required" : "";
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
            <form noValidate onSubmit={this.handleSubmit} enctype="multipart/form-data">
              <h1 className="h3 mb-3 font-weight-normal" className="font-weight-bold text-primary">Own a Laundry shop? register here</h1>
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
                  placeholder="Enter your Mobile number"
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

                <label htmlFor="OpeningTime" className="font-weight-bold text-danger">Opening Time</label>
                <input
                  className={formErrors.OpeningTimeError.length > 0 ? "error" : null}
                  type="text"
                  className="form-control"
                  name="OpeningTime"
                  placeholder="OpeningTime"
                  value={this.state.OpeningTime}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 20, color: "red" }}>
            {this.state.OpeningTimeError}
                   {formErrors.OpeningTimeError.length > 0 && (
                <span className="errorMessage">{formErrors.OpeningTimeError}</span>
              )}
              </div>
              </div>
              <div className="form-group">
                <label htmlFor="ClosingTime" className="font-weight-bold text-danger">Closing Time</label>
                <input
                  className={formErrors.ClosingTimeError.length > 0 ? "error" : null}
                  type="text"
                  className="form-control"
                  name="ClosingTime"
                  placeholder="ClosingTime"
                  value={this.state.ClosingTime}
                  onChange={this.handleChange}
                   /*onChange={ changeHandler('ClosingTime') }
                  onBlur={ validateHandler('ClosingTime') } */
                />
                <div style={{ fontSize: 20, color: "red" }}>
            {this.state.ClosingTimeError}
                {formErrors.ClosingTimeError.length > 0 && (
                <span className="errorMessage">{formErrors.ClosingTimeError}</span>
              )}
              </div>
              </div>
              <div className="form-group">
                <label htmlFor="price" className="font-weight-bold text-danger">Price</label>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  placeholder="Enter your Price"
                  value={this.state.price}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="image" className="font-weight-bold text-danger">Image</label>
                <input
                  type="file"
                  className="form-control"
                  name="file"
                  value={this.state.image}
                  onChange={this.handleChange}
                  /*onChange={ changeHandler('image') }
                  onBlur={ validateHandler('image') }*/
                /> 
              </div>
              <div className="form-group">
                <label htmlFor="geometry" className="font-weight-bold text-danger">Location</label>
                <input
                  type="number"
                  className="form-control"
                  name="geometry"
                  placeholder="geometry"
                  value={this.state.geometry}
                  onChange={this.handleChange}
                   /*onChange={ changeHandler('geometry') }
                  onBlur={ validateHandler('geometry') } */
                />
              </div>
              <div className="form-group">
                <label htmlFor="role" className="font-weight-bold text-danger">Your Role</label>
                <input
                  type="text"
                  className="form-control"
                  name="role"
                  placeholder="role"
                  value={this.state.role}
                  onChange={this.handleChange}
                   /*onChange={ changeHandler('role') }
                  onBlur={ validateHandler('role') }*/
                />
              </div>
              <div className="form-group">
                <label htmlFor="address" className="font-weight-bold text-danger">Shop Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                   /*onChange={ changeHandler('address') }
                  onBlur={ validateHandler('address') } */
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>

     <p className="forgot-password text-right">
      Already registered <a href="/shops/login">Login?</a></p>
            </form>
          </div>
        </div>
        </div>
    )
  };
};
export default ShopRegister;

