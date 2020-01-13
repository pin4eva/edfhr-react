import React from "react";
import PropTypes from 'prop-types'


const Tr = ({info,answer}) => {
  return (
    <tr>
      <td>{info}</td>
      <td>{answer}</td>
    </tr>
  );
};

Tr.propTypes = {
  info: PropTypes.string,
  answer: PropTypes.string,
}

Tr.defaultProps = {
  info: "info",
  answer: "answer"
}

export default Tr;
