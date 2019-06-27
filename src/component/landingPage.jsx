import React, { Component } from 'react';
import Header from '../component/common/header/header';
import Footer from '../component/common/footer/footer';

export default class LandingPage extends Component {
  render() {
      const { history } = this.props;
    return (
      <div>
        <div className='container'>
          <div>
            <img
              src='https://i.imgur.com/DZgeECy.jpg'
              height='400rem'
              width='100%'
              alt='landing page image'
            />
          </div>
          <div className='inner-container'>
            <div className='header-container'>
              <div className='title-text-container'>
                <img
                  src='https://i.imgur.com/iO37GRE.png'
                  height='100%'
                  width='170rem'
                  alt='landing page image'
                />
              </div>
              <Header />
            </div>
            <hr />
            <div>
              <button onClick={() => history.push('/register')} className='padded-button'>
                Sign Up!
              </button>
              <button onClick={() => history.push('/login')} className='padded-button'>
                Sign In!
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
