import React from 'react';
import styled from 'styled-components';
import { Track } from 'models/Track';
import { FormButton } from 'components/Button';

const Container = styled.div`
    display: flex;
`
const Image = styled.img`
    width: 240px;
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
const Status = styled.div`
    font-size: 16px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.45;
    letter-spacing: -0.8px;
    text-align: center;
    color: #000000;
`

interface Prop {
    track: Track
}

export const StatusCard: React.FC<Prop> = ({ track }) => {
    return (
        <Container>
            <Image src={track.thumbnail} />
            <Content>
                <Title>{track.title}</Title>
                <SubTitle>{track.subTitle}</SubTitle>
            </Content>
            <Control>
                <div>
                    <FormButton style={{padding: '10px 20px', marginBottom: '10px'}}>접수 취소</FormButton>
                    <Status>지원 완료</Status>
                </div>
            </Control>
        </Container>
    )
}