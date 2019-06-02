import React, {useCallback} from 'react';
import styled from 'styled-components';
import Account from 'models/Account';
import { FormButton } from 'components/Button';

const Container = styled.div`
    display: flex;
`
const Image = styled.img`
    width: 220px;
    height: 130px;
    margin-right: 20px;
`
const Content = styled.div`
    padding: 10px 0;
`
const Title = styled.div`
font-size: 20px;
font-weight: bold;
font-style: normal;
font-stretch: normal;
line-height: 1.46;
letter-spacing: normal;
text-align: left;
color: #232323;
`
const SubTitle = styled.div`
font-size: 16px;
font-weight: normal;
font-style: normal;
font-stretch: normal;
line-height: 1.45;
letter-spacing: -0.8px;
text-align: left;
color: rgba(0, 0, 0, 0.5);
`
const Control = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
`
const Desc = styled.div`
    font-size: 16px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.45;
    letter-spacing: -0.8px;
    text-align: left;
    color: #ff9b00;
`

interface Prop {
    user: Account,
    onAction: (user: Account) => void
}

export const ProgressCard: React.FC<Prop> = ({ user, onAction }) => {
    const stop = useCallback(() => onAction(user), [user, onAction]);
    return (
        <Container>
            <Image src={user.photo} />
            <Content>
                <Title>{user.name}</Title>
                <SubTitle>{user.job}</SubTitle>
                <Desc>B등급 적합  |  380만원</Desc>
                <Desc style={{fontSize: '20px', marginTop: '10px'}}>진행률 : 0%</Desc>
            </Content>
            <Control>
                <div>
                    <FormButton style={{padding: '10px 20px', marginBottom: '10px'}} onClick={stop}>중단</FormButton>
                </div>
            </Control>
        </Container>
    )
}