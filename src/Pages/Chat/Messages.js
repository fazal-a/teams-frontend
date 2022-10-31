import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { DUMMY_CONTACTS } from "./ContactList";
const StyledHeadingSection = styled.section`
  margin: 0;
  padding-top: 30px;
  margin-left: 0px;
  padding: 0;
  height: 100vh;
  box-shadow: -15px 0px 10px -10px #e7e7e7;
  width: auto;
  float: left;
  > .name {
    margin-left: 20px;
  }
  > .message {
    margin-left: 20px;
  }
`;
const StyledHeading = styled.section`
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  border-bottom: 1px solid rgb(224 224 224);
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  width: 970px;
  > .heading {
    margin-right: 50px;
    float: right;
  }
`;
const StyledDetails = styled.section`
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  width: 970px;
`;
const Messages = () => {
  const prams = useParams();
  let obj = DUMMY_CONTACTS.find(
    (element) => element.userName === prams.contactId
  );
  if (obj) {
  } else {
    obj = DUMMY_CONTACTS[0];
  }
  return (
    <StyledHeadingSection>
      <StyledHeading>
        <h2 className="heading">{obj.name}</h2>
        <div>Call</div>
      </StyledHeading>
      <StyledDetails>
        <p className="message">{obj.message}</p>
        <p className="message">{obj.date}</p>
      </StyledDetails>
    </StyledHeadingSection>
  );
};
export default Messages;
