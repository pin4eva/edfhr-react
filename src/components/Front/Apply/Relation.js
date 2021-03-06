import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Relation = ({ name, phone, id, removeRel }) => {
  const removeRel1 = () => {
    removeRel(id);
  };
  return (
    <div>
      <Li>
        <div className="d-flex justify-content-between">
          <div>
            <div>Name: {name}</div>
            <div>Phone: {phone}</div>
          </div>
          <i className="fas fa-times text-danger" onClick={removeRel1}></i>
        </div>
      </Li>
    </div>
  );
};

const Li = styled.li`
  background-color: #eee;
  margin: 1rem;
  box-shadow: 5px 10px 5px 0 #ccc;
  padding: 0.5rem 1rem;
  i {
    cursor: pointer;
  }
`;

Relation.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string
};

export const RelForm = ({ addRel, desc, hide, variant }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addRel({ name, phone });
    setName("");
    setPhone("");
  };

  return (
    <div>
      <>
        <div className="form-group">
          {!hide && (
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <p className="h6">Name</p>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="col-lg-6 col-md-12">
                <p className="h6">Phone</p>
                <input
                  type="text"
                  value={phone}
                  className="form-control"
                  onChange={e => setPhone(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>
        <button
          className={`btn btn-${variant} d-block w-100 rounded-0`}
          type="button"
          onClick={handleSubmit}
        >
          {desc}
        </button>
      </>
    </div>
  );
};

RelForm.propTypes = {
  addRel: PropTypes.func.isRequired,
  desc: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  hide: PropTypes.bool.isRequired
};
RelForm.defaultProps = {
  desc: "Add Relative ",
  hide: false,
  variant: "secondary"
};

export default Relation;
