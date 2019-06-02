import React from 'react';
import styled from 'styled-components';
import Account from 'models/Account';

const Container = styled.div`
    margin-bottom: 10px;
    cursor: pointer;
`

const Thumbnail = styled.img`
    width: 100%;
`
const Title = styled.div`
    font-size: 15px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #232323;
    margin-top: 7px;
    margin-left: 7px;
`
const SubTitle = styled.div`
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.45;
    letter-spacing: -0.8px;
    text-align: left;
    color: #898989;
    margin-left: 7px;
`

interface Props {
    user: Account,
}

export const UserCard: React.FC<Props> = ({ user }) => {
    return (
        <Container>
            <Thumbnail src={user.photo} />
            <Title>{user.name}</Title>
            <SubTitle>{user.job}</SubTitle>
        </Container>
    )
}