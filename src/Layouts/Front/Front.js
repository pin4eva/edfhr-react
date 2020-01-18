import React from "react";
import styled from "styled-components";
import Footer from "../../components/Front/Footer";
import Header from "../../components/Front/Header";
import "./css/icons.min.css";
import "./css/bootstrap.min.css";
import "./css/bootstrap-select.min.css";
import "./css/animate.min.css";
import "./css/owl.carousel.min.css";
import "./css/fancybox.min.css";
import "./css/perfect-scrollbar.css";
import "./css/style.css";
import "./css/responsive.css";
import "./css/slick.css";
import "./css/color.css";
// import WOW from "./js/wow.min.js";
import "./js/custom-scripts";
const Front = props => {
  return (
    <Main>
      <Header />
      {props.children}{" "}
      <FrontFooter>
        <Footer />
      </FrontFooter>
    </Main>
  );
};

const Main = styled.main`
  /* height: 100vh; */
  /* position: relative; */
`;
const FrontFooter = styled.footer`
  /* position: absolute; */
  bottom: 0;
`;

export default Front;
