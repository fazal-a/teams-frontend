import styled from "styled-components";
import LeftToolBar from "../../Components/LeftToolBar/LeftToolBar";
import TeamsSection from "../../Pages/Teams/TeamsSection";
import ChatSection from "../../Pages/Chat/ChatSection";
import ActivitySection from "../../Pages/Activity/ActivitySection";
import AppsSection from "../../Pages/Apps/AppsSection";
import HelpSection from "../../Pages/Help/HelpSection";
import PhoneSection from "../../Pages/Phone/PhoneSection";
import { Route, Routes } from "react-router-dom";
import TeamDetails from "../../Pages/Teams/TeamDetails/TeamDetails";
import ErrorPage from "../../Pages/ErrorPage";
import Messages from "../../Pages/Chat/Messages";
const StyledMain = styled.section`
  background-color: #f5f5f5;
  height: 100vh;
  .sections {
    display: flex;
  }
  .errorPage {
    flex-direction: column;
    align-items: center;
  }
`;
const Main = () => {
  return (
    <StyledMain>
      <main>
        <Routes>
          <Route
            path="/chat"
            element={
              <section className="sections">
                <LeftToolBar />
                <ChatSection />
                <Messages />
              </section>
            }
          ></Route>
          <Route
            path="/chat/:contactId"
            element={
              <section className="sections">
                <LeftToolBar />
                <ChatSection />
              </section>
            }
          ></Route>

          <Route
            path="/"
            element={
              <section className="sections">
                <LeftToolBar />
                <TeamsSection />
              </section>
            }
          ></Route>
          <Route
            path="/teams"
            element={
              <section className="sections">
                <LeftToolBar />
                <TeamsSection />
              </section>
            }
          ></Route>
          <Route
            path="/teams/:teamId"
            element={
              <section className="sections">
                <LeftToolBar />
                <TeamDetails />
              </section>
            }
          ></Route>
          <Route
            path="/phone"
            element={
              <section className="sections">
                <LeftToolBar />
                <PhoneSection />
              </section>
            }
          ></Route>
          <Route
            path="/activity"
            element={
              <section className="sections">
                <LeftToolBar />
                <ActivitySection />
              </section>
            }
          ></Route>
          <Route
            path="/apps"
            element={
              <section className="sections">
                <LeftToolBar />
                <AppsSection />
              </section>
            }
          ></Route>
          <Route
            path="/help"
            element={
              <section className="sections">
                <LeftToolBar />
                <HelpSection />
              </section>
            }
          ></Route>
          <Route
            path="/team-details"
            element={
              <section className="sections">
                <LeftToolBar />
                <TeamDetails />
              </section>
            }
          ></Route>
          <Route
            path="*"
            element={
              <section className="errorPage">
                <ErrorPage />
              </section>
            }
          ></Route>
        </Routes>
      </main>
    </StyledMain>
  );
};
export default Main;
