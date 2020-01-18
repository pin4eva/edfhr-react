import React from "react";
import { Heading, Signature } from "./Structure";
import PropTypes from "prop-types";

const TypeC = ({ applicant }) => {
  return (
    <div id="typeC" className="draft_type">
      <div className="c1">
        <Heading applicant={applicant} />
        <div>
          <p>
            <span className="font-bold">TAKE NOTICE:</span> that this Honourable
            Court will be moved on ………….day of ………….....…
            {new Date().getFullYear()} at the Hour of 9 O.clock in the forenoon
            or so soon thereafter as the Applicant or Counsel on behalf of the
            Applicant may be heard praying this honourable court for the
            following reliefs:
          </p>
        </div>
        <ol>
          <li>
            AN ORDER of the Honourable Court admitting to bail the
            Accused/Applicant who is now in prison custody at the Port harcourt
            Federal Prisons pending trial.
          </li>
          <li>
            AND for such further or other Order(s) as this Honourable Court may
            deem fit to make in the circumstance.
          </li>
        </ol>
        <Signature applicant={applicant} />
      </div>
      <div className="c2">
        <C3 applicant={applicant} />
      </div>
    </div>
  );
};

const C3 = ({ applicant }) => {
  const { firstName, lastName } = applicant;
  return (
    <div id="c3">
      <Heading applicant={applicant} />
      <h6 className="text-center">
        WRITTEN ADDRESS IN SUPPORT OF THE INSTANT APPLICATION
      </h6>
      <p>
        This is a written address of Counsel for the Accused/Applicant. The said
        written address accompanies a Motion on Notice brought pursuant to
        Sections 35(4) and 36 of the Constitution of the Federal Republic of
        Nigeria 1999 (as amended) and under the inherent jurisdiction of the
        Honourable Court. The motion prays the Honourable Court for the
        following:
      </p>
      <p>
        AN ORDER ADMITTING THE ACCUSED/APPLICANT, {`${firstName} ${lastName}`}{" "}
        TO BAIL PLENDING TRIAL.
      </p>
      <p>
        And for such order or further orders as the Honourable Court may deem
        fit to make in the circumstance. In support of the motion is a 22
        paragraphs affidavit sworn to by the Accused/Applicant. Attached to the
        said affidavit are two Exhibits A & B. We place reliance on all the
        paragraphs of the affidavit. In determination of this application, My
        Lord the issue for determination is:
      </p>
      <h6 className="text-center text-uppercase">
        Whether the Accused/Applicant is entitled to be admitted to bail pending
        trial by a Court of Competent Jurisdiction.
      </h6>
      <p className="font-bold">ARGUMENT</p>
      <p>
        My Lord, it is trite law that bail is a right before conviction unless
        there are special reasons to refuse it. A person who has not been found
        guilty of an offence is prima facie entitled to his liberty. Once he has
        been convicted by a Competent Court and sentenced to a term of
        imprisonment he is prima facie deprived of that entitlement and the
        opposite becomes the case. Before conviction, there is presumption of
        innocence. May I refer Your Lordship to the case of Adamu Muri v.
        Inspector General of Police (1957) N.R.N.L.R 5 at page 6.
      </p>
      <p>
        My Lord, the Accused/Applicant is a Nigerian citizen and was arrested in
        March, 2016 by the police and was in police detention until 27th day of
        April, 2016 when he was arraigned at the Senior Magistrate Court Port
        Harcourt before his Worship Betty Sunny Hart Esq. and jurisdiction was
        declined by the lower court for want of jurisdiction and until the
        filing of this motion, the respondent has filed no information/proof of
        evidence let alone to commence the prosecution of this case. This I
        humbly submit amount to special and exceptional circumstance likely to
        keep the applicant incarcerated ad-in-finitum entitling the applicant to
        bail. For this, I refer My Lord to the following cases:
      </p>
      <ul>
        <li>Musa v. C.O.P (2004) 9 NWLR (pt. 879) p. 483 at 486 (ratio 4)</li>
        <li>Anakwe vs. C.O.P (1996) 3 NWLR (pt. 436) p. 320 at 331,</li>
        <li>
          {" "}
          • where the Court held that: “where the prosecutor parades to the
          court the word ‘robbery’… as in the instant case without trying the
          accused with the offence, the court of law is bound to grant bail and
          that the only way to initiate criminal proceeding is to proffer an
          information/proof of evidence substantial enough to show that there is
          a prima facie evidence of commission of the offence against the
          accused”. This the respondent has not done.
        </li>
      </ul>
      <p>
        To this end, Ogbuagu J.C.A (as he then was) in the case of Musa Vs.
        C.O.P (2014) 9 NWLR (pt. 879) p. 483 ratio 2, held:
      </p>
      <p>
        “The failure of the respondent to produce or exhibit the said proof of
        evidence in my view is , or amounts to a special and exceptional
        circumstance for me to exercise my discretion in favour of the
        applicant”.
      </p>
      <p>
        My Lord, Section 35(4) of the Constitution of the Federal Republic of
        Nigeria 1999 (as amended) states as follows:
      </p>
      <p>
        “Any person who is arrested or detained in accordance with subsection
        1(c) of the section shall be brought before a court of law within a
        reasonable time, and if he is not tried within a period of:
      </p>
      <ol>
        <li>
          Two months from the date of his arrest or detention, in the case of a
          person who is in custody or is not entitled to bail; or
        </li>
        <li>
          Three months from the date of his arrest of detention, in the case of
          a person who has been released on bail, he shall (without prejudice to
          further proceedings that may be brought against him) be released
          unconditionally or upon such conditions as are reasonably necessary to
          ensures he appears for trial at a later date”.
        </li>
      </ol>
      <p>
        My Lord, the Accused/Applicant was arrested since March, 2016 and was in
        police detention until 27th day of April, 2016 when he was arraigned
        before the lower court that declined jurisdiction and ordered his remand
        at the Port Harcourt Federal Prison pending Director of Public
        Prosecution’s advice. From the date of the arrest of the accused person
        in March, 2016 till the filing of this application, it is 8 months and
        an information/proof of evidence is yet to be filed against the
        applicant. On this note, the Applicant is entitled to bail My Lord. This
        is the position of the Court of Appeal in the case of Fajana Eddi vs.
        C.O.P (2007) All FWLR (pt. 367) 960.
      </p>
      <p>
        My Lord, the grant or refusal of the application for bail is at the
        discretion of this Honourable Court. The decision to grant or refuse
        application for bail depends entirely on the exercise of the discretion
        of the Learned Trial Judge having regards to the material placed before
        him in the affidavit in support of the application. May I refer Your
        Lordship to the case of Likitta vs. C.O.P (2002) All FWLR (pt. 106)
        1075.
      </p>
      <p>
        Again, we urge My Lord to take critical look at the arraignment of the
        Applicant at the Lower Court as shown in the Affidavit in support of the
        motion paper. The accused/ Applicant did not take plea before the lower
        Court because the Court lacks jurisdiction to try the case. The
        Magistrate ordered that the applicant be remanded in prison custody.
      </p>
      <p>
        Flow from the above, we urge Your Lordship to exercise this discretion
        judicially and judiciously in favour of the applicant. The law is that
        bail should not be refused as a punishment and that justice delayed is
        justice denied. See Dogo vs. C.O.P (1988) 1. NCR 14.
      </p>
      <p>
        Courts are enjoined to approach the question of bail liberally, see Musa
        vs. COP (200) 8 NWLR (pt. 879) 583; Danbaba vs. State (2000) 14 NWLR
        (pt. 687) 396. Over the years the Appellate Courts have set out
        considerations that will weigh in the mind of the Court in the
        consideration of bail. Some of the conditions are stated in Bamiyi vs.
        The State (2001) 8 NWLR (pt. 715) at p. 276. In the instant case, the
        Accused/Applicant shall abide by them all. The Applicant will come to
        trial whenever called upon to do so. See paragraph 14 of the affidavit
        in support of this motion.
      </p>
      <p>
        It is my humble submission that by Section 36(5) of the Constitution of
        the Federal Republic of Nigeria 1999 (as amended), an accused person
        standing trial is presumed innocent. See the case of J.A Orji & 5 Ors
        vs. F.R.N (2007) 13 NWLR (pt. 1050) 55 at 88 para. D-F and 94-95, Para.
        E-G.
      </p>
      <p>
        On the whole therefore, I humbly urge Your Lordship to grant bail to the
        Accused/Applicant in the most lenient terms.
      </p>
      <p>May it please this Honourable Court.</p>
      <Signature applicant={applicant} />
    </div>
  );
};

TypeC.propTypes = {
  applicant: PropTypes.object.isRequired
};
TypeC.defaultProps = {
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
export default TypeC;
