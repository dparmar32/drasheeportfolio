import React from "react";
import ResumeDownload from "../../assets/DRASHTEEPARMARRESUME.pdf";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
/**
 * This function returns a resume in the form of an embeded pdf
 * @returns A MDBContainer with a MDBRow and a MDBCol. The MDBCol contains an embed element with the id
 * of "Resume" and the src of the ResumeDownload.
 */
const Resume = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <embed id="Resume" src={ResumeDownload} width="100%" height="900px" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default Resume;
