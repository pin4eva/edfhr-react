import React from "react";
import { Link } from "react-router-dom";
import Navitems from "./NavItems";
import Logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <>
      <header className="style4 stick flex">
        <div className="container">
          <div className="wb-lgmnu-wrp flex d-flex justify-content-between">
            <div className="logo">
              <Link to="/" title="Home" itemProp="url">
                <img src={Logo} alt="logo2.png" itemProp="image" width="150" />
              </Link>
            </div>
            <div className="tp-scl">
              <Link to="/" title="Facebook" itemProp="url" target="_blank">
                <i className="fa fa-facebook"></i>
              </Link>
              <Link to="/" title="Twitter" itemProp="url" target="_blank">
                <i className="fa fa-twitter"></i>
              </Link>
              <Link to="/" title="Pinterest" itemProp="url" target="_blank">
                <i className="fa fa-pinterest-p"></i>
              </Link>
              <Link to="/" title="Linkedin" itemProp="url" target="_blank">
                <i className="fa fa-linkedin"></i>
              </Link>
            </div>
            <nav>
              <div>
                <ul>
                  {Navitems.map((item, i) => (
                    <li title={item.name} key={i + 1}>
                      <Link to={item.to}> {item.name} </Link>
                    </li>
                  ))}
                </ul>
                <span className="mnu-btn">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div className="sticky-header flex">
        <div className="container">
          <div className="wb-lgmnu-wrp flex justify-content-between">
            <div className="logo">
              <Link to="/" title="Home" itemProp="url">
                <img src={Logo} alt="logo2.png" itemProp="image" />
              </Link>
            </div>
            <nav>
              <div>
                <ul>
                  {Navitems.map((item, i) => (
                    <li key={i + 1} title={item.name} itemProp="url">
                      <Link to={item.to}> {item.name} </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="rspns-hdr">
        <div className="rspns-lg-mnu-br">
          <div className="container">
            <div className="logo">
              <Link to="/" title="Home" itemProp="url">
                <img src="/images/logo2.png" alt="logo2.png" itemProp="image" />
              </Link>
            </div>
            <span className="rspns-mnu-btn">
              <i className="fa fa-align-justify"></i>
            </span>
          </div>
          <div className="rspns-mnu">
            <span className="rspns-cls-btn">
              <i className="fa fa-times"></i>
            </span>
            <ul>
              {Navitems.map((item, i) => (
                <li key={i + 1} itemProp="url" title={item.name}>
                  <Link to={item.to}> {item.name} </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rspns-lnks-br">
          <div className="rspns-lnks-lst">
            <a href="/" title="" itemProp="url">
              <i className="flaticon-user"></i>
              <span>Login</span>
            </a>
            <a href="/" title="" itemProp="url">
              <i className="flaticon-portfolio"></i>
              <span>Careers</span>
            </a>
            <a href="/" title="" itemProp="url">
              <i className="flaticon-hand"></i>
              <span>Volunteer</span>
            </a>
          </div>
          <Link className="thm-btn" to="/donate" title="" itemProp="url">
            Donate<span></span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
