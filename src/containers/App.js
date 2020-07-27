import React, { useEffect } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import history from "../history";
import { connect } from "react-redux";
import { init } from "../actions";
import ReactGA from "react-ga";

import Sidebar from "./Sidebar";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
  faArrowRight,
  faHome,
  faCalendar,
  faPoll,
  faHeart,
  faDotCircle,
  faStar as fasFaStar,
  faSearch,
  faChevronRight,
  faChevronLeft,
  faLink,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";

library.add(
  fab,
  faArrowLeft,
  faArrowRight,
  faHome,
  faCalendar,
  faPoll,
  faHeart,
  faDotCircle,
  fasFaStar,
  farFaStar,
  faSearch,
  faChevronRight,
  faChevronLeft,
  faLink,
  faPlay
);

const MainWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
  position: relative;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  user-select: none;
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 4rem;
`;

// ReactGA.initialize("UA-137885307-1");
// ReactGA.pageview(window.location.pathname + window.location.search);

function App({ init, isLoading }) {
  useEffect(() => {
    init();
  }, [init]);

  return isLoading ? (
    <div>
      <h1>Loading</h1>
    </div>
  ) : (
    <Router>
      <React.Fragment>
        <MainWrapper>
          <Sidebar />
          <ContentWrapper>
            <Switch>
              <Route
                path={process.env.PUBLIC_URL + "/"}
                exact
                render={() => (
                  <Redirect
                    from={process.env.PUBLIC_URL + "/"}
                    to={process.env.PUBLIC_URL + "/discover/Popular"}
                  />
                )}
              />
            </Switch>
          </ContentWrapper>
        </MainWrapper>
      </React.Fragment>
    </Router>
  );
}

const mapStateToProps = ({ geral }) => {
  return { isLoading: geral.loading };
};

export default connect(mapStateToProps, { init })(App);
