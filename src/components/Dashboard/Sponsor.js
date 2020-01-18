import { Badge, IconButton } from "@material-ui/core";
import Accessibility from "@material-ui/icons/Accessibility";
import LocationOn from "@material-ui/icons/LocationOn";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

// import sponsors from "../../db/sponsors";

const Sponsor = ({ sponsor }) => {
  const {
    firstName,
    lastName,
    state,
    pic,
    _id,
    sponsor_type,
    assisted
  } = sponsor;
  return (
    <>
      <div className="min-w-full rounded overflow-hidden shadow-lg ">
        <img
          className=" m-auto rounded-full text-center "
          src={pic}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">
            <Link
              to={`/dashboard/sponsors/${_id}`}
            >{`${firstName} ${lastName}`}</Link>
          </div>
          <div className="text-center">
            <div className="text-sm">{sponsor_type}</div>
            <IconButton>
              <Badge color="secondary">
                <span className="flex items-center">
                  <LocationOn />
                  <span className="text-sm bg-green-500 py-1 px-3 rounded-l-full rounded-r-full text-white">
                    {state}
                  </span>
                </span>
              </Badge>
            </IconButton>
            <IconButton>
              <Badge
                color="secondary"
                badgeContent={assisted}
                className="items-center"
              >
                <Accessibility />
              </Badge>
            </IconButton>
          </div>
          {/* <p className="text-gray-700 text-center text-base">{brief}</p> */}
        </div>
      </div>
    </>
  );
};

Sponsor.propType = {
  sponsor: PropTypes.object
};

export default Sponsor;
