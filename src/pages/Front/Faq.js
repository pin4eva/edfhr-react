import React from "react";
import styled from "styled-components";

const Faq = () => {
  return (
    <div>
      <section>
        <div className="block no-padding">
          <div
            className="pg-tp-bg"
            style={{ backgroundImage: "url(/images/pg-tp-bg1.jpg)" }}
          ></div>
        </div>
      </section>
      <div className="container">
        <div className="question mt-5" style={Wrapper}>
          <Question>
            <div style={{ width: "70%", margin: "auto" }}>
              {" "}
              <h6 className="text-center">
                {" "}
                A police man hit me with a stick today while coming from work.
                Does the Police man have the right to hit me without just
                reason?{" "}
              </h6>
            </div>
            <i className="fas fa-chevron-right"></i>
          </Question>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            ratione ab deleniti voluptatibus tempore ipsam aspernatur recusandae
            vero expedita! Optio, quam? Consequatur perferendis recusandae atque
            id nisi, rerum ex sapiente.
          </p>
        </div>
      </div>
    </div>
  );
};

const Wrapper = {
  maxWidth: "60vw",
  margin: " auto"
};

const Question = styled.div`
  background: #eee;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

export default Faq;
