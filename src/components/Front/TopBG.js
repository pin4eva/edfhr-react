import React from "react";
import PropTypes from "prop-types";

const TopBG = ({ minHeight, image }) => {
  return (
    <section>
      <div className="block no-padding">
        <div
          className="pg-tp-bg"
          style={{
            backgroundImage: `url(${image})`,
            minHeight: `${minHeight}`
          }}
        ></div>
      </div>
    </section>
  );
};

TopBG.propTypes = {
  minHeight: PropTypes.string,
  image: PropTypes.string
};

TopBG.defaultProps = {
  minHeight: "20rem",
  image: "/images/pg-tp-bg1.jpg"
};
export default TopBG;
