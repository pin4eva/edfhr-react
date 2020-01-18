import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ApplicantContext = createContext();

const ApplicantContextProvider = props => {
  const [applicants, setApplicants] = useState({ name: "Peter", id: 1 });

  return (
    <ApplicantContext.Provider value={{ applicants }}>
      {props.children}
    </ApplicantContext.Provider>
  );
};

export default ApplicantContextProvider;
