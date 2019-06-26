import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/userAction";
import "./common/css/main.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data });
  };

  changeRoute = () => {
    const signup = '/register'
    this.props.history.push(signup);
  }

  onSubmit(e) {
    e.preventDefault();
    const { data } = this.state;
    if (data === undefined) {
      toast.error("Fields are empty");
      return;
    }
    const user = {
      email: data.email,
      password: data.password
    };

    this.props.login(user);
  }

  render() {
    const resetTagStyle = {
      verticalAlign: "middle",
    };
    return (
      <div className="container">
      <div className="title-signup">
              <span id="title-text">How-to</span>
      </div>
      <hr/>
      
      <form onSubmit={this.onSubmit}>
          <div >
            <h1>Welcome Back!</h1>
        
            <br/><label htmlFor="email"><b>Email</b></label><br/>
            <input type="email" placeholder="Enter Email" name="email" onChange={this.handleInputChange} required/>
        
            <br/><label htmlFor="password"><b>Password</b></label><br/>
            <input type="password" placeholder="Enter Password" name="password" onChange={this.handleInputChange} required/>
        
        
            <button type="submit" className="padded-button">Login</button>
          </div>
        </form>
        <h4>New to the community?</h4>
          <button type="submit" onClick={this.changeRoute} className="padded-button">Sign Up</button>

        <div className="footer">
              <div className={resetTagStyle}>Copyright &copy; 2019 How-to, LLC All Rights Reserved </div>
            </div>
      
</div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired
};



const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
