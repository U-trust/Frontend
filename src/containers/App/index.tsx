import React from 'react';
import Header from '../../components/Header';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import styled from 'styled-components';
import SigninContainer from '../Auth/Signin';
import SignupContainer from '../Auth/Signup';
import SearchContainer from '../Search';
import HomeContainer from '../Home';
import TrackDetailContainer from '../TrackDetail';
import StatusContainer from '../Status';
import MyInfoContainer from '../MyInfo';
import AuthStore from '../../store/AuthStore';
import { PREFIX } from 'util/const';

const AppContainer = styled.div`
  display: flex;
  flex-flow: column;
`

const authStore = new AuthStore();

const redirect = () => <Redirect to={`${PREFIX}/home`}/>;
const App: React.FC = () => {
  return (
    <Provider authStore={authStore}>
      <AppContainer>
        <Router>
          <Header />
          <div style={{ flex: 1, marginTop: '60px' }}>
            <Route exact={true} path={PREFIX} component={redirect} />
            <Route path={`${PREFIX}/home`} component={HomeContainer} />
            <Route path={`${PREFIX}/search`} component={SearchContainer} />
            <Route path={`${PREFIX}/signin`} component={SigninContainer} />
            <Route path={`${PREFIX}/signup`} component={SignupContainer} />
            <Route path={`${PREFIX}/detail`} component={TrackDetailContainer} />
            <Route path={`${PREFIX}/status`} component={StatusContainer} />
            <Route path={`${PREFIX}/myinfo`} component={MyInfoContainer} />
          </div>
        </Router>
      </AppContainer>
    </Provider>
  );
}

export default App;
