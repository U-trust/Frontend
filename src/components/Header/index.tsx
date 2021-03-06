import React from 'react';
import { useCallback } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { inject, observer } from 'mobx-react';
import logo from '../../assets/logo.svg';
import { SearchBar } from './SearchBar';
import { Profile } from './Profile';
import { HeaderContainer, Logo, Line, RightMenu, LightMenu, HeavyMenu } from './styles';
import AuthStore from 'store/AuthStore';
import { PREFIX } from 'util/const';

interface OwnProps {
    authStore?: AuthStore
}

type Props = OwnProps & RouteComponentProps;

const Header: React.FC<Props> = inject('authStore')(observer(({ authStore, history }) => {
    const auth = authStore as AuthStore;
    const signin = useCallback(() => history.push(`${PREFIX}/signin`), [history]);
    const home = useCallback(() => history.push(`${PREFIX}/home`), [history]);
    const search = useCallback(() => history.push(`${PREFIX}/search`), [history]);
    const status = useCallback(() => history.push(`${PREFIX}/status`), [history]);
    const onMenuClick = useCallback((path: string) => history.push(path), [history]);
    return (
        <HeaderContainer>
            <Logo src={logo} onClick={home} />
            <Line style={{height: 'auto'}}/>
            <SearchBar />
            <RightMenu>
                <LightMenu onClick={search}>탐색</LightMenu>
                <LightMenu onClick={status}>현황</LightMenu>
                <Line style={{ marginRight: '15px' }} />
                {!auth.account && (<HeavyMenu onClick={signin}>로그인</HeavyMenu>)}
                {!!auth.account && (<>
                    <HeavyMenu>메세지</HeavyMenu>
                    <HeavyMenu>알림</HeavyMenu>
                    <Profile account={auth.account} onMenuClick={onMenuClick}/>
                </>)}
                <HeavyMenu>기업서비스</HeavyMenu>
            </RightMenu>
        </HeaderContainer>
    )
}));

export default withRouter(Header);