import React from "react";
import Modal from "./Modal";
import styled from "styled-components";

const StyledSection = styled.section`
  font-size: large;
`;

const ProfilePopup = () => {
  return (
    <Modal>
      <StyledSection>
        <h2>some heading here</h2>
        <div>some text here</div>
      </StyledSection>
    </Modal>
  );
};

export default ProfilePopup;
