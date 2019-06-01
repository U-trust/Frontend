import React from 'react';
import Header from '../../components/Header';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import SigninContainer from '../Auth/Signin';
import SignupContainer from '../Auth/Signup';
import SearchContainer from '../Search';
import HomeContainer from '../Home';
import AuthStore from '../../store/AuthStore';

const AppContainer = styled.div`
  display: flex;
  flex-flow: column;
`

const authStore = new AuthStore();

const App: React.FC = () => {
  return (
    <Provider authStore={authStore}>
      <AppContainer>
        <Router>
          <Header />
          <div style={{ flex: 1, marginTop: '60px' }}>
            <Route path="/home" component={HomeContainer} />
            <Route path="/search" component={SearchContainer} />
            <Route path="/signin" component={SigninContainer} />
            <Route path="/signup" component={SignupContainer} />
          </div>
        </Router>
      </AppContainer>
    </Provider>
  );
}

export default App;
