import React from 'react';
import { useCallback } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { inject, observer } from 'mobx-react';
import logo from '../../assets/logo.svg';
import { SearchBar } from './SearchBar';
import { Profile } from './Profile';
import { HeaderContainer, Logo, Line, RightMenu, LightMenu, HeavyMenu } from './styles';
import AuthStore from 'store/AuthStore';

interface OwnProps {
    authStore?: AuthStore
}

type Props = OwnProps & RouteComponentProps;

const Header: React.FC<Props> = inject('authStore')(observer(({ authStore, history }) => {
    const auth = authStore as AuthStore;
    const signin = useCallback(() => history.push('/signin'), [history]);
    const home = useCallback(() => history.push('/'), [history]);
    return (
        <HeaderContainer>
            <Logo src={logo} onClick={home} />
            <Line />
            <SearchBar />
            <RightMenu>
                <LightMenu>탐색</LightMenu>
                <LightMenu>현황</LightMenu>
                <Line style={{ marginRight: '15px' }} />
                {!auth.account && (<HeavyMenu onClick={signin}>로그인</HeavyMenu>)}
                {!!auth.account && (<>
                    <HeavyMenu>메세지</HeavyMenu>
                    <HeavyMenu>알림</HeavyMenu>
                    <Profile account={auth.account}/>
                </>)}
                <HeavyMenu>기업서비스</HeavyMenu>
            </RightMenu>
        </HeaderContainer>
    )
}));

export default withRouter(Header);