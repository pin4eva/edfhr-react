import React from "react";
import TopBG from "../../../components/Front/TopBG";

const BlogDetail = () => {
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
              <li className="breadcrumb-item">
                <a href="blog-style4.html" title="" itemProp="url">
                  Blog
                </a>
              </li>
              <li className="breadcrumb-item active">
                Blog Details With No Sidebar
              </li>
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
            <div className="blg-dtl-thmb">
              <img
                src="/images/resources/blg-dtl-img2-1.jpg"
                alt="blg-dtl-img2-1.jpg"
                itemProp="image"
              />
            </div>
            <div className="blog-dtl-wrp">
              <div className="blg-inf">
                <span className="blg-dat thm-bg">
                  <a href="/" title="" itemProp="url">
                    May 15, 2019
                  </a>
                </span>
                <span className="blg-tgs">
                  <i className="fa fa-tag"></i>
                  <a href="/" title="" itemProp="url">
                    Charity
                  </a>
                  ,
                  <a href="/" title="" itemProp="url">
                    poor
                  </a>
                  ,
                  <a href="/" title="" itemProp="url">
                    people
                  </a>
                  ,
                  <a href="/" title="" itemProp="url">
                    ideas
                  </a>
                </span>
                <h1 itemProp="headline">Highlight some of the fundraising</h1>
                <ul className="pst-mta">
                  <li>
                    <i className="fa fa-user thm-clr"></i>
                    <a href="/" title="" itemProp="url">
                      James Smith
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-comments thm-clr"></i>20
                  </li>
                </ul>
              </div>
              <div className="blg-dtl-desc">
                <p itemProp="description">
                  Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                  dolor sit amet, con lorim ectetur Nulla fringilla purus at leo
                  dignisnt um accumsan leo vel tempor. Sit amet ukmicursus nisl
                  aliquam. Aliquam et elit eu nunc rhoncus viverra quis at
                  felis. Sed do alim consectetur Nulla fringillatetur
                  adipisicing elit at leo dignissim congue. Mauris ele yum
                  mentum accumsan leo vel tempor. adipisic ing elit, sed
                  do.Lorem ipsum dolor sit amet, con lorim ectetur Nulla
                  fringilla purus at leo dignisnt um accumsan leo vel tempor.
                  Sit amet ukmicursus nisl aliquam. Aliquam et elit eu nunc
                  rhoncus viverra quis at felis
                </p>
                <p itemProp="description">
                  viverra quis at felis et netus et malesuada fames ac turpis
                  egestas. Aenean com ileo modbus et magnis dis parturient
                  montes vil et ukmicursus nisl aliquam. Aliquam et elit
                  eumes....
                </p>
                <blockquote
                  className="alignright"
                  style={{ backgroundImage: "url(/images/aenprtt - bg1.jpg)" }}
                >
                  <i className="fa fa-quote-left"></i>
                  <p itemProp="description">
                    dolor st amet, consetetur sadi pscing elit dolore lorime
                    smagna Lorimes aliquyam.
                  </p>
                </blockquote>
                <p itemProp="description">
                  leo vel tempor. Sit amet ukmicursus nisl aliquam. Aliquam et
                  elit eu nunc rhoncus viverra quis at felis. Sed do alim.
                </p>
                <ul>
                  <li>Aliquam et elit eu nunci consectetur.</li>
                  <li>Nulla fringillatetur adipisic</li>
                  <li>Dosectetur adipisicing elit, sed ectetur</li>
                  <li>Malesuada fames ac turpis egestas</li>
                  <li>Charity Education poor people.</li>
                </ul>
              </div>

              <div className="cmt-wrp">
                <h4 itemProp="headline">02 Comments</h4>
                <ul className="cmt-lst">
                  <li>
                    <div className="cmt-bx">
                      <img
                        src="/images/resources/cmt-img1-1.jpg"
                        alt="cmt-img1-1.jpg"
                        itemProp="image"
                      />
                      <div className="cmt-inf">
                        <h6 itemProp="headline">Jockon Don</h6>
                        <span className="thm-clr">10 months ago</span>
                        <p itemProp="description">
                          Cupcake ipsum dolor sit amet. Dragée sweet roll
                          tiramisu sweet cupcake croissant lollipop candy
                          Cupcake ip sum dolor sit amet. Dragée sweet roll
                          tiramisu sweet cupcake croissant lollipop candy.
                        </p>
                        <a
                          className="comment-reply-link"
                          href="/"
                          title=""
                          itemProp="url"
                        >
                          Reply
                        </a>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <div className="cmt-bx">
                          <img
                            src="/images/resources/cmt-img1-2.jpg"
                            alt="cmt-img1-2.jpg"
                            itemProp="image"
                          />
                          <div className="cmt-inf">
                            <h6 itemProp="headline">Thomas Tom</h6>
                            <span className="thm-clr">10 months ago</span>
                            <p itemProp="description">
                              Cupcake ipsum dolor gée sweet roll tiramisu sweet
                              cupcake croissant lollipop candy Cupcake ip Dragée
                              sweet roll tiramisu sweet cupcake croissant
                              lollipop candy.
                            </p>
                            <a
                              className="comment-reply-link"
                              href="/"
                              title=""
                              itemProp="url"
                            >
                              Reply
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="rply-cmt">
                <h4 itemProp="headline">Leave A Comment</h4>
                <form>
                  <div className="row mrg10">
                    <div className="col-md-6 col-sm-12 col-lg-6">
                      <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-6">
                      <input type="email" placeholder="Your Email" />
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12">
                      <input type="text" placeholder="Subject" />
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12">
                      <textarea placeholder="Message"></textarea>
                      <button className="thm-btn" type="submit">
                        Send Message<span></span>
                      </button>
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

export default BlogDetail;
