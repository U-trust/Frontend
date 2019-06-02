import React, { useState } from 'react';
import queryString from 'query-string';
import styled from 'styled-components';
import { FormButton } from 'components/Button';
import { RouteComponentProps } from 'react-router';
import TrackStore from 'store/TrackStore';

const Container = styled.div`
    padding: 0 10%;
`

const BottomBar = styled.div`
    background-color: #ff9b00;
    position: fixed;
    display: flex;
    bottom: 0;
    width: 60%;
    padding: 10px 20%;
    align-items: center;
`

const TrackDetail: React.FC<RouteComponentProps> = ({location}) => {
    const values = queryString.parse(location.search)
    const trackId = values.id;
    const [trackStore] = useState(() => new TrackStore(trackId ? trackId[0] : ''));
    return (
        <>
            <Container>
                
            </Container>

            <BottomBar>
                서류를 제출하여 후원을 받아보세요!
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                    <FormButton style={{ color: '#ff9b00', backgroundColor: 'white' }} onClick={trackStore.apply}>지원하기</FormButton>
                </div>
            </BottomBar>
        </>
    )
}

export default TrackDetail;