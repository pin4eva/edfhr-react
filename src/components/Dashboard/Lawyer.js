import React from "react";
import { Link } from "react-router-dom";
import MoneyOff from "@material-ui/icons/MoneyOff";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Gavel from "@material-ui/icons/Gavel";
import { Badge } from "@material-ui/core";
import PropTypes from "prop-types";

const Lawyer = ({ lawyer }) => {
  const { _id, firstName, lastName, pic, probono, state, cases } = lawyer;
  return (
    <>
      <div className="rounded min-w-full overflow-hidden shadow-lg ">
        <img
          className="m-auto rounded-full text-center "
          src={pic}
          alt="Sunset in the mountains"
          width="150"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">
            <Link
              to={`/dashboard/lawyers/${_id}`}
            >{`${firstName} ${lastName}`}</Link>
          </div>
          <p className="text-gray-700 text-center text-base">{state}</p>
        </div>
        <div className="py-4 text-center ">
          {probono ? (
            <MoneyOff fontSize="large" />
          ) : (
            <AttachMoney fontSize="large" />
          )}

          <span
            className={
              probono
                ? " bg-green-500 py-2 px-4 text-white"
                : " bg-yellow-500 py-2 px-4 text-white"
            }
          >
            {probono ? "Free" : "Paid"}
          </span>
          {/* Cases */}
          <span className="ml-3">
            <Badge
              badgeContent={cases}
              color={cases ? "secondary" : "error"}
              overlap="circle"
            >
              <Gavel fontSize="large" color={cases ? "inherit" : "disabled"} />
            </Badge>
          </span>
        </div>
      </div>
    </>
  );
};

Lawyer.propType = {
  lawyer: PropTypes.object
};

Lawyer.defaultProps = {
  lawyer: {
    _id: 1,
    firstName: "Peter",
    lastName: "Akaliro",
    state: "Port Harcourt",
    probono: false,
    cases: 1,
    pic: "https://picsum.photos/200"
  }
};

export default Lawyer;
