import React from 'react';
import styled from 'styled-components';
import { FormButton } from 'components/Button';

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

const TrackDetail: React.FC = () => {
    return (
        <>
            <Container>
                
            </Container>

            <BottomBar>
                서류를 제출하여 후원을 받아보세요!
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                    <FormButton style={{ color: '#ff9b00', backgroundColor: 'white' }}>지원하기</FormButton>
                </div>
            </BottomBar>
        </>
    )
}

export default TrackDetail;