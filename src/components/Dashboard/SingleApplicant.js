import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

// import applicants from "../../db/applicants";

const SingleApplicant = ({ applicant }) => {
  const { firstName, lastName, state, _id } = applicant;
  return (
    <>
      <div className="card testimonial-card p-2">
        <div className="card-up indigo lighten-1"></div>

        <div className="avatar mx-auto white">
          <img
            src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
            className="rounded-circle"
            alt="woman avatar"
          />
        </div>

        <div className="card-body">
          <Link to={`/dashboard/applicants/${_id}`}>
            <h4 className="card-title text-center">{`${firstName} ${lastName}`}</h4>
            <h6 className="text-center bg-success px-4 py-2 text-white">
              {state}
            </h6>
          </Link>
          <hr />
          <p className="text-center">
            <i className="fas fa-quote-left"></i> Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Eos, adipisci
          </p>
        </div>
      </div>
    </>
  );
};

SingleApplicant.propType = {
  applicant: PropTypes.object
};

export default SingleApplicant;
