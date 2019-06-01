import React from 'react';
import Toolbar from '../../components/Toolbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import SigninContainer from '../Auth/Signin';
import SignupContainer from '../Auth/Signup';

const AppContainer = styled.div`
  display: flex;
  flex-flow: column;
`

const App: React.FC = () => {
  return (
    <AppContainer>
      <Toolbar />
      <Router>
        <div style={{flex: 1}}>
          <Route path="/signin" component={SigninContainer} />
          <Route path="/signup" component={SignupContainer} />
        </div>
      </Router>
    </AppContainer>
  );
}

export default App;
