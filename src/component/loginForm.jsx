import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../component/common/header/header';
import Footer from '../component/common/footer/footer';
import { login } from '../actions/userAction';
import './common/css/main.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data });
  };

  changeRoute = () => {
    const signup = '/register';
    this.props.history.push(signup);
  };

  onSubmit = e => {
    e.preventDefault();
    const { data } = this.state;
    if (data === undefined) {
      toast.error('Fields are empty');
      return;
    }
    const user = {
      email: data.email,
      password: data.password
    };

    this.props.login(user)
    .then((res) => {
      this.props.history.push('/view-guides');
    });
  };

  render() {
    return (
      <div className='container'>
        <Header />
        <hr />
      <div className='wrap-form'>
        <form onSubmit={this.onSubmit}>
          <div>
            <h1>Welcome Back!</h1>

            <br />
            <label htmlFor='email'>
              <b>Email</b>
            </label>
            <br />
            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              onChange={this.handleInputChange}
              required
            />

            <br />
            <label htmlFor='password'>
              <b>Password</b>
            </label>
            <br />
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              onChange={this.handleInputChange}
              minLength="6"
              required
            />

            <button type='submit' className='padded-button'>
              Login
            </button>
          </div>
        </form>
        <h4>New to the community?</h4>
        <button
          type='submit'
          onClick={this.changeRoute}
          className='padded-button'
        >
          Sign Up
        </button>
        </div>
      <Footer />
        
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
