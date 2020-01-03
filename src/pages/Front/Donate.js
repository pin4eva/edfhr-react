import React from "react";
import TopBG from "../../components/Front/TopBG";

const Donate = () => {
  return (
    <>
      <TopBG />
      <div className="gray-bg3 brdcrmb-wrp">
        <div className="container">
          <div className="brdcrmb-inr flex justify-content-between">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html" title="" itemProp="url">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active">Donate Now</li>
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
      <section>
        <div className="block">
          <div className="container">
            <div className="dnt-wrp">
              <div className="dnt-titl">
                <h2 itemProp="headline">
                  Save A Life: <strong className="thm-clr">Donate Today</strong>
                </h2>
                <p itemProp="description">
                  In the U.S. and around the world, Save the Children is there.
                  We do whatever it takes to save children, but we can’t do it
                  creates meaningful change for children, families and their
                  communities across the world.
                </p>
              </div>
              <div className="dnt-frm-wrp">
                <h4 itemProp="headline">
                  Donate Now For Helping Povert People?
                </h4>
                <form>
                  <div className="row mrg">
                    <div className="col-md-4 col-sm-4 col-lg-4">
                      <span className="dnt-fld">
                        <input type="text" placeholder="Doller" />
                        <i>$</i>
                      </span>
                    </div>
                    <div className="col-md-8 col-sm-8 col-lg-8">
                      <div className="slc-wrp">
                        <select className="d-select">
                          <option>Select Country</option>
                          <option>United State</option>
                          <option>United Kingdom</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12">
                      <div className="dnt-typ">
                        <span className="cstm-rdo">
                          <input type="radio" id="dnt-typ1" name="dnt-typ" />
                          <label htmlFor="dnt-typ1">Monthly</label>
                        </span>
                        <span className="cstm-rdo">
                          <input type="radio" id="dnt-typ2" name="dnt-typ" />
                          <label htmlFor="dnt-typ2">One-Time</label>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12">
                      <span className="dnt-fld2">
                        <i>$</i>
                        <input type="text" />
                      </span>
                      <ul className="dnt-prc-lst">
                        <li>
                          <span>$15</span>
                        </li>
                        <li>
                          <span>$50</span>
                        </li>
                        <li>
                          <span>$100</span>
                        </li>
                        <li>
                          <span>$500</span>
                        </li>
                        <li>
                          <a
                            className="thm-btn"
                            href="/"
                            title=""
                            itemProp="url"
                          >
                            Custom Amount<span></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12">
                      <h6 itemProp="headline">
                        Enter your billing information
                      </h6>
                      <span className="dnt-fld3">
                        <label>Email Address</label>
                        <span className="dnt-fld-inr">
                          <input type="email" />
                        </span>
                      </span>
                      <span className="dnt-fld3">
                        <label>Complete Name</label>
                        <span className="dnt-fld-inr">
                          <div className="row mrg">
                            <div className="col-md-4 col-sm-4 col-lg-4">
                              <div className="slc-wrp">
                                <select className="d-select border-link">
                                  <option>Mr</option>
                                  <option>Mrs</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-8 col-sm-8 col-lg-8">
                              <input type="text" />
                            </div>
                          </div>
                        </span>
                      </span>

                      <span className="dnt-fld3">
                        <label>City</label>
                        <span className="dnt-fld-inr">
                          <input type="text" />
                        </span>
                      </span>
                      <span className="dnt-fld3">
                        <label>State / Zidcode</label>
                        <span className="dnt-fld-inr">
                          <div className="row mrg20">
                            <div className="col-md-6 col-sm-6 col-lg-6">
                              <div className="slc-wrp">
                                <select className="d-select border-link">
                                  <option>State</option>
                                  <option>State 1</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-lg-6">
                              <input type="text" placeholder="Zidcode" />
                            </div>
                          </div>
                        </span>
                      </span>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12">
                      <h6 itemProp="headline">
                        Enter Your Payment Information
                      </h6>
                      <div className="pymnt-mthd">
                        <span className="cstm-rdo">
                          <input
                            type="radio"
                            id="pymnt-mthd1"
                            name="pymnt-mthd"
                          />
                          <label htmlFor="pymnt-mthd1">
                            <img
                              src="/images/pymnt-mthd-img1.jpg"
                              alt="pymnt-mthd-img1.jpg"
                              itemProp="image"
                            />
                          </label>
                        </span>
                        <span className="cstm-rdo">
                          <input
                            type="radio"
                            id="pymnt-mthd2"
                            name="pymnt-mthd"
                          />
                          <label htmlFor="pymnt-mthd2">
                            <img
                              src="/images/pymnt-mthd-img2.jpg"
                              alt="pymnt-mthd-img2.jpg"
                              itemProp="image"
                            />
                          </label>
                        </span>
                      </div>
                      <span className="dnt-fld3">
                        <label>Credit Card Number</label>
                        <span className="dnt-fld-inr">
                          <input type="text" />
                        </span>
                      </span>
                      <span className="dnt-fld3">
                        <label>CVV</label>
                        <span className="dnt-fld-inr">
                          <input type="text" />
                        </span>
                      </span>
                      <span className="dnt-fld3">
                        <label>Expiration Date</label>
                        <span className="dnt-fld-inr">
                          <div className="row mrg20">
                            <div className="col-md-6 col-sm-6 col-lg-6">
                              <div className="slc-wrp">
                                <select className="d-select border-link">
                                  <option>Month</option>
                                  <option>Jan</option>
                                  <option>Feb</option>
                                  <option>Mar</option>
                                  <option>Apr</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-lg-6">
                              <div className="slc-wrp">
                                <select className="d-select border-link">
                                  <option>Year</option>
                                  <option>1994</option>
                                  <option>1995</option>
                                  <option>1996</option>
                                  <option>1997</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </span>
                      </span>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12">
                      <span className="dnt-fld3">
                        <span className="cstmchk">
                          <input type="checkbox" id="chkbx1" />
                          <label htmlFor="chkbx1">
                            I want to help even more by covering the cost of the
                            transaction fee on my donation. My total will be
                            $0.00.
                          </label>
                        </span>
                        <button className="thm-btn" type="submit">
                          Donate Now<span></span>
                        </button>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
