import React from "react";
import TopBG from "../../../components/Front/TopBG";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ApplicantLogin = () => {
  return (
    <>
      <TopBG />
      <div className="gray-bg3 brdcrmb-wrp">
        <div className="container">
          <div className="brdcrmb-inr flex justify-content-between">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/" title="" itemProp="url">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active">Applicant Registration</li>
            </ol>
            <form className="pg-srch-frm">
              <input type="text" placeholder="Search All Resources" />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mw-50 mx-auto">
          <Form>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Applicant ID"
              />
              <div className="input-group-append">
                <button type="button" className="btn btn-secondary rounded-0">
                  <i className="fa fa-search"></i> Search
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

const Form = styled.form`
  max-width: 50%;
  margin: 2rem auto;
  position: relative;
  input {
    outline: none;
  }
`;
export default ApplicantLogin;
