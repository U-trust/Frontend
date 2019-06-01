import React from 'react';
import { useCallback } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import { SearchBar } from './SearchBar';

const HeaderContainer = styled.header`
    padding: 12px 10%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    display: flex;
    position: relative;
`

const Logo = styled.img`
    width: 36px;
    height: 36px;
    padding-right: 10px;
    cursor: pointer;
`

const RightMenu = styled.div`
    position: absolute;
    padding: 12px 0;
    top: 0;
    right: 15px;
    height: calc(100% - 24px);
    align-items: center;
    display: flex;
`

const LightMenu = styled.div`
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    margin-right: 15px;
    cursor: pointer;
`

const HeavyMenu = styled(LightMenu)`
    font-weight: bold;
`

const Line = styled.div`
    width: 1px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.15);
`

const Header: React.FC<RouteComponentProps> = ({history}) => {
    const signin = useCallback(() => history.push('/signin'), [history]);
    const home = useCallback(() => history.push('/'), [history]);
    return (
        <HeaderContainer>
            <Logo src={logo} onClick={home}/>
            <Line />
            <SearchBar />
            <RightMenu>
                <LightMenu>탐색</LightMenu>
                <LightMenu>현황</LightMenu>
                <Line style={{marginRight: '15px'}}/>
                <HeavyMenu onClick={signin}>로그인</HeavyMenu>
                <HeavyMenu>기업서비스</HeavyMenu>
            </RightMenu>
        </HeaderContainer>
    )
}

export default withRouter(Header);