import React from "react";
import sponsors from "../../../db/sponsors";
import Sponsor from "../../../components/Dashboard/Sponsor";
// import sponsors from "../../../db/sponsors";

const Sponsors = () => {
  return (
    <div className="container">
      <div className="flex flex-wrap ">
        {sponsors.map(sponsor => (
          <div
            key={sponsor._id}
            className="sm:max-w-full md:w-1/2  lg:w-1/3 flex items-stretch  p-3"
          >
            <Sponsor sponsor={sponsor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
