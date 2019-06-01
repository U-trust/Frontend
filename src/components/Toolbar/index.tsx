import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import { SearchBar } from './SearchBar';

const Header = styled.header`
    padding: 12px 10%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    display: flex;
    position: relative;
`

const Logo = styled.img`
    width: 36px;
    height: 36px;
    padding-right: 10px;
`

const RightMenu = styled.div`
    position: absolute;
    padding: 12px 0;
    top: 0;
    right: 0;
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

const Toolbar: React.FC = () => {
    return (
        <Header>
            <Logo src={logo} />
            <Line />
            <SearchBar />
            <RightMenu>
                <LightMenu>탐색</LightMenu>
                <LightMenu>현황</LightMenu>
                <Line style={{marginRight: '15px'}}/>
                <HeavyMenu>로그인</HeavyMenu>
                <HeavyMenu>기업서비스</HeavyMenu>
            </RightMenu>
        </Header>
    )
}

export default Toolbar;