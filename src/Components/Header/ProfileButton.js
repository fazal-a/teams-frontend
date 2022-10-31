import React from "react";
import personImage from "../../Assets/person.png";

import styled from "styled-components";
const StyledImage = styled.img`
  border: 0;
  border-radius: 36.4rem;
  height: 2.2rem;
  width: 2.2rem;
  align-items: center;
  margin-right: 2rem;
  &:hover {
    cursor: pointer;
  }
`;
const ProfileButton = () => {
  const onClickHandler = () => {
    {
      console.log(`setMouseHover is called at the profilebutton page`);
    }
  };
  return <StyledImage src={personImage} onClick={onClickHandler}></StyledImage>;
};

export default ProfileButton;
