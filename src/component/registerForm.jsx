import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import Header from '../component/common/header/header';
import Footer from '../component/common/footer/footer';
import { register } from '../actions/userAction';
import './common/css/main.scss';

class Signup extends Component {
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
    const signup = '/login';
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
      username: data.username,
      email: data.email,
      password: data.password
    };

    this.props.register(user)
    .then((res) => {
      this.props.history.push('/create-guide');
    });;
  };

  render() {
    const resetTagStyle = {
      verticalAlign: 'middle'
    };
    return (
      <div className='container'>
        <Header />
        <hr />
        <form onSubmit={this.onSubmit}>
          <div>
            <h1>Let's Get Started!</h1>

            <label htmlFor='username'>
              <b>Username</b>
            </label>
            <br />
            <input
              type='text'
              placeholder='Enter Username'
              name='username'
              minLength="6"
              onChange={this.handleInputChange}
              required
            />

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
              onChange={this.handleInputChange}
              name='password'
              minLength="6"
              required
            />

            <button type='submit' className='padded-button'>
              Sign Up
            </button>
          </div>
        </form>
        <h4>Already a member?</h4>
        <button
          type='submit'
          onClick={this.changeRoute}
          className='padded-button'
        >
          Login
        </button>

        <Footer />
      </div>
    );
  }
}

Signup.propTypes = {
  register: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(
  mapStateToProps,
  { register }
)(Signup);
