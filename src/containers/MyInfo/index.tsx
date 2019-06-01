import React from 'react';
import styled from 'styled-components';
import Bg1 from '../../assets/bg_profile_1.png';
import Bg2 from '../../assets/bg_profile_2.png';
import Bg3 from '../../assets/bg_profile_3.png';
import Bg4 from '../../assets/bg_profile_4.png';

const Container = styled.div`
    padding: 30px 10%;
    & > img {
        width: 100%;
    }
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
    margin-bottom: 50px;
`

const MyInfo: React.FC = () => {
    return (
        <Container>
            <Title>아직 포트폴리오 기능이 정식 지원되지 않아요<span role="img" aria-label="sheep">😂</span><br />BETA 버전 이후에 포트폴리오 기능이 오픈됩니다!</Title>
            <img src={Bg1} alt="" style={{ marginBottom: '30px' }} />
            <img src={Bg2} alt="" style={{ marginBottom: '30px' }} />
            <img src={Bg3} alt="" style={{ marginBottom: '30px' }} />
            <img src={Bg4} alt="" />
        </Container>
    )
}

export default MyInfo;