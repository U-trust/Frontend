import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import promotionBg from '../../assets/bg_promotions.png';
import promotionBg2 from '../../assets/bg_promotion2.png';
import reviewBg from '../../assets/bg_reviews.png';
import { FormInputLabel } from 'components/Label/FormInputLabel';
import AuthStore from 'store/AuthStore';

const Container = styled.div`
    padding: 20px 10%;
`

const Promition = styled.img`
    width: 100%;
    margin-bottom: 20px;
`

interface Props {
    authStore?: AuthStore
}

const Home: React.FC<Props> = inject('authStore')(observer(({ authStore }) => {
    const auth = authStore as AuthStore;
    return auth.isCompany ? (
        <Container>
            <FormInputLabel title="서비스 프로모션" />
            <Promition src={promotionBg} />
            <FormInputLabel title="현 후원 통계 데이터" />
            <Promition src={promotionBg2} />
            <FormInputLabel title="우리들의 스토리" />
            <Promition src={reviewBg} />
        </Container>
    ) : (
            <>
                <img src="https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/927fc728-13f5-4984-bed2-19dbf88d3def.png" alt="home" />
                <Container>
                    <FormInputLabel title="서비스 프로모션" />
                    <Promition src={promotionBg} />
                    <FormInputLabel title="우리의 이야기" />
                    <Promition src={reviewBg} />
                </Container>
            </>
        )
}))

export default Home;