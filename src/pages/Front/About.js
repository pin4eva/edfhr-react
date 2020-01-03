import React from "react";
import { Link } from "react-router-dom";
import TopBG from "../../components/Front/TopBG";

const About = () => {
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
              <li className="breadcrumb-item active">About Us</li>
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
        <div className="block remove-bottom">
          <div className="container">
            <div className="srv-wrp remove-ext4 text-center">
              <div className="row">
                <div className="col-md-3 col-sm-6 col-lg-3">
                  <div className="srv-bx">
                    <i className="flaticon-ribbon thm-clr"></i>
                    <div className="srv-inr">
                      <h4 itemProp="headline">we work</h4>
                      <p itemProp="description">
                        people whose lives have been upended by war, conflict
                        and natural disasters
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-lg-3">
                  <div className="srv-bx">
                    {/* <i className="flaticon-tshirt thm-clr"></i> */}
                    <i className="fas fa-gavel text-link"></i>
                    <div className="srv-inr">
                      <h4 itemProp="headline">we serve</h4>
                      <p itemProp="description">
                        people whose lives have been upended by war, conflict
                        and natural disasters
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-lg-3">
                  <div className="srv-bx">
                    <i className="flaticon-heart-1 thm-clr"></i>
                    <div className="srv-inr">
                      <h4 itemProp="headline">we respond</h4>
                      <p itemProp="description">
                        people whose lives have been upended by war, conflict
                        and natural disasters
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-lg-3">
                  <div className="srv-bx">
                    <i className="flaticon-charity thm-clr"></i>
                    <div className="srv-inr">
                      <h4 itemProp="headline">we rehabilitate</h4>
                      <p itemProp="description">
                        people whose lives have been upended by war, conflict
                        and natural disasters
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="block">
          <div className="container">
            <div className="abt-pg-wrp">
              <h2 itemProp="headline">
                Change The Culture of{" "}
                <strong className="thm-clr">
                  Giving in Affluent Countries
                </strong>{" "}
                While Dramatically Raising Annual Donations
              </h2>
              <div className="abt-pg-inr">
                <div className="row align-items-center">
                  <div className="col-md-7 col-sm-12 col-lg-7">
                    <div className="abt-pg-desc">
                      <p itemProp="description">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lor when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also
                        the leap into ele ctronic typesetting, remaining
                        essentially unchanged. Lorem Ipsum is simply d em Ipsum
                        has been the industry's standard 1960s with the release
                        of Letra set sheets containing
                      </p>
                      <p itemProp="description">
                        Lorem Ipsum passag It is a long established fact that a
                        reade r will be distracte The point of using Lorem Ipsum
                        is that it has a more-or-less normal distribution
                        eadable English.{" "}
                      </p>
                      <p className="thm-clr blc-wt">
                        “ Raising more money than could otherwise be possible
                        through individual donations. Chances are, many of your
                        family members”
                      </p>
                      <p itemProp="description">
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsu web sites still in their infancy.
                        Various versions have evolved over the years, so and a
                        search for 'lorem ipsum' will uncover many web sites
                        still in their infancy arious versions have evolved over
                        the years, soetimes by accident, sometimes on purpose
                        (injected humour and the like).
                      </p>
                      <img
                        src="/images/sgn.png"
                        alt="sgn.png"
                        itemProp="image"
                      />
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12 col-lg-5">
                    <div className="abt-pg-imgs">
                      <img
                        src="/images/resources/abt-pg-img1-1.jpg"
                        alt="abt-pg-img1-1.jpg"
                        itemProp="image"
                      />
                      <img
                        src="/images/resources/abt-pg-img1-2.jpg"
                        alt="abt-pg-img1-2.jpg"
                        itemProp="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="block bottom-spac80 top-spac80 thm-layer opc9">
          <div
            className="fixed-bg patern-bg thm-bg back-blend-multiply"
            style={{ backgroundImage: "url(/images/pattern-bg1.jpg)" }}
          ></div>
          <div className="container">
            <div className="ceo-wrp">
              <div className="row align-items-center">
                <div className="col-md-3 col-sm-4 col-lg-3">
                  <span>
                    <img
                      src="/images/resources/ceo-img.jpg"
                      alt="ceo-img.jpg"
                      itemProp="image"
                    />
                  </span>
                </div>
                <div className="col-md-9 col-sm-8 col-lg-9">
                  <div className="ceo-msg">
                    <p itemProp="description">
                      “ One person can make all the difference for a child
                      across the globe...Children International is living proof
                      that, although helping just one person. ”
                    </p>
                    <cite>- Shalynn p, Ci Sponsor Since 2019</cite>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="block gray-layer opc97">
          <div
            className="fixed-bg patern-bg"
            style={{ backgroundImage: "url(/images/pattern-bg2.png)" }}
          ></div>
          <div className="container">
            <div className="fq-wrp">
              <div className="row">
                <div className="col-md-5 col-sm-5 col-lg-5">
                  <div className="fq-lst-wrp">
                    <h2 itemProp="headline">Helping Faq's</h2>
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#fq-tb1"
                        >
                          How will my donation be used
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#fq-tb2"
                        >
                          How do increase intake?
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#fq-tb3"
                        >
                          International do for Supplementation?
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#fq-tb4"
                        >
                          Is my donation tax-deductible?
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-7 col-sm-7 col-lg-7">
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="fq-tb1">
                      <h2 itemProp="headline" className="thm-clr">
                        How will my donation be used?
                      </h2>
                      <p itemProp="description">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem m has been the industry's
                        standard dummy text ever since the 1500s, when anui wn
                        printer took a galley Lorem Ipsum is simply dummy text
                        of the printing
                      </p>
                      <p itemProp="description">
                        and typesetting industry. Lorem Ipsu m has been the
                        industry's standard dummin since the 1500s, when an
                        unknown printer took a galley
                      </p>
                    </div>
                    <div className="tab-pane fade" id="fq-tb2">
                      <h2 itemProp="headline" className="thm-clr">
                        How do increase intake?
                      </h2>
                      <p itemProp="description">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem m has been the industry's
                        standard dummy text ever since the 1500s, when anui wn
                        printer took a galley Lorem Ipsum is simply dummy text
                        of the printing
                      </p>
                      <p itemProp="description">
                        and typesetting industry. Lorem Ipsu m has been the
                        industry's standard dummin since the 1500s, when an
                        unknown printer took a galley
                      </p>
                    </div>
                    <div className="tab-pane fade" id="fq-tb3">
                      <h2 itemProp="headline" className="thm-clr">
                        International do for Supplementation?
                      </h2>
                      <p itemProp="description">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem m has been the industry's
                        standard dummy text ever since the 1500s, when anui wn
                        printer took a galley Lorem Ipsum is simply dummy text
                        of the printing
                      </p>
                      <p itemProp="description">
                        and typesetting industry. Lorem Ipsu m has been the
                        industry's standard dummin since the 1500s, when an
                        unknown printer took a galley
                      </p>
                    </div>
                    <div className="tab-pane fade" id="fq-tb4">
                      <h2 itemProp="headline" className="thm-clr">
                        Is my donation tax-deductible?
                      </h2>
                      <p itemProp="description">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem m has been the industry's
                        standard dummy text ever since the 1500s, when anui wn
                        printer took a galley Lorem Ipsum is simply dummy text
                        of the printing
                      </p>
                      <p itemProp="description">
                        and typesetting industry. Lorem Ipsu m has been the
                        industry's standard dummin since the 1500s, when an
                        unknown printer took a galley
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="block">
          <div className="container">
            <div className="sec-ttl text-center">
              <div className="sec-ttl-inr">
                <h2 itemProp="headline">Meet our Experts</h2>
                <span>adipisicing elit Rem autem voluptatem obcaecati</span>
                <i className="flaticon-sweat thm-clr"></i>
              </div>
            </div>
            <div className="tem-wrp text-center remove-ext4">
              <div className="row">
                <div className="col-md-3 col-sm-6 col-lg-3">
                  <div className="tem-bx">
                    <div
                      className="tem-thmb"
                      style={{
                        backgroundImage: "url(/images/resources/tem-img1-1.jpg)"
                      }}
                    >
                      <a href="team-detail.html" title="" itemProp="url">
                        <i className="fa fa-chevron-right"></i>
                      </a>
                      <div className="tem-scl">
                        <Link
                          className="facebook"
                          to="/"
                          title="Facebook"
                          itemProp="url"
                          target="_blank"
                        >
                          <i className="fa fa-facebook"></i>
                        </Link>
                        <Link
                          className="pinterest"
                          to="/"
                          title="Pinterest"
                          itemProp="url"
                          target="_blank"
                        >
                          <i className="fa fa-pinterest-p"></i>
                        </Link>
                        <Link
                          className="twitter"
                          to="/"
                          title="Twitter"
                          itemProp="url"
                          target="_blank"
                        >
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="tem-inf">
                      <h4 itemProp="headline">
                        <Link to="/" title="" itemProp="url">
                          Lina Carlos
                        </Link>
                      </h4>
                      <span>Helping Volunteer</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-lg-3">
                  <div className="tem-bx">
                    <div
                      className="tem-thmb"
                      style={{
                        backgroundImage: "url(/images/resources/tem-img1-2.jpg)"
                      }}
                    >
                      <Link href="team-detail.html" title="" itemProp="url">
                        <i className="fa fa-chevron-right"></i>
                      </Link>
                      <div className="tem-scl">
                        <Link
                          className="facebook"
                          to="/"
                          title="Facebook"
                          itemProp="url"
                          target="_blank"
                        >
                          <i className="fa fa-facebook"></i>
                        </Link>
                        <Link
                          className="pinterest"
                          to="/"
                          title="Pinterest"
                          itemProp="url"
                          target="_blank"
                        >
                          <i className="fa fa-pinterest-p"></i>
                        </Link>
                        <Link
                          className="twitter"
                          to="/"
                          title="Twitter"
                          itemProp="url"
                          target="_blank"
                        >
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="tem-inf">
                      <h4 itemProp="headline">
                        <Link to="/" title="" itemProp="url">
                          Marina Glogovac
                        </Link>
                      </h4>
                      <span>CEO, CanadaHelps</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-lg-3">
                  <div className="tem-bx">
                    <div
                      className="tem-thmb"
                      style={{
                        backgroundImage: "url(/images/resources/tem-img1-3.jpg)"
                      }}
                    >
                      <a href="team-detail.html" title="" itemProp="url">
                        <i className="fa fa-chevron-right"></i>
                      </a>
                      <div className="tem-scl">
                        <Link
                          className="facebook"
                          to="/"
                          title="Facebook"
                          itemProp="url"
                          target="_blank"
                        >
                          <i className="fa fa-facebook"></i>
                        </Link>
                        <Link
                          className="pinterest"
                          to="/"
                          title="Pinterest"
                          itemProp="url"
                          target="_blank"
                        >
                          <i className="fa fa-pinterest-p"></i>
                        </Link>
                        <a
                          className="twitter"
                          href="/"
                          title="Twitter"
                          itemProp="url"
                          target="_blank"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                    <div className="tem-inf">
                      <h4 itemProp="headline">
                        <a href="team-detail.html" title="" itemProp="url">
                          Maria Walim
                        </a>
                      </h4>
                      <span>Event Speaker</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-lg-3">
                  <div className="tem-bx">
                    <div
                      className="tem-thmb"
                      style={{
                        backgroundImage: "url(/images/resources/tem-img1-4.jpg)"
                      }}
                    >
                      <a href="team-detail.html" title="" itemProp="url">
                        <i className="fa fa-chevron-right"></i>
                      </a>
                      <div className="tem-scl">
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
                      </div>
                    </div>
                    <div className="tem-inf">
                      <h4 itemProp="headline">
                        <a href="team-detail.html" title="" itemProp="url">
                          Gorge James
                        </a>
                      </h4>
                      <span>President & CEO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
