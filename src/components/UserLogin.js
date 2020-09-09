import React, { Component } from 'react'
import { login } from './UserFunction'

class UserLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      phoneNumber: this.state.phoneNumber,
      password: this.state.password
    }

    login(user).then(res => {
      if (res) {
        this.props.history.push(`/user/nearby`)
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.handleSubmit}>
              <h1 className="h3 mb-3 font-weight-normal" className="font-weight-bold text-primary">Please sign in</h1>
              <div className="form-group">
                <label htmlFor="phoneNumber" className="font-weight-bold text-danger">Mobile Number</label>
                <input
                  type="number"
                  className="form-control"
                  name="phoneNumber"
                  placeholder="Enter your registered Mobile number"
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="font-weight-bold text-danger">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
      <div className="custom-control custom-checkbox">
      <input type="checkbox" className="custom-control-input" id="customCheck1" />
      <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
      </div>
      </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
                       <p className="forgot-password text-right">
       Forgot <a href="/user/{myid}">password?</a>
     </p>
            </form>
          </div>
        </div>
      </div>
    )
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("Submitting");
    console.log(this.state);
  };
}

export default UserLogin;