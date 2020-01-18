// import { Container, styled } from "@material-ui/core";
import React from "react";
import TypeA from "../../components/Forms/TypeA.jsx";
import TypeB from "../../components/Forms/TypeB.jsx";
import TypeC from "../../components/Forms/TypeC";

const Draft = () => {
  // const [caseType, setCaseType] = useState("");

  // const handleChange = e => {
  //   e.preventDefault();
  //   // setCaseType({
  //   //   [e.target.name]:
  //   //     e.target.type === "number" ? parseInt(e.target.value) : e.target.value
  //   // });
  //   setCaseType(e.target.value);
  // };
  // const generate = async e => {
  //   e.preventDefault();
  //   let { data } = await axios
  //     .get(`http://localhost:3005/api/v1/applicants/token/${caseType}`)
  //     .catch(err => console.log(err));
  //   if (!data.success) {
  //     return alert(data.msg);
  //   } else {
  //     console.log(data.data);
  //   }
  // };

  return (
    <>
      <div className="container">
        <div className="col-md-6 mx-auto">
          <div className="md-form">
            <input type="text" id="form1" className="form-control" />
            <label>Client's ID</label>
          </div>
          <button className="btn btn-success d-block">generate</button>
        </div>
        <div style={{ maxWidth: "70%", margin: "auto" }}>
          <TypeA />
          <TypeB />
          <TypeC />
        </div>
      </div>
    </>
  );
};

// const Container1 = styled.div`
//   max-width: 60vw;
//   margin: auto !important;
// `;

export default Draft;
