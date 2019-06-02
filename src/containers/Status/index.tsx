import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import StatusStore from 'store/StatusStore';
import SupportStore from 'store/SupportStore';
import { StatusCard } from 'components/Card/StatusCard';
import { ApplicantCard } from 'components/Card/ApplicantCard';
import { ProgressCard } from 'components/Card/ProgressCard';
import AuthStore from 'store/AuthStore';
import { Option } from 'components/Input/Option';

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
interface Props {
    authStore?: AuthStore
}

const Status: React.FC<Props> = inject('authStore')(observer(({ authStore }) => {
    const auth = authStore as AuthStore;
    const [supportStore] = useState(() => new SupportStore(auth.account ? auth.account.company : ''));
    const [statusStore] = useState(() => new StatusStore());
    return auth.isCompany ? (
        <Container>
            <Title>지원 현황</Title>
            <div style={{ marginBottom: '20px' }}>지원 상태 <Option options={['대기 지원자', '진행 지원자']} value={supportStore.filter} onSelectValue={supportStore.setFilter} /></div>
            {supportStore.filter === '대기 지원자' && supportStore.applicants.map(user => <ApplicantCard user={user} onAction={supportStore.setAllow} />)}
            {supportStore.filter !== '대기 지원자' && supportStore.progress.map(user => <ProgressCard user={user} onAction={supportStore.setStop} />)}
        </Container>
    ) : (
            <Container>
                <Title>지원 현황</Title>
                {statusStore.applyTracks.map(track => <StatusCard track={track} onAction={statusStore.setStop} />)}
            </Container>
        )
}));

export default Status;