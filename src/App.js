import styled from "styled-components";
import AppHeader from "./Components/Header/AppHeader";
import Main from "./Components/Main/Main";
const StyledMain = styled.main`
  height: 100vh;
`;
function App() {
  return (
    <div>
      <header>
        <AppHeader />
      </header>
      <StyledMain>
        <Main />
      </StyledMain>
    </div>
  );
}
export default App;
