import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Exhibit = ({ name, fileName, id, removeFile }) => {
  return (
    <div>
      <Li>
        <div className="d-flex justify-content-between">
          <div>
            <div>Name: {name}</div>
            <div>FileName: {fileName}</div>
          </div>
          <i
            className="fas fa-times text-danger"
            onClick={() => removeFile(id)}
          ></i>
        </div>
      </Li>
    </div>
  );
};

Exhibit.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string
};
const Li = styled.li`
  background-color: #eee;
  margin: 1rem;
  box-shadow: 5px 10px 5px 0 #ccc;
  padding: 0.5rem 1rem;
  list-style: none;
  i {
    cursor: pointer;
  }
`;

export const ExForm = ({ addEx }) => {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!file) return alert("Please add a file");
    if (!name) return alert("Please select category");
    else addEx({ name, file });
    setName("");
    setFile("");
  };

  return (
    <div>
      <div className="row">
        <div className="input-group col-lg-6">
          <div className="input-group-prepend">
            <label className="input-group-text">Options</label>
          </div>
          <select
            className="custom-select"
            onChange={e => setName(e.target.value)}
            name="name"
          >
            <option defaultValue>Please Up load Exhibits Here if any.</option>
            <option>Charge sheets</option>
            <option>Remand Warrant </option>
            <option>Record of Court proceeding</option>
            <option>Pictures</option>
            <option>Any other Exhibits/Evidence</option>
          </select>
        </div>

        <div className="input-group col-lg-6">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input rounded-0"
              onChange={e => setFile(e.target.files[0])}
              name="file"
            />
            <label className="custom-file-label">Choose file</label>
          </div>
        </div>
      </div>
      <div className="my-4">
        <button
          className="btn btn-success d-block w-100 rounded-0"
          onClick={handleSubmit}
        >
          Add File
        </button>
      </div>
    </div>
  );
};

ExForm.propTypes = {
  name: PropTypes.string,
  file: PropTypes.array,
  addEx: PropTypes.func
};

export default Exhibit;
