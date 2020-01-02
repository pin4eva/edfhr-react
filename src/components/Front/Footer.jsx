import React from "react";
import Logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="frontFooter">
      <div className="block remove-gap">
        <div className="container">
          <div className="ftr-dta-wrp3 v2 text-center">
            <div className="ftr-dta-inr">
              <div className="logo">
                <a href="index.html" alt="Logo" itemProp="url">
                  <img src={Logo} alt="logo3.png" itemProp="image" />
                </a>
              </div>
              <p itemProp="description">
                &copy; Copyright
                <span className="thm-clr pl-1">
                  {new Date().getFullYear()}
                  <a
                    href="index.html"
                    title="Povert"
                    itemProp="url"
                    className="pl-1"
                  >
                    ed Foundation
                  </a>
                </span>
                . All rights reserved.
              </p>
              <ul className="btm-lnks">
                <li>
                  <Link to="/" title="" itemProp="url">
                    Site Map
                  </Link>
                </li>
                <li>
                  <Link to="/" title="" itemProp="url">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link to="/" title="" itemProp="url">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/" title="" itemProp="url">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <div className="scl-btns">
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
                  className="twitter"
                  to="/"
                  title="Twitter"
                  itemProp="url"
                  target="_blank"
                >
                  <i className="fa fa-twitter"></i>
                </Link>
                <Link
                  className="pinterest"
                  to="#"
                  title="Facebook"
                  itemProp="url"
                  target="_blank"
                >
                  <i className="fa fa-pinterest-p"></i>
                </Link>
                <Link
                  className="linkedin"
                  to="/"
                  title="Facebook"
                  itemProp="url"
                  target="_blank"
                >
                  <i className="fa fa-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
