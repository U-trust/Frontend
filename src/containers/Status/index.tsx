import React, {useState} from 'react';
import styled from 'styled-components';
import StatusStore from 'store/StatusStore';
import { StatusCard } from 'components/Card/StatusCard';

const Container = styled.div`
    padding 20px 10%;
`
const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    margin-bottom: 20px;
`

const Status: React.FC = () => {
    const [statusStore] = useState(() => new StatusStore());
    return (
        <Container>
            <Title>지원 현황</Title>
            {statusStore.applyTracks.map(track => <StatusCard track={track} />)}
        </Container>
    )
}

export default Status;