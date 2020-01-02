import React from "react";
import PropTypes from "prop-types";
import { Heading, Signature } from "./TypeB";

const TypeD = ({ applicant }) => {
  return (
    <div>
      <div className="d1 draft_type">
        <Heading applicant={applicant} />
      </div>
    </div>
  );
};

export default TypeD;
