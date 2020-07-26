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

const MainWrapper = styled.div``;
const ContentWrapper = styled.div``;

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
