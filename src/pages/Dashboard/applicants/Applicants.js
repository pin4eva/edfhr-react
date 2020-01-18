import React, { useState, useEffect } from "react";
import Applicant from "../../../components/Dashboard/SingleApplicant";
// import applicants from "../../../db/applicants";
// import Grid from "@material-ui/core/Grid";
import axios from "axios";

const Applicants = () => {
  const [applicants, setApplicants] = useState([]);
  const [error] = useState("");
  let uri = "http://localhost:3005/api/v1";

  useEffect(() => {
    const getApplicants = async () => {
      let { data } = await axios
        .get(`${uri}/applicants`)
        .catch(err => new Error(err));

      if (data) {
        setApplicants(data.data);
      }
    };
    getApplicants();
  }, [uri]);

  return (
    <div className="row container">
      {applicants &&
        !error &&
        applicants.map(item => (
          <div key={item._id} className=" col-lg-4 col-md-6 col-sm-12 p-2">
            <Applicant applicant={item} />
          </div>
        ))}
    </div>
  );
};

export default Applicants;
