import React from "react";
import TopBG from "../../components/Front/TopBG";
import styled from "styled-components";

const Apply = () => {
  return (
    <>
      <TopBG />
      <div className="container">
        <Wrapper>
          <h2>New Applicant </h2>
          <form>
            <div>
              <p className="h6">Do you have a lawyer ?</p>
              <Field className="c-input flex align-items-center justify-content-between">
                <p className="m-0">Yes</p>
                <span>
                  <input type="radio" name="yes" />
                  <Alt className="alt"></Alt>
                </span>
              </Field>
              <Field className="c-input flex align-items-center justify-content-between">
                <p className="m-0">No</p>
                <span>
                  <input type="radio" name="yes" />
                  <Alt className="alt"></Alt>
                </span>
              </Field>
            </div>
            <div className="step-2">
              <Field className="form_group field">
                <input
                  type="input"
                  className="form_field"
                  name="name"
                  required
                />
                <label className="form__label">Full Name</label>
              </Field>
              <Field className="form_group field">
                <input
                  type="input"
                  className="form_field"
                  name="address"
                  required
                />
                <label className="form__label">Address</label>
              </Field>
              <Field className="form_group field">
                <input
                  type="input"
                  className="form_field"
                  name="address"
                  required
                />
                <label className="form__label">
                  What is the nature of breach ?
                </label>
              </Field>
              <div className="slc-wrp ">
                <p className="h6">
                  Did the breach amounts to a breach of any of the following
                </p>
                <select className="d-select border-link block-select ">
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
            </div>
            <div className="step-3">
              <div className="slc-wrp ">
                <p className="h6">Who are you partnering for ?</p>
                <select className="d-select border-link block-select ">
                  <option>Self</option>
                  <option>Another</option>
                </select>
              </div>
              <div className="slc-wrp ">
                <p className="h6">Where is the person ?</p>
                <select className="d-select border-link block-select ">
                  <option>In Police detention</option>
                  <option>In prison custody</option>
                  <option>Not in detention</option>
                </select>
              </div>
            </div>
            <div className="step-A4">
              <div className="slc-wrp ">
                <p className="h6">
                  How long has the person been in police detention?
                </p>
                <select className="d-select border-link block-select ">
                  <option>Less than 24 hours</option>
                  <option>More than 24hours </option>
                </select>
              </div>
            </div>
            <div className="step-A4a">
              <Field className="form_group field">
                <input type="input" className="form_field" required />
                <label className="form__label">When were you arrested?</label>
              </Field>{" "}
              <Field className="form_group field">
                <input type="input" className="form_field" required />
                <label className="form__label">Where were you arrested?</label>
              </Field>
            </div>
          </form>
        </Wrapper>
      </div>
    </>
  );
};
const primary = "#b8d941";

const Field = styled.div`
  /* border: 2px solid gray; */
  margin-bottom: 1rem;
  padding: 1rem 0;
  &:hover {
    /* border: 2px solid ${primary}; */
    transition: all 0.3s linear;
  }
  input[type="radio"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
`;
const Alt = styled.div`
  width: 1.5rem;
  border: 2px solid ${primary};
  height: 1.5rem;
  border-radius: 50%;
  display: inline-block;
`;

const Wrapper = styled.div`
  max-width: 60%;
  margin: auto;
`;
export default Apply;
