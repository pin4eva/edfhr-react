import React from "react";
import TopBG from "../../components/Front/TopBG";

const Contact = () => {
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
              <li className="breadcrumb-item active">Contact Us</li>
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
            <div className="cnt-wrp">
              <div className="row">
                <div className="col-md-8 col-sm-12 col-lg-8">
                  <div
                    className="cnt-inr"
                    style={{ backgroundImage: "url(/images/pattern-bg2.png)" }}
                  >
                    <h2 itemProp="headline">
                      Don't be a stranger{" "}
                      <span className="thm-clr">Just Say Hello!</span>
                    </h2>
                    <p itemProp="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typeseing in Loremy Ipsum has been the industry's standard
                      dummy text ever si 1500s, when a an unknown printer took a
                      galley of type and scrambl make a type specime industry's
                      standard dummy tn book.
                    </p>
                    <form className="cnt-frm">
                      <div className="row mrg10">
                        <div className="col-md-6 col-sm-6 col-lg-6">
                          <input type="text" placeholder="First Name" />
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6">
                          <input type="text" placeholder="Last Name" />
                        </div>
                        <div className="col-md-12 col-sm-12 col-lg-12">
                          <input type="email" placeholder="Email Address" />
                        </div>
                        <div className="col-md-12 col-sm-12 col-lg-12">
                          <input type="text" placeholder="Subject" />
                        </div>
                        <div className="col-md-12 col-sm-12 col-lg-12">
                          <textarea placeholder="Message"></textarea>
                        </div>
                        <div className="col-md-12 col-sm-12 col-lg-12">
                          <button className="thm-btn" type="submit">
                            Send Message<span></span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4">
                  <div className="cnt-inf thm-layer opc9">
                    <div
                      className="fixed-bg patern-bg thm-bg back-blend-multiply"
                      style={{
                        backgroundImage: "url(/images/pattern-bg1.jpg)"
                      }}
                    ></div>
                    <p itemProp="description">
                      Issued In Minnesota (MN) On 12/02/2016, Expires 03/15/2020
                    </p>
                    <ul className="cnt-inf-lst">
                      <li>
                        <span>E:</span>
                        <a href="/" title="" itemProp="url">
                          user@domain.com
                        </a>
                      </li>
                      <li>
                        <span>T:</span>(55) 1234-56789
                      </li>
                      <li>
                        <span>F:</span>(55) 1234-56789
                      </li>
                    </ul>
                    <div className="cnt-scl">
                      <a
                        className="facebook"
                        href="/"
                        title="Facebook"
                        itemProp="url"
                        target="_blank"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a
                        className="pinterest"
                        href="/"
                        title="Pinterest"
                        itemProp="url"
                        target="_blank"
                      >
                        <i className="fa fa-pinterest-p"></i>
                      </a>
                      <a
                        className="twitter"
                        href="/"
                        title="Twitter"
                        itemProp="url"
                        target="_blank"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a
                        className="linkedin"
                        href="/"
                        title="Linkedin"
                        itemProp="url"
                        target="_blank"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="cnt-mp" id="cnt-mp"></div>
                </div>
              </div>
            </div>
            <div className="cnt-fq text-center">
              <h2 itemProp="headline">
                <i className="fa fa-cog"></i>Find Your Answer Here
                <a className="thm-btn" href="/" title="" itemProp="url">
                  Faq's<span></span>
                </a>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
