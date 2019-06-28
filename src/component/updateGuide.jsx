import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from "../component/common/header/header";
import Footer from "../component/common/footer/footer";
import { updateGuide } from '../actions/guideAction';

class UpdateAGuide extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: "",
      keywords: "",
      neededItems: "",
      steps: ""
    };
  }

  componentDidMount() {
      console.log(this.props.location);
    const { search } = this.props.location;
    const id = search ? search.split('=')[1] : '';
    this.setState({ id });
  };

  handleInputChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = Number(this.state.id)
    const { data } = this.state;
    console.log(data)
    if (data === undefined) {
      toast.error('Fields are empty');
      return;
   }

   const guide = {
    name: data.name,
    keywords: data.keywords,
    neededItems: data.neededItems,
    steps: data.steps
  };

  this.props.updateGuide(id, guide)
  .then(res => {
    this.props.history.push('/view-guides');
});
  };
  
  render() {
    const { history } = this.props;
    return (
      <div>
        <div className="container">
          <div className="header-container">
            <Header />
            <div>
              <i className="fa fa-home fa-2x" />
              <i className="fa fa-user fa-2x" />
              <i className="fa fa-search fa-2x" />
            </div>
          </div>
          <hr />
          <div className='wrap-form'>
          <form onSubmit={this.onSubmit}>
            <div>
              <h1>Update Guide!</h1>

              <label htmlFor="name">
                <b>Guide Name</b>
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter name"
                name="name"
                onChange={this.handleInputChange}
                minLength="6"
                required
              />

              <br />
              <label htmlFor="keywords">
                <b>Guide Keyword</b>
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter keywords"
                name="keywords"
                onChange={this.handleInputChange}
                minLength="6"
                required
              />

              <br />
              <label htmlFor="neededItems">
                <b>What you'll need</b>
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter what you'll need"
                onChange={this.handleInputChange}
                minLength="6"
                name="neededItems"
                required
              />

              <br />
              <label htmlFor="steps">
                <b>Step #1</b>
              </label>
              <br />
              <textarea
              placeholder="Enter steps"
                onChange={this.handleInputChange}
                name="steps"
                cols="60"
                rows="10"
                minLength="6"
                required
              />

              <button type="submit" className="padded-button">
                Publish Guide
              </button>
            </div>
          </form>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

UpdateAGuide.propTypes = {
    updateGuide: PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    guide: state.user.user
  });
  
  export default connect(
    mapStateToProps,
    { updateGuide }
  )(UpdateAGuide);
