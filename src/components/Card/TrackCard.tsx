import React, {useCallback} from 'react';
import styled from 'styled-components';
import {Track} from '../../models/Track';

const Container = styled.div`
    margin-bottom: 10px;
    cursor: pointer;
    margin-bottom: 10px;
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
    track: Track,
    onClick: (track: Track) => void
}

export const TrackCard: React.FC<Props> = ({ track, onClick }) => {
    const handler = useCallback(() => onClick(track), [track, onClick]);
    return (
        <Container onClick={handler}>
            <Thumbnail src={track.thumbnail} />
            <Title>{track.title}</Title>
            <SubTitle>{track.subTitle}</SubTitle>
        </Container>
    )
}