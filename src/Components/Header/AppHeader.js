import React, { useContext } from "react";
import styled from "styled-components";
import ProfileButton from "./ProfileButton";
import { NavLink } from "react-router-dom";
import AuthenticationContext from "../../Store/auth-context";
const StyledHeader = styled.section`
  background: #444791;
  height: 3rem;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  color: #fff;
  position: relative;
  > .heading {
    font-weight: 600;
    font-size: 1rem;
    padding-left: 2rem;
    &:hover {
      cursor: pointer;
    }
  }
  > .searchControl {
    margin-left: -100px;
    border: 0;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 0.4rem;
    height: 1.8rem;
    color: #fff;
    width: 400px;
    margin-bottom: 0.1rem;
    padding: 0 3rem 0.1rem 1.2rem;
    display: flex;
    align-items: center;
  }
  > .p {
    padding-left: 5rem;
  }
`;
const Styledinput = styled.input`
  margin-left: -100px;
  border: 0;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 0.4rem;
  height: 1.8rem;
  border-color: orange;
  color: black;
  width: 400px;
  padding: 0 3rem 0.1rem 1.2rem;
  display: flex;
  align-items: center;
  border-radius: 4px;
  outline: white;
  background-image: url("../../Assets/search.png");
  background-position: 10px 10px;
  background-repeat: no-repeat;
  position: relative;
  transition: 0.3s all;
  .field:hover {
    background-color: rgba(0, 0, 0, 0.99);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  }
  .profileButton {
    position: fixed;
  }
`;
const StyledLogoutButton = styled.button`
  border: 1px solid white;
  background: #444791;
  border-radius: 0.4rem;
  height: 1.5rem;
  color: white;
  width: 4rem;
  margin-right: 2rem;
  align-items: center;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
`;
const StyledRightSide = styled.div`
  display: flex;
  align-items: center;
`;
const AppHeader = () => {
  const Authenticationctx = useContext(AuthenticationContext);
  const logoutHandler = () => {
    console.log(`logout handler called in appheader`);
    Authenticationctx.logout();
  };
  return (
    <StyledHeader>
      <NavLink
        to="/teams"
        style={{ textDecoration: "none", color: "white" }}
        className="heading"
      >
        Microsoft Teams
      </NavLink>
      <Styledinput placeholder="Search"></Styledinput>
      <StyledRightSide>
        <StyledLogoutButton onClick={logoutHandler}>Logout</StyledLogoutButton>
        <ProfileButton className="profileButton"></ProfileButton>
      </StyledRightSide>
    </StyledHeader>
  );
};

export default AppHeader;
