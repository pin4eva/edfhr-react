import React from "react";
import Lawyer from "../../../components/Dashboard/Lawyer";
import lawyers from "../../../db/lawyers";

const Lawyers = () => {
  return (
    <div className="container">
      <div className="flex flex-wrap ">
        {lawyers.map(lawyer => (
          <div
            key={lawyer._id}
            className="sm:max-w-full md:w-1/2  lg:w-1/3 flex items-stretch  p-3"
          >
            <Lawyer lawyer={lawyer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lawyers;
