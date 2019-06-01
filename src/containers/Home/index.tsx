import React from 'react';
import styled from 'styled-components';
import promotionBg from '../../assets/bg_promotions.png';
import reviewBg from '../../assets/bg_reviews.png';
import { FormInputLabel } from 'components/Label/FormInputLabel';

const Container = styled.div`
    padding: 20px 10%;
`

const Promition = styled.img`
    width: 100%;
    margin-bottom: 20px;
`

const Home: React.FC = () => {
    return (<>
        <img src="https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/927fc728-13f5-4984-bed2-19dbf88d3def.png" alt="home"/>
        <Container>
            <FormInputLabel title="서비스 프로모션"/>
            <Promition src={promotionBg} />
            <FormInputLabel title="우리의 이야기"/>
            <Promition src={reviewBg} />
        </Container>
    </>
    )
}

export default Home;