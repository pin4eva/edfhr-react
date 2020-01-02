import React from "react";

export const Signature = ({ applicant }) => {
  const { state, city } = applicant;
  return (
    <div className="footer">
      <p>Dated this …………………..day of…………………………………………2019.</p>
      <div className="signature ">
        <p>G.B. EVANS, ESQ. Evans</p>
        <p>Dule’s Foundation Solicitor to the Accused/Applicant</p>
        <p>No. 163A Okporo Road Port Harcourt,</p>
        <p>Rivers State.</p>
        <p> 08107639372</p>
      </div>
      <div className="max-w-sm">
        <div className="mt-4">
          <h6>FOR SERVICE ON:</h6>      
          <ol>
            <li>
              <p>Attorney General, {state},</p>
              <p>Ministry of Justice {state},</p>
              <p>Secretariat, {city}</p>
            </li>
            <li>
              <p>Commissioner of Police, {state},</p>
              <p>
                {state} Police Command, Moscow Road, {city}.
              </p>
            </li>
          </ol>
                
        </div>
      </div>
    </div>
  );
};

export const Heading = ({ applicant }) => {
  const { state, city, firstName, lastName, ipo } = applicant;
  return (
    <div className="heading1">
      <h5 className="text-center text-uppercase">
        IN THE HIGH COURT OF {state} OF NIGERIA IN THE {city}
        JUDICIAL DIVISION HOLDEN AT {city}
      </h5>
      <h5 className="text-right">SUIT NO:        /FHR/ /2019</h5>
      <div className="text-uppercase">
        <p className="text-uppercase">
          IN THE MATTER OF AN APPLICATION FOR THE ENFORCEMENT OF THE APPLICANT’S
          FUNDAMENTAL RIGHTS TO RESPECT FOR THE DIGNITY OF HIS PERSON, PERSONAL
          LIBERTY, RIGHT TO FAIR TRIAL WITHIN A REASONABLE TIME AND FREEDOM OF
          MOVEMENT.
        </p>
        <p>BETWEEN</p>
        <p>
          {`${firstName} ${lastName}`}
          ---------------------------------------------------------------------APPLICANT
        </p>
        <p>AND</p>
        <ol>
          <li> {ipo} </li>
          <li>THE ATTORNEY GENERAL, {state}</li>
          <li>
            THE COMMISSIONER OF POLICE, {state}{" "}
            <span className="font-bold">RESPONDENT</span>
                               
          </li>
        </ol>
      </div>
    </div>
  );
};
