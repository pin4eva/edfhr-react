import React, { useState } from "react";
// import "./Apply.css";
import styled from "styled-components";
import axios from "axios";
import Tr from "./Tr";

const Dash = () => {
  const baseUrl =
    "http://localhost:3005/api/v1/applicants/single/5e1882bf4ae36f53bee4885b";
  const [applicant, setApplicant] = useState({});
  const getData = async () => {
    const { data } = await axios.get(baseUrl).catch(err => console.log(err));
    setApplicant(data.data);
  };

  getData();
  //   console.log(applicant);

  return (
    <>
      <div className="d-flex w-100 justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Peter Akaliro</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group mr-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Print
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Export
            </button>
          </div>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary dropdown-toggle"
          >
            {/* <i className="fas fa-calendar-alt pr-1"></i> */}
            Update
          </button>
        </div>
      </div>
      <h3 className="text-center">Application Details</h3>
      <Wrapper className="container">
        <Table className="table table-responsive table-borderless  w-100 d-block">
          <tbody>
            <Tr info="Proxy" answer={`${applicant.proxy}`} />
            <Tr info="Full Name" answer={applicant.name} />
          </tbody>
        </Table>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-width: 80vw;
  margin: auto;
`;

const Table = styled.table`
  min-width: 100%;
  width: 100%;
  margin: auto;
`;

export default Dash;
