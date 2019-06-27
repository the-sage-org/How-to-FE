import React from "react";
import { Link } from "react-router-dom";

const GuideCard = props => {
  return (
    <div className="card">
      <i className="fa fa-book fa-2x" />
      <div className="card-container">
        <h4>
          <b>{props.name}</b>
        </h4>
        <h5>{props.keywords}</h5>
        <p>{props.neededItems}</p>
        <small>{props.steps}</small>
      </div>
      <Link to={`/edit_guide?id=${props.id}`} className="btn btn-edit">
        Edit
      </Link>
      <button type="button" className="delete-button" onClick={props.delete}>
        Delete
      </button>
    </div>
  );
};

export default GuideCard;
