import React, { useContext } from "react";
import styled from "styled-components";
// import AppHeader from "./Components/Header/AppHeader";
import Main from "./Components/Main/Main";
import Login from "./Pages/Login/Login";
// import { AuthContextProvider } from "./Store/auth-context";
// import AuthenticationContext from "./Store/auth-context";

const StyledMain = styled.main`
  height: 100vh;
`;
function App() {
  return (
    <StyledMain>
      <Main />
    </StyledMain>
  );
  // <div>
  //   {/* <header>
  //     <AppHeader />
  //   </header> */}

  // </div>
}
export default App;
