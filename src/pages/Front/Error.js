import React from "react";

import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <section>
        <div className="block gray-layer3 opc75">
          <div
            className="fixed-bg"
            style={{ backgroundImage: "url(/images/prlx-bg3.jpg)" }}
          ></div>
          <div className="container">
            <div className="error-wrp text-center">
              <div className="error-inr">
                <strong className="thm-clr">404</strong>
                <h4 itemprop="headline">Oops Page Not Found</h4>
                <i className="flaticon-cardiogram"></i>
                <form className="srch-frm">
                  <input type="text" placeholder="Search Keyword....." />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
                <Link to="/" title="" itemprop="url">
                  <i className="fa fa-home"></i>Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
