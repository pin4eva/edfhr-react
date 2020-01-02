import React from "react";
import PropTypes from "prop-types";
import { Heading, Signature } from "./Structure";

const TypeB = ({ applicant }) => {
  const { arrested_on } = applicant;
  return (
    <div>
      <div id="b1" className="draft_type">
        <Heading applicant={applicant} />
        <div className="body">
          <h6 className="underlined">MOTION ON NOTICE</h6>
          <p>
            Brought Pursuant to Order 2 Rule 1 of the Fundamental Rights
            (Enforcement Procedure) Rules, 2009, Sections 32 (1), (2) and 169 of
            the Administration of Criminal Justice Law, No. 7 of 2015 of Rivers
            State, Sections 34, 35, 36 and 41 of the Constitution of the Federal
            Republic of Nigeria, 1999, AS AMENDED; Article 6,9 and 12 of the
            African Charter on Human and People’s Right (Ratification and
            Enforcement )Act, Cap A9 Laws of the Federation of Nigeria, 2004,
            and under the inherent Jurisdiction of this Honourable Court as
            preserved by Section 6(6) (a) of the Constitution of the Federal
            Republic of Nigeria, 1999, as amended.
          </p>
          <p>
            <span className="font-bold">TAKE NOTICE</span>: that this Honourable
            Court will be moved on ………….day of ………….....…
            {new Date().getFullYear()} at the Hour of 9 O’clock in the forenoon
            or so soon thereafter as the Applicant or Counsel on behalf of the
            Applicant may be heard praying this honourable court for the
            following reliefs:
          </p>
          <ol>
            <li>
              <span className="font-bold">A DECLARATION</span> that the
              continuing detention of the Applicant since the {arrested_on},
              2017, till date without preferring of appropriate
              charges/information against the Applicant in the appropriate court
              of law for his trial, is wrongful, unlawful, and unconstitutional
              as it violates the applicants fundamental rights to respect for
              the dignity of his person, personal liberty and Right to fair
              trial as guaranteed under{" "}
              <span className="font-bold">
                Sections 34, 35 and 36 of the Constitution of the Federal
                Republic of Nigeria
              </span>
              , 1999, as amended; Article 5,6,9 and 12 of the African Charter on
              Human and People’s Right (Ratification and Enforcement )Act, Cap
              A9 Laws of the Federation of Nigeria, 2004.
            </li>
            <li>
              5,000,000.00 from the respondents jointly and severally and in the
              alternative for the violation of the Applicant’s Fundamental
              Rights.
            </li>
            <li>
              AN ORDER restraining the Respondents, their agents, servants and
              whosoever, from further arresting and detaining the Applicant in
              connection with the subject matter of this application.
            </li>
            <li>
              AND for such further or other Order(s) as this Honourable Court
              may deem fit to make in the circumstance.
            </li>
            <li>
              AND TAKE FURTHER NOTICE that the detention of the Applicant for
              more than 24hrs on an allegation of an offence without trial is a
              fragrant violation of the Applicant’s Constitutional Rights. See
              Section 35(4) and (5) of the 1999 Constitution of the Federal
              Republic of Nigeria as amended.
            </li>
          </ol>
        </div>

        <Signature applicant={applicant} />
      </div>
      {/* B1 end */}
      <B2 applicant={applicant} />
    </div>
  );
};

const B2 = ({ applicant }) => {
  const { state, firstName, lastName, arrested_on, lga } = applicant;
  return (
    <div id="b2">
      <Heading applicant={applicant} />
      <ol>
        <li>
          <h6>NAME AND DESCRIPTION OF THE APPLICANT</h6>
          <p>
            {`${firstName} ${lastName}`} is an indigene of {lga} of {state}.
          </p>
        </li>
        <li>
          <h6>RELIEFS SOUGHT BY THE APPLICANT</h6>
          <ol>
            <li>
              <span className="font-bold">A DECLARATION</span> that the
              continuing detention of the Applicant since the {arrested_on},
              till date without preferring of appropriate charges/information
              against the Applicant in the appropriate court of law for his
              trial, is wrongful, unlawful, and unconstitutional as it violates
              the applicants fundamental rights to respect for the dignity of
              his person, personal liberty and Right to fair trial as guaranteed
              under Sections 34, 35 and 36 of the Constitution of the Federal
              Republic of Nigeria, 1999, as amended; Article 5,6,9 and 12 of the
              African Charter on Human and People’s Right (Ratification and
              Enforcement )Act, Cap A9 Laws of the Federation of Nigeria, 2004.
            </li>
            <li>
              5,000,000.00 from the respondents jointly and severally and in the
              alternative for the violation of the Applicant’s Fundamental
              Rights.{" "}
            </li>
            <li>
              AN ORDER restraining the Respondents , their agents, servants and
              whosoever, from further arresting and detaining the Applicant in
              connection with the subject matter of this application.
            </li>
            <li>
              AND for such further or other Order(s) as this Honourable Court
              may deem fit to make in the circumstance.
            </li>
          </ol>
        </li>
        <li>
          <h6>GROUNDS UPON WHICH THE RELIEFS ARE SOUGHT:</h6>
          <ol>
            <li>
              By virtue of section 34(1)(a), 35(1) and (4), 36(1) and (5) of the
              Constitution of the Federal Republic of Nigeria, 1999, as amended
              and Article 3,4,5,6 and 7(b) and (d) of the African Charter on
              Human and People’s Right (Ratification and Enforcement) Act, Cap
              A9, Laws of the Federation of Nigeria, 2004, every person is
              entitled to respect for the dignity of his person, personal
              liberty, freedom of movement , be presumed innocent until proved
              guilty and tried within a reasonable time by an impartial court or
              tribunal over allegation of crime.
            </li>
            <li>
              The continuing incarceration of the Applicant by the Respondents
              since the {arrested_on} till date without filing or preferring of
              a formal charge/information against the Applicant in the
              appropriate court of law for his trial or admitting the Applicant
              to bail is wrongful, unlawful, unconstitutional and is a violation
              of the Applicant’s Fundamental Rights to respect for the dignity
              of his person, personal liberty and right to fair trial as
              guaranteed under sections 34, 35 and 36 of the Constitution of the
              Federal Republic of Nigeria, 1999 as amended; Article 5,6,9 and 12
              of the African Charter on Human and People’s Right (Rectification
              and Enforcement) Act, Cap A9, Laws of the Federation of Nigeria,
              2004.
            </li>
            <li>
              No formal charge/Information with proof of evidence has been filed
              before the appropriate court to determine the guilt or otherwise
              of the Applicant.
            </li>
            <li>
              An accused like the Applicant should face early trials, and where
              early trial cannot be guaranteed, then he should be discharged for
              want of diligent prosecution or released on bail.
            </li>
            <li>
              The seriousness of an alleged offence was provided to be the
              reason for prompt arraignment, which in the instant case, the
              Respondents have failed to do so. See the case of Bolakale V.
              State (2006) ALL NWLR (PF 962) 507, 519, where Muntaka-Commaissie,
              J.C.A held thus: “…it is the seriousness that should spur the
              Prosecution to do or perform his function timorously and properly
              because the Liberty of a Nigeria is at stake…”
            </li>
          </ol>
        </li>
      </ol>

      <Signature applicant={applicant} />
    </div>
  );
};

TypeB.propTypes = {
  applicant: PropTypes.object.isRequired
};
TypeB.defaultProps = {
  applicant: {
    firstName: "Paul",
    lastName: "Amadi",
    state: "Niger State",
    city: "Mina",
    arrested_on: "27th May 2019",
    ipo: "John Doe",
    lga: "Ikwanu South Local Goverment Area"
  }
};

export default TypeB;
