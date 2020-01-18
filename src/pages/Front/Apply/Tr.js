import React, { useState } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
const Tr = ({ info, answer, options, itemType, type }) => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    if (edit) {
      setEdit(!edit);
    } else {
      setEdit(!edit);
    }
  };
  return (
    <tr>
      <td>{info}</td>
      <td>
        <span>{!edit && <span>{answer}</span>}</span>
        {edit && itemType === "select" ? (
          <div
            style={{
              minWidth: "10rem",
              width: "90%",
              display: "inline-block"
            }}
          >
            <Select options={options} />
          </div>
        ) : (
          edit &&
          itemType === "input" && (
            <div style={{ width: "90%", display: "inline-block" }}>
              <input type={type} className="form-control" />
            </div>
          )
        )}

        <span>
          <sup
            className="pl-2 d-inline"
            style={{ cursor: "pointer" }}
            onClick={handleEdit}
          >
            <i className={`fas fa-${edit ? "check" : "pen"} text-primary`}></i>
          </sup>
        </span>
      </td>
    </tr>
  );
};

Tr.propTypes = {
  info: PropTypes.string,
  answer: PropTypes.string
};

Tr.defaultProps = {
  info: "info",
  answer: "answer",
  type: "text"
};

export default Tr;
