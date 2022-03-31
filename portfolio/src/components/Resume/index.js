import React from 'react';
import ResumeDownload from '../../assets/DRASHTEEPARMARRESUME.pdf';

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

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

