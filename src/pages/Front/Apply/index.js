import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import uuid from "uuid/v4";
import Relation, { RelForm } from "../../../components/Front/Apply/Relation";
import TopBG from "../../../components/Front/TopBG";
import states from "../../../db/states";
import Exhibit, { ExForm } from "../../../components/Front/Apply/Exhibit";
import { Link } from "react-router-dom";

const Btn = ({ rightStep, leftStep }) => {
  return (
    <div className="d-flex justify-content-between">
      <button onClick={leftStep} className="btn border-link mt-3 rounded-0">
        <i className="fas fa-arrow-left pr-2"></i> Prev
      </button>
      <button onClick={rightStep} className="btn border-link mt-3 rounded-0">
        Next <i className="fas fa-arrow-right pl-2"></i>
      </button>
    </div>
  );
};

const Apply = () => {
  const [rels, setRel] = useState([
    { name: "Peter", phone: "07062275085", id: 1 }
  ]);
  const [exhibits, setExhibits] = useState([{}]);
  const [applicant, setApplicant] = useState({
    gender: "",
    proxy: false,
    name: "",
    address: "",
    breach_nature: "",
    breach_type: "",
    inPolice: false,
    daysPlus: false,
    inPrison: false,
    monthsPlus: false,
    arrested_on: "",
    arrested_at: "",
    offence_charged: "",
    offence_suspected: "",
    hasMates: false,
    case_mates: 0,
    mate_no: 0,
    itinerary: "",
    station: "",
    station2: "",
    station2_duration: 0,
    beaten: false,
    injured: false,
    injured_explained: "",
    station_duration: "",
    bailFee: false,
    bailAmount: 0,
    bail_explained: "",
    detention_cost: "",
    first_accused: "",
    arraigned_on: "",
    arraigned_at: "",
    state_orign: "",
    state_residence: "",
    lga: "",
    dppAdvice: "",
    brief: "",
    adjournment_date: "",
    agentID: ""
  });
  const {
    gender,
    inPrison,
    itinerary,
    station,
    case_mate,
    injured,
    bailFee,
    detention_cost,
    daysPlus,
    monthsPlus
  } = applicant;
  const [pageCount, setPageCount] = useState("step-1");

  const addRelations = ({ name, phone }) => {
    // setRel(...rel, { name, title });
    setRel([...rels, { name, phone, id: uuid() }]);
    console.log({ name, phone });
  };
  const removeRel = id => {
    const newRel = rels.filter(rel => rel.id !== id);
    setRel(newRel);
    console.log(rels);
  };

  // Add exhibit
  const addEx = ({ name, file }) => {
    setExhibits([...exhibits, { name, file, id: uuid() }]);
    console.log(exhibits);
    // console.log({ name, file });
  };
  const [answer, setAnswer] = useState("");
  const person = gender === "Male" ? "he" : gender === "Female" ? "she" : "you";
  const handleChange = e => {
    let { name, value, type } = e.target;
    if (value === "true" || value === "false") {
      value = JSON.parse(value);
    }
    if (type === "number") {
      value = Number(value);
    }
    // console.log({ value });
    setApplicant({
      ...applicant,
      [name]: value
    });
  };
  const handleAnswer = e => {
    // console.log(e.target.value);
    setAnswer(e.target.value);
  };

  const handleNext = x => {
    setPageCount(x);
  };

  const handleSubmit = () => {
    let caseType =
      inPrison && monthsPlus
        ? "D"
        : inPrison && !monthsPlus
        ? "C"
        : !inPrison && daysPlus
        ? "B"
        : !inPrison && !daysPlus
        ? "A"
        : "";

    let data = {
      ...applicant,
      caseType,
      relatives: rels,
      exhibits
    };
    console.log(data);
  };
  return (
    <>
      <TopBG />
      <div className="gray-bg3 brdcrmb-wrp">
        <div className="container">
          <div className="brdcrmb-inr flex justify-content-between">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/" title="" itemProp="url">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active">Applicant Registration</li>
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
      <div className="container">
        <Wrapper>
          <h2>{pageCount} </h2>
          <form>
            {/* Step 1 */}
            {pageCount === "step-1" && (
              <div id="step-1" className=" show m-100 my-auto">
                <div className="slc-wrp ">
                  <p className="h6">Do you have a lawyer ?</p>
                  <select
                    className="d-select border-link block-select"
                    onChange={e => {
                      e.target.value === "false"
                        ? setPageCount("step-2")
                        : alert(
                            "Please contact your lawyer for further advice"
                          );
                    }}
                  >
                    <option value={null}>Select an option</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No </option>
                  </select>
                </div>
                {/* <Btn /> */}
              </div>
            )}
            {/* Step 2 proxy */}
            {pageCount === "step-2" && (
              <div className="show" id="step-2">
                <div className="slc-wrp ">
                  <p className="h6">Who are you applying for ?</p>
                  <select
                    name="proxy"
                    className="d-select border-link block-select "
                    onChange={e => {
                      handleChange(e);
                      e.target.value === "false"
                        ? setPageCount("step-3b")
                        : setPageCount("step-3");
                    }}
                  >
                    <option value={null}>Select an option</option>
                    <option value={false}>Self</option>
                    <option value={true}>Another</option>
                  </select>
                </div>
              </div>
            )}
            {/* Step -3 proxy gender */}

            {pageCount === "step-3" && (
              <div className="show" id="step-3">
                <div className="slc-wrp ">
                  <p className="h6">Gender ?</p>
                  <select
                    className="d-select border-link block-select "
                    name="gender"
                    onChange={e => {
                      handleChange(e);
                      setPageCount("step-3b");
                    }}
                  >
                    <option value={null}>Select an option</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            )}
            {/* Generic Questions
                -nature of breach
                did the breach amount to any of the following ?
                [Step-4]
            */}
            {pageCount === "step-3b" && (
              <div className="show" id="step-3b">
                <Field className="form_group field">
                  <input
                    type="input"
                    className="form_field"
                    name="breach_nature"
                    onChange={handleChange}
                    required
                  />
                  <label className="form__label">
                    What is the nature of breach ?
                  </label>
                </Field>
                <p className="h6">
                  Did the breach amounts to a breach of any of the following
                </p>
                <select
                  className="d-select border-link block-select "
                  name="breach_type"
                  onChange={e => {
                    handleChange(e);
                    setPageCount("step-4");
                  }}
                >
                  {" "}
                  <option value={null}>Please select an option</option>
                  <option>Right to life</option>
                  <option>Right to dignity of human person</option>
                  <option>Right to personal liberty</option>
                  <option>Right to fair hearing</option>
                  <option>Right to Private and Family life</option>
                  <option>
                    Right to Freedom of thought, conscience and Religion
                  </option>
                  <option>Right to Freedom of expression and the press</option>
                  <option>Right to peaceful assembly and association</option>
                  <option>Right to freedom of movement.</option>
                  <option>Right to freedom from discrimination</option>
                  <option>
                    Right to acquire and own immovable property anywhere in
                    Nigeria.
                  </option>
                  <option>
                    Right to a clean and healthy environment devoid of
                    pollution.
                  </option>
                </select>
              </div>
            )}
            {/* *************************************************************** */}
            {/* Step 4 where are you inPrison ? */}
            {pageCount === "step-4" && (
              <div className="show" id="step-4">
                <div className="slc-wrp ">
                  <p className="h6">
                    Where {person === "you" ? "are you" : `is ${person}`} now ?
                  </p>
                  <select
                    type="boolean"
                    className="d-select border-link block-select "
                    name="inPrison"
                    onChange={e => {
                      handleChange(e);
                      let { value } = e.target;
                      value === "false"
                        ? setPageCount("step-5a")
                        : value === "true"
                        ? setPageCount("step-4a")
                        : alert("You don't belong here");
                    }}
                  >
                    <option value={null}>Select an option</option>
                    <option value={false}>In Police detention</option>
                    <option value={true}>In prison custody</option>
                    <option value={0}>Not in detention</option>
                  </select>
                </div>
              </div>
            )}
            {/* DPP's Advice. if inPrison */}
            {inPrison && pageCount === "step-4a" && (
              <div className="show" id="step-4a">
                <div className="slc-wrp ">
                  <div className="slc-wrp ">
                    <p className="h6">
                      {person === "you" ? `Are you` : `is ${person}`} waiting
                      for DPP’s advice?
                    </p>
                    <select
                      className="d-select border-link block-select "
                      onChange={e => {
                        let { value } = e.target;
                        value === "1"
                          ? setPageCount("step-5b")
                          : alert("please call bar. evans");
                      }}
                    >
                      <option value={null}>Please select an option</option>
                      <option value={1}>Yes</option>
                      <option value={2}>No. But facing criminal trial </option>
                      <option value={3}>No. I am already on bail </option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5a if in police detention */}

            {pageCount === "step-5a" && (
              <div className="show" id="step-5">
                <div className="slc-wrp ">
                  <p className="h6">
                    How long{" "}
                    {person === "you" ? `have ${person}` : `has ${person}`} been
                    in police detention?
                  </p>
                  <select
                    className="d-select border-link block-select "
                    name="daysPlus"
                    onChange={e => {
                      handleChange(e);
                      setPageCount("step-6");
                    }}
                  >
                    <option value={null}>Please select an option</option>
                    <option value={false}>Less than 24 hours</option>
                    <option value={true}>More than 24hours </option>
                  </select>
                </div>
              </div>
            )}

            {/*Step 5b if in Prison */}
            {pageCount === "step-5b" && (
              <div className="show" id="step-5b">
                <div className="slc-wrp ">
                  <p className="h6">
                    How long{" "}
                    {person === "you" ? `have ${person}` : `has ${person}`} been
                    in Prison Custody?
                  </p>
                  <select
                    className="d-select border-link block-select "
                    name="monthsPlus"
                    onChange={e => {
                      handleChange(e);
                      setPageCount("step-6");
                    }}
                  >
                    <option value={null}>Please select an option</option>
                    <option value={false}>Less than 3 months</option>
                    <option value={true}>More than 3 months </option>
                  </select>
                </div>
              </div>
            )}

            {/* ********************************************************************** */}

            {/* *************************************************************************************************************** */}
            {/* General Police Query */}
            {pageCount === "step-6" && (
              <div className="show">
                <div className="slc-wrp ">
                  <p className="h6">
                    When{" "}
                    {person === "he"
                      ? "was he"
                      : person === "she"
                      ? "was she"
                      : "were you"}{" "}
                    arrested{" "}
                  </p>
                  <input
                    type="date"
                    name="arrested_on"
                    onChange={handleChange}
                    className="form-control border-link rounded-0 py-4"
                  />
                </div>
                <Field className="form_group field">
                  <input
                    type="input"
                    className="form_field"
                    name="arrested_at"
                    onChange={handleChange}
                    required
                  />
                  <label className="form__label">
                    Where {""}
                    {person === "you" ? `were ${person}` : `was ${person}`}{" "}
                    arrested?
                  </label>
                </Field>
                <Field className="form_group field">
                  <input
                    type="input"
                    className="form_field"
                    name="offence_suspected"
                    onChange={handleChange}
                    required
                  />
                  <label className="form__label">
                    What is the Offence suspected of?
                  </label>
                </Field>
                <div className="slc-wrp ">
                  <p className="h6">Do you have a case mate</p>
                  <select
                    className="d-select border-link block-select "
                    name="case_mate"
                    onChange={handleChange}
                  >
                    <option value={null}>Select an option</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No </option>
                  </select>
                </div>
                {pageCount === "step-6" && case_mate && (
                  <Field className="show form_group field">
                    <input
                      type="number"
                      className="form_field"
                      name="mate_no"
                      required
                      onChange={handleChange}
                    />
                    <label className="form__label"> How many ?</label>
                  </Field>
                )}
                <Field className="form_group field">
                  <input
                    type="input"
                    className="form_field"
                    required
                    name="itinerary"
                    onChange={handleChange}
                  />
                  <label className="form__label">
                    Where were you going/coming from before the arrest?
                  </label>
                </Field>{" "}
                <Field className="form_group field">
                  <input
                    type="input"
                    className="form_field"
                    name="station"
                    onChange={handleChange}
                    required
                  />
                  <label className="form__label">
                    Name of the Police station taken to
                  </label>
                </Field>
                <div className="slc-wrp ">
                  <p className="h6">Were you beaten/tortured?</p>
                  <select
                    className="d-select border-link block-select "
                    name="beaten"
                    onChange={handleChange}
                  >
                    <option value={null}>Please select an option</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No </option>
                  </select>
                </div>
                <div className="slc-wrp ">
                  <p className="h6">Did you sustain any injury? </p>
                  <select
                    className="d-select border-link block-select "
                    name="injured"
                    onChange={handleChange}
                  >
                    <option value={null}>Please select an option</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No </option>
                  </select>
                </div>
                {injured && (
                  <Field className="form_group field">
                    <input
                      type="input"
                      className="form_field"
                      name="injured_explained"
                      required
                      onChange={handleChange}
                    />
                    <label className="form__label">Explain</label>
                  </Field>
                )}
                <div className="slc-wrp ">
                  <p className="h6">
                    Were you asked to pay some money for your release?{" "}
                  </p>
                  <select
                    className="d-select border-link block-select "
                    name="bailFee"
                    onChange={handleChange}
                  >
                    <option value={null}>Please select an option</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No </option>
                  </select>
                </div>
                {bailFee && (
                  <Field className="form_group field">
                    <input
                      type="number"
                      className="form_field"
                      name="bailAmount"
                      onChange={handleChange}
                      required
                    />
                    <label className="form__label">How much?</label>
                  </Field>
                )}
                {itinerary && station && (
                  <Btn
                    rightStep={() =>
                      inPrison ? handleNext("step-7") : handleNext("step-10")
                    }
                    leftStep={() =>
                      inPrison ? handleNext("step-5b") : handleNext("step-5a")
                    }
                  />
                )}
              </div>
            )}
            {/* Step 10 Relatives */}
            {pageCount === "step-10" && (
              <div className="show">
                <div>
                  <div className="mb-3">
                    {rels.length >= 1 ? (
                      <p className="h5 text-center my-3">
                        You have added {rels.length} of 3 relatives
                      </p>
                    ) : (
                      <p className="h5 text-center my-3">
                        Names of at least 3 Relatives and their Phone Numbers
                      </p>
                    )}

                    <ul
                      style={{ listStyle: "none", margin: "0", padding: "0" }}
                    >
                      {rels &&
                        rels.map(rel => (
                          <Relation
                            key={rel.id}
                            name={rel.name}
                            phone={rel.phone}
                            removeRel={() => {
                              removeRel(rel.id);
                            }}
                          />
                        ))}
                    </ul>
                  </div>

                  <div style={{ marginTop: "2.5rem" }}>
                    <RelForm
                      addRel={(name, phone) => {
                        rels.length >= 3
                          ? setPageCount("step-11")
                          : addRelations(name, phone);
                      }}
                      hide={rels.length === 3}
                      desc={rels.length === 3 ? "Next Page" : "Add Relation"}
                      variant={
                        rels.length === 1
                          ? "primary"
                          : rels.length === 2
                          ? "warning"
                          : rels.length === 3
                          ? "success"
                          : "secondary"
                      }
                    />
                  </div>
                </div>
              </div>
            )}
            {pageCount === "step-11" && (
              <div className="show" id="step-11">
                <div className="form-group mt-3">
                  <p className="h6">Briefly explain what happened</p>
                  <textarea
                    className="border-link rounded-0 form-control"
                    required
                    rows="8"
                    name="brief"
                    onChange={handleChange}
                  />
                </div>
                <Btn
                  rightStep={() => handleNext("step-12")}
                  leftStep={() => handleNext("step-10")}
                />
              </div>
            )}

            {/* Step 12 Personal info */}
            {pageCount === "step-12" && (
              <div className="show" id="step-12">
                <Field className="form_group field">
                  <input
                    type="input"
                    className="form_field"
                    name="name"
                    onChange={handleChange}
                    required
                  />
                  <label className="form__label">Full Name</label>
                </Field>
                <Field className="form_group field">
                  <input
                    type="input"
                    className="form_field"
                    name="address"
                    onChange={handleChange}
                    required
                  />
                  <label className="form__label">Address</label>
                </Field>
                <div className="slc-wrp ">
                  <p className="h6">State of Origin</p>
                  <select
                    className="d-select border-link block-select "
                    name="state_origin"
                    onChange={handleChange}
                  >
                    {states.map((state, i) => (
                      <option key={i + 1} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <Field className="form_group field">
                  <input
                    type="input"
                    className="form_field"
                    required
                    name="lga"
                    onChange={handleChange}
                  />
                  <label className="form__label">Local Goverment Area</label>
                </Field>
                <div className="slc-wrp ">
                  <p className="h6">State of Residence</p>
                  <select
                    className="d-select border-link block-select "
                    name="state_residence"
                    onChange={handleChange}
                  >
                    {states.map((state, i) => (
                      <option key={i + 1} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <Field className="form_group field">
                  <input
                    type="text"
                    className="form_field"
                    required
                    name="agentID"
                    onChange={handleChange}
                  />
                  <label className="form__label">Referrer's ID</label>
                </Field>
                <div className="d-block w-100">
                  <button
                    className="btn btn-success d-block  w-100 rounded-0"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
            {/* Police and query if inPrison */}
            {pageCount === "step-7" && inPrison && (
              <div className="show">
                <Field className="form_group field">
                  <input
                    type="number"
                    className="form_field"
                    required
                    onChange={handleChange}
                    name="station_duration"
                  />
                  <label className="form__label">
                    How long did you stay at the police station?
                  </label>
                </Field>
                <div className="slc-wrp ">
                  <p className="h6">
                    When{" "}
                    {person === "he"
                      ? "was he"
                      : person === "she"
                      ? "was she"
                      : "were you"}{" "}
                    arraigned{" "}
                  </p>
                  <input
                    type="date"
                    onChange={handleChange}
                    name="arraigned_on"
                    className="form-control border-link rounded-0 py-4"
                  />
                </div>
                <Field className="form_group field">
                  <input
                    type="text"
                    className="form_field"
                    onChange={handleChange}
                    name="arraigned_at"
                    required
                  />
                  <label className="form__label">
                    Which court were you charged/arraigned?
                  </label>
                </Field>
                <div className="slc-wrp ">
                  <p className="h6">
                    When{" "}
                    {person === "he"
                      ? "was his"
                      : person === "she"
                      ? "was her"
                      : "was your"}{" "}
                    last adjournment date?{" "}
                  </p>
                  <input
                    type="date"
                    onChange={handleChange}
                    name="adjournment_date"
                    className="form-control border-link rounded-0 py-4"
                  />
                </div>
                <Field className="form_group field">
                  <input
                    type="text"
                    className="form_field"
                    onChange={handleChange}
                    name="offence_charged"
                    required
                  />
                  <label className="form__label">
                    What is or are the offence(s) charged?
                  </label>
                </Field>
                <Field className="form_group field">
                  <input
                    type="text"
                    className="form_field"
                    onChange={handleChange}
                    name="first_accused"
                    required
                  />
                  <label className="form__label">
                    Name of the 1st accused person
                  </label>
                </Field>
                <Field className="form_group field">
                  <input
                    type="text"
                    className="form_field"
                    name="station2"
                    onChange={handleChange}
                  />
                  <label className="form__label">
                    name of police station later transferred to if any
                  </label>
                </Field>
                <Field className="form_group field">
                  <input
                    type="number"
                    className="form_field"
                    required
                    name="station2_duration"
                    onChange={handleChange}
                  />
                  <label className="form__label">
                    how long did you stay there?
                  </label>
                </Field>{" "}
                <Btn
                  rightStep={() => handleNext("step-8")}
                  leftStep={() => handleNext("step-6")}
                />
              </div>
            )}

            {/* Step 8 dentention cost if inPrison */}
            {pageCount === "step-8" && (
              <div className="show">
                <div className="slc-wrp ">
                  <p className="h6">
                    Did your detention caused you any job loss or vocational
                    displacement?
                  </p>
                  <select
                    className="d-select border-link block-select "
                    onChange={e => {
                      let { value } = e.target;
                      value === "false"
                        ? setPageCount("step-9")
                        : value === "true" && setAnswer("Yes");
                    }}
                  >
                    <option value={null}>Please select an option</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No </option>
                  </select>
                </div>
                {pageCount === "step-8" && answer === "Yes" && (
                  <div className="form-group mt-3">
                    <p className="h6">Explain</p>
                    <textarea
                      className="border-link rounded-0 form-control"
                      required
                      rows="8"
                      onChange={handleAnswer}
                      name="detention_cost"
                    />
                  </div>
                )}
                {detention_cost && station && (
                  <Btn
                    rightStep={() => handleNext("step-9")}
                    leftStep={() => handleNext("step-7")}
                  />
                )}
              </div>
            )}

            {/* Step 9 Exhibite upload id inPrison */}
            {pageCount === "step-9" && (
              <div className="show" id="step-9">
                <div className="exhibits">
                  <Exhibit />
                </div>
                <ExForm addEx={(name, file) => addEx(name, file)} />
                <Btn
                  rightStep={() => handleNext("step-10")}
                  leftStep={() => handleNext("step-9")}
                />
              </div>
            )}
          </form>
        </Wrapper>
      </div>
    </>
  );
};

Apply.propTypes = {
  true: PropTypes.bool,
  false: PropTypes.bool
};
// const primary = "#b8d941";

const Field = styled.div`
  /* border: 2px solid gray; */
  margin-bottom: 1rem;
  padding: 1rem 0;

  input[type="radio"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  .show {
    display: block;
    transition: all 0.8s linear;
  }
`;

const Wrapper = styled.div`
  max-width: 60%;
  margin: auto;
  /* .file {
    opacity: 0;
  } */
`;
export default Apply;
