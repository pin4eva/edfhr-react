import React from "react";
import { Link } from "react-router-dom";

import "./Apply.css";

const ApplicantDashboard = ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/">
          EDFHR
        </Link>

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="/">
              Sign out
            </a>
          </li>
        </ul>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    <span data-feather="home"></span>
                    Dashboard <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/applicants/dashboard/affidavit"
                  >
                    Affidavits
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/applicant/dashboard/exhibit">
                    Upload Exhibit
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/applicant/dashboard/relatives"
                  >
                    Update Relations
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/applicants/dashboard/affidavit"
                  >
                    <span data-feather="layers"></span>
                    Make payment
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicantDashboard;
