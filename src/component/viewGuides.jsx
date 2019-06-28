import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../component/common/header/header";
import Footer from "../component/common/footer/footer";
import GuideCard from "../component/common/guide/guideCard";
import { fetchGuides, deleteGuide } from "../actions/guideAction";
import "./common/css/main.scss";

class ViewGuides extends Component {
  constructor() {
    super();
    this.state = {
      guides: ""
    };
  }

  componentDidMount() {
    this.props.fetchGuides();
  }

  handleInputChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data });
  };

  handleDelete = (e, id) => {
    e.preventDefault();
    this.props.deleteGuide(id).then(res => {
        window.location.reload();
    });
  };

  render() {
    console.log(this.props.guides, "Prop guides");
    const guides = this.props.guides.length ? (
      this.props.guides.map((guide, i) => (
        <GuideCard
          key={i}
          name={guide.name}
          keywords={guide.keywords}
          id={guide.id}
          neededItems={guide.neededItems}
          steps={guide.steps}
          delete={event => this.handleDelete(event, guide.id)}
        />
      ))
    ) : (
      <div className="no_guides">
        <p id="no-guide">No Guides Yet....</p>
      </div>
    );
    return (
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

        <h2>All Guides</h2>
        <h4><Link to="/create-guide">
        Create a guide?
      </Link></h4>

        <div className="guide-container">{guides}</div>

        <Footer />
      </div>
    );
  }
}

ViewGuides.propTypes = {
  fetchGuides: PropTypes.func.isRequired,
  deleteGuide: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  guides: state.guides.guides
});

export default connect(
  mapStateToProps,
  { fetchGuides, deleteGuide }
)(ViewGuides);
