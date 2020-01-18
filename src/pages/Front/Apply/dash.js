import React, { useState, useEffect } from "react";
// import "./Apply.css";
import styled from "styled-components";
import axios from "axios";
import Tr from "./Tr";

const Dash = () => {
  const baseUrl =
    "http://localhost:3005/api/v1/applicants/single/5e226b93dafe5147e743ce48";
  const [applicant, setApplicant] = useState({});
  const { caseType } = applicant;
  const getData = async () => {
    const { data } = await axios.get(baseUrl).catch(err => setApplicant({}));
    if (!data.data) {
      return setApplicant({});
    }
    setApplicant(data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  //

  const prisonOpts = [
    { value: true, label: "In Prison" },
    { value: false, label: "In Prolice dentention" }
  ];

  let view = 2;
  // if (caseType === ("A" || "B")) {
  //   view = 1;
  // }
  // if (caseType === ("C" || "D")) {
  //   view = 2;
  // }

  return (
    <>
      {!applicant && <h4>loading</h4>}
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
        <form>
          <Table className="table table-borderless ">
            {(view === 1) | 2 && (
              <tbody className="tbody">
                <Tr info="Proxy" answer={`${applicant.proxy}`} />
                <Tr
                  info="Applicant's Full Name"
                  answer={applicant.name}
                  itemType="input"
                />
                <Tr
                  info="Address"
                  answer={applicant.address}
                  itemType="input"
                />
                <Tr info="LGA" answer={applicant.lga} itemType="input" />
                <Tr
                  info="Currently in"
                  answer={applicant.inPrison ? "Prison" : "Police detention"}
                  itemType="select"
                  options={prisonOpts}
                />
                <Tr
                  info="Nature of breach"
                  itemType="input"
                  answer={applicant.breach_nature}
                />

                <Tr
                  info="Arrested on"
                  answer={applicant.arrested_on}
                  itemType="input"
                  type="date"
                />
                <Tr
                  info="Arrested at"
                  answer={applicant.arrested_at}
                  itemType="input"
                  type="text"
                />
                <Tr
                  info="suspected of"
                  answer={applicant.offence_suspected}
                  itemType="input"
                  type="text"
                />
                <Tr
                  info="Was going/coming from before the arrest"
                  answer={applicant.itinerary}
                  itemType="input"
                  type="text"
                />
                <Tr
                  info="Name of the Police station taken to"
                  answer={applicant.station}
                  itemType="input"
                  type="text"
                />
              </tbody>
            )}
            {view === 2 && (
              <tbody>
                <Tr
                  info="Arraigned on"
                  answer={applicant.arraigned_on}
                  itemType="input"
                  type="date"
                />
                <Tr
                  info="Arraigned at"
                  answer={applicant.arraigned_at}
                  itemType="input"
                  type="date"
                />
              </tbody>
            )}
          </Table>
        </form>
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
