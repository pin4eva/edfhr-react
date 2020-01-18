import React from "react";
import Partners from "../../components/Front/Home/partners";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <main>
        <section>
          <div className="block remove-bottom">
            <div
              className="fixed-bg shp-bg back-post-rgttp"
              style={{ backgroundImage: "url(/images/bg-shp3.png)" }}
            ></div>
            <div className="container">
              <div className="feat-wrp2">
                <div className="row align-items-center">
                  <div className="col-md-5 col-sm-6 col-lg-5">
                    <div className="feat-cap">
                      <h2 itemProp="headline">
                        <strong>We are non-profit </strong>
                        for the <strong>criminal</strong> and{" "}
                        <strong>social</strong> injustice
                      </h2>
                      <p itemProp="description">
                        We are dedicated to addressing the causes of criminality
                        and restoring criminal’s{" "}
                        <strong className="text-warning font-italic">
                          self-respect
                        </strong>
                        , {""}
                        <strong className="text-warning font-italic">
                          public safety
                        </strong>{" "}
                        and{" "}
                        <strong className="text-warning font-italic">
                          sane values
                        </strong>{" "}
                      </p>
                      <Link
                        className="thm-btn"
                      to="/apply"
                        title=""
                        itemProp="url"
                      >
                        Get Help<span></span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-7 col-sm-6 col-lg-7">
                    <div className="feat-img2 text-right">
                      <img
                        src="/images/resources/feat-mckp.png"
                        alt="feat-mckp.png"
                        itemProp="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Partners />
        {/* Featured Applicants */}
        <section>
          <div className="block remove-gap">
            <div className="container">
              <div className="sec-ttl text-center">
                <div className="sec-ttl-inr">
                  <h2 itemProp="headline">Recent Case</h2>
                  <span>
                    Explore the list of people seeking for your support
                  </span>
                  <i className="flaticon-sweat thm-clr"></i>
                </div>
              </div>
              <div className="cus-wrp style3 text-center remove-ext9">
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-lg-3">
                    <div className="cus-bx3">
                      <div className="cus-thmb">
                        <a href="cause-detail.html" title="" itemProp="url">
                          <img
                            src="/images/resources/cus-img3-1.jpg"
                            alt="cus-img3-1.jpg"
                            itemProp="image"
                          />
                        </a>
                      </div>
                      <div className="cus-inf3">
                        <h4 itemProp="headline">
                          <a href="cause-detail.html" title="">
                            Southern Poverty Law Center released
                          </a>
                        </h4>
                        <span className="cus-amt">
                          <i className="thm-clr">$120 Raised</i> of $1,000
                        </span>
                        <div className="progress">
                          <div className="progress-bar thm-bg wdth20">
                            <span>20%</span>
                          </div>
                        </div>
                        <a
                          className="thm-btn"
                          href="donate-now.html"
                          title=""
                          itemProp="url"
                        >
                          Donate Now<span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-lg-3">
                    <div className="cus-bx3">
                      <div className="cus-thmb">
                        <a href="cause-detail.html" title="" itemProp="url">
                          <img
                            src="/images/resources/cus-img3-2.jpg"
                            alt="cus-img3-2.jpg"
                            itemProp="image"
                          />
                        </a>
                      </div>
                      <div className="cus-inf3">
                        <h4 itemProp="headline">
                          <a href="cause-detail.html" title="">
                            Principles the Charity Stands for, the Aims
                          </a>
                        </h4>
                        <span className="cus-amt">
                          <i className="thm-clr">$120 Raised</i> of $1,000
                        </span>
                        <div className="progress">
                          <div className="progress-bar thm-bg wdth45">
                            <span>45%</span>
                          </div>
                        </div>
                        <a
                          className="thm-btn"
                          href="donate-now.html"
                          title=""
                          itemProp="url"
                        >
                          Donate Now<span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-lg-3">
                    <div className="cus-bx3">
                      <div className="cus-thmb">
                        <a href="cause-detail.html" title="" itemProp="url">
                          <img
                            src="/images/resources/cus-img3-3.jpg"
                            alt="cus-img3-3.jpg"
                            itemProp="image"
                          />
                        </a>
                      </div>
                      <div className="cus-inf3">
                        <h4 itemProp="headline">
                          <a href="cause-detail.html" title="">
                            We've found it helpful to Break down
                          </a>
                        </h4>
                        <span className="cus-amt">
                          <i className="thm-clr">$120 Raised</i> of $1,000
                        </span>
                        <div className="progress">
                          <div className="progress-bar thm-bg wdth65">
                            <span>65%</span>
                          </div>
                        </div>
                        <a
                          className="thm-btn"
                          href="donate-now.html"
                          title=""
                          itemProp="url"
                        >
                          Donate Now<span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-lg-3">
                    <div className="cus-bx3">
                      <div className="cus-thmb">
                        <a href="cause-detail.html" title="" itemProp="url">
                          <img
                            src="/images/resources/cus-img3-4.jpg"
                            alt="cus-img3-4.jpg"
                            itemProp="image"
                          />
                        </a>
                      </div>
                      <div className="cus-inf3">
                        <h4 itemProp="headline">
                          <a href="cause-detail.html" title="">
                            Give to Charity on a Regular Basis
                          </a>
                        </h4>
                        <span className="cus-amt">
                          <i className="thm-clr">$120 Raised</i> of $1,000
                        </span>
                        <div className="progress">
                          <div className="progress-bar thm-bg wdth80">
                            <span>80%</span>
                          </div>
                        </div>
                        <a
                          className="thm-btn"
                          href="donate-now.html"
                          title=""
                          itemProp="url"
                        >
                          Donate Now<span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* We Reachout through the media */}
        <section>
          <div className="block remove-gap">
            <div
              className="fixed-bg shp-bg back-post-lftbtm"
              style={{ backgroundImage: "url(/images/bg-shp1.png)" }}
            ></div>
            <div className="container">
              <div className="abt-wrp3">
                <div className="row align-items-center">
                  <div className="col-md-6 col-sm-12 col-lg-6">
                    <div className="abt-img">
                      <img
                        src="/images/resources/orgn-mckp1.png"
                        alt="orgn-mckp1.png"
                        itemProp="image"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 col-lg-6">
                    <div className="abt-desc3">
                      <h2 itemProp="headline">We reachout through the media</h2>
                      <p itemProp="description">
                        We believe with our TV and Radio shows, we can inspire
                        the lives of Thousands of inmates. Our Dealing with
                        Crime Books and Reality Show aims at addressing the
                        causes of criminality and restoring public safety and
                        sane values with inspirational and life changing quotes
                        from various speakers. This program is to be conducted
                        at least twice in every month.
                      </p>
                      <a
                        className="thm-btn"
                        href="/donate"
                        title=""
                        itemProp="url"
                      >
                        Start Donation<span></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* We Rehabilitate */}
        <section>
          <div className="block no-padding">
            <div className="container">
              <div className="sec-ttl text-center">
                <div className="sec-ttl-inr">
                  <h2 itemProp="headline">Fundraising Campaigns</h2>
                  <span>Technology that made they in social fundraising</span>
                  <i className="flaticon-sweat thm-clr"></i>
                </div>
              </div>
              <div className="abt-wrp3 rev">
                <div className="row align-items-center">
                  <div className="col-md-5 col-sm-12 col-lg-5">
                    <div className="abt-desc3">
                      <h2 itemProp="headline">
                        We don't just{" "}
                        <strong className="text-warning">Advocate</strong> we{" "}
                        <strong className="text-link">Rehabilitate</strong>
                      </h2>
                      <p itemProp="description">
                        We also develop and provide evidence-based
                        rehabilitation programs that facilitate positive change
                        in the lives of offenders through our dedicated team of
                        social skilled workers.
                      </p>
                      <Link
                        className="thm-btn"
                        to="/faq"
                        title=""
                        itemProp="url"
                      >
                        Join us<span></span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-7 col-sm-12 col-lg-7">
                    <div className="abt-img">
                      <img
                        src="/images/resources/orgn-mckp2.png"
                        alt="orgn-mckp2.png"
                        itemProp="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Recent Articles */}
        <section>
          <div className="block gray-grdnt-bg">
            <div className="container">
              <div className="sec-ttl text-center">
                <div className="sec-ttl-inr">
                  <h2 itemProp="headline">Recent Articles</h2>
                  <span>
                    Explore fundraising ideas, strategies, and best practices
                  </span>
                  <i className="flaticon-sweat thm-clr"></i>
                </div>
              </div>
              <div className="blg-wrp style3 remove-ext3">
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-lg-4">
                    <div className="blg-bx3">
                      <span className="thm-clr">News</span>
                      <h4 itemProp="headline">
                        <a href="blog-detail.html" title="" itemProp="url">
                          Number of People for Trapped in B&B's
                        </a>
                      </h4>
                      <p itemProp="description">
                        Lorem ipsum dolor sit amet, ilmes loribus officia
                        aspernatur quomum error incidunt exceptur.
                      </p>
                      <ul className="pst-mta">
                        <li>
                          <a href="/" title="" itemProp="url">
                            February 15, 2018
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-comments thm-clr"></i>20
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-lg-4">
                    <div className="blg-bx3">
                      <span className="thm-clr">News</span>
                      <h4 itemProp="headline">
                        <a href="blog-detail.html" title="" itemProp="url">
                          32000 Senior Charity Digital Professionals
                        </a>
                      </h4>
                      <p itemProp="description">
                        Lorem ipsum dolor sit amet, ilmes loribus officia
                        aspernatur quomum error incidunt exceptur.
                      </p>
                      <ul className="pst-mta">
                        <li>
                          <a href="/" title="" itemProp="url">
                            August 18, 2019
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-comments thm-clr"></i>25
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-lg-4">
                    <div className="blg-bx3">
                      <span className="thm-clr">News</span>
                      <h4 itemProp="headline">
                        <a href="blog-detail.html" title="" itemProp="url">
                          Membership options and Prices.
                        </a>
                      </h4>
                      <p itemProp="description">
                        Lorem ipsum dolor sit amet, ilmes loribus officia
                        aspernatur quomum error incidunt exceptur.
                      </p>
                      <ul className="pst-mta">
                        <li>
                          <a href="/" title="" itemProp="url">
                            July 25, 2018
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-comments thm-clr"></i>65
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vw-mr text-center">
                <a
                  className="thm-btn"
                  href="blog-style3.html"
                  title=""
                  itemProp="url"
                >
                  View All Posts<span></span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
