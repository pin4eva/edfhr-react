import React from "react";
import { Heading } from "./Structure";

const Affidavit = ({ applicant }) => {
  return (
    <div>
      <div className="affidavit draft_type">
        <Heading applicant={applicant} />
        <h6 className="text-center">
          AFFIDAVIT IN SUPPORT OF THIS APPLICATION
        </h6>
        <p>
          Mrs. Okezie, Female, Adult, Christian, business-woman now residing at
          Ikwuano Local Government Area of Imo State, citizen of the Federal
          Republic of Nigeria, do make Oath and state as follows:
        </p>
        <ol>
          <li>
            That I am the Mother of the Accused/Applicant in this application
            for bail by virtue of which I am conversant with the facts leading
            to the detention of the applicant at the Port Harcourt Federal
            Prisons.
          </li>
          <li>
            That I have the authority and consent of the Accused/Applicant to
            depose to this oath.
          </li>
          <li>
            That the Accused/Applicant told me in the month of August, 2017at
            Port Harcourt Prison and I verily believed him.
          </li>
          <li>
            The Applicant was arrested on the 31st day of July, 2017, by the
            Nigeria Police Force at Oyigbo, in Port Harcourt on same date.
          </li>
          <li>
            All efforts made by me and members of our family to secure the bail
            of the Applicant at the station have proved abortive.
          </li>
          <li>
            That the Accused/Applicant spent One Month in detention at the
            Oyigbo Police Station, Port Harcourt, and was later charged to court
            at the Port Harcourt Magistrate Court.
          </li>
          <li>
            That the accused/applicant was charged of the offences of
            Conspiracy, Kidnapping and Armed Robbery in Port Harcourt magistrate
            court where the sitting magistrate denied jurisdiction of the said
            matter. The charge sheet is hereby attached and marked as Exhibit A.
          </li>
          <li>
            That the accused was arrested since the 31st day of July, 2017, and
            was in police detention until the 23rd day of August, 2017, when he
            was arraigned before the lower court that declined jurisdiction and
            ordered his remand at the Port Harcourt federal prison pending
            Director of Public Prosecution’s advice.
          </li>
          <li>
            That the Director of Public Prosecution works directly under the 1st
            Respondent.
          </li>
          <li>
            That plea of the Applicant was not taken at the Magistrate Court on
            the 23rd day of August, 2017, when he was arraigned.
          </li>
          <li>
            That from the date of the arrest of the accused person on the 31st
            day of July, 2017, till date of this application, it is One Month
            and an information/proof of evidence is yet to be filed against the
            applicant.
          </li>
          <li>
            That since then there has been no proof/evidence filed at the high
            court and the applicant has been in prison without trial.
          </li>
          <li>
            That I know as a fact that from the 31st day of July, 2017, when the
            Applicant was arrested till date, the Nigeria Police Force should
            have concluded investigation, if any fact exist of any crime at all.
          </li>
          <li>
            That the applicant if granted bail will be available to face his
            trial whenever called upon to do so.
          </li>
          <li>
            That the grant of this application will not prejudice the respondent
            as the applicant is in no way involved in the crime for which he is
            alleged to have committed.
          </li>
          <li>
            That the Applicant informed me in the month of  August, 2017 during
            my visit to the prison that he has reasonable and responsible
            sureties within the jurisdiction of this honourable court who are
            ready to take him on bail to guarantee his continuous attendance to
            court to face his trial, if information is eventually filed against
            him.
          </li>
          <li>
            That he will not interfere with police investigation of the case, if
            any, when admitted to bail.
          </li>
          <li>
            That there is no witness whose life will be endangered if the
            Applicant is admitted to bail.
          </li>
          <li>
            That the Applicant is a responsible citizen of the Federal Republic
            of Nigeria.
          </li>
          <li>
            That i know as a fact that, unless this court admits the Applicant
            to bail, the respondent will continue to detain the Applicant in
            their unlawful, wrongful, and unconstitutional detention, even when
            there are reasonable persons to take the Applicant on bail.
          </li>
          <li>
            That the grant of this application will be in the interest of
            justice.
          </li>
          <li>
            That i swear to this Oath solemnly and conscientiously believing its
            contents to be true and correct in accordance with the Oath Act.
          </li>
        </ol>
        <p className="text-right">_______________________________</p>
        <div className="text-right">
          <p>DEPONENT</p>
        </div>
        <p className="text-center">
          SWORN TO at the High Court Registry, Port Harcourt,{" "}
        </p>
        <p>
          This ……………………… day of ……………………………………….. {new Date().getFullYear()}
        </p>
        <p>  BEFORE ME</p>
        <p>………………………………………………………………… </p>
        <p>COMMISSIONER FOR OATHS</p>
      </div>
    </div>
  );
};

export default Affidavit;
