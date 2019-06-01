import React from 'react';
import styled from 'styled-components';
import searchIcon from '../../assets/ic_search.svg';

const Container = styled.div`
    width: 40%;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    display: flex;
`

const Icon = styled.img`
    width: 24px;
    height: 24px;
`

const Input = styled.input`
    flex: 1;
    border: none;
    outline: none;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    &::placeholder {
        color: rgba(0, 0, 0, 0.15);
    }      
`

export const SearchBar: React.FC = () => {
    return (
        <Container>
            <Icon src={searchIcon}/>
            <Input type="text" placeholder="검색어를 입력해주세요"/>
        </Container>
    )
}