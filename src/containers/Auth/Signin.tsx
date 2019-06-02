import React from 'react';
import { observer } from 'mobx-react';
import { History } from 'history';
import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Title, SimpleLabel } from 'components/Label';
import { FormButton } from 'components/Button';
import { Container, FormContainer, FormInput } from './styles';
import SignStore from 'store/SignStore';
import { PREFIX } from 'util/const';
const SubLabel = styled.span`
    font-weight: bold;
    float: right;
    cursor: pointer;
`

interface Props {
    history: History
}

const Signin: React.FC<Props> = observer(({history}) => {
    const [store] = useState(() => new SignStore());
    const redirectToSignup = useCallback(() => history.push(`${PREFIX}/signup`), [history]);
    return (
        <Container>
            <FormContainer>
                <Title>로그인</Title>
                <FormInput title="이메일" placeholder="이메일을 입력해주세요" value={store.email} onChange={store.setEmail}/>
                <FormInput title="비밀번호" placeholder="비밀번호를 입략해주세요" value={store.password} onChange={store.setPassword} margin={false} style={{ marginBottom: '4px' }} />
                <SimpleLabel style={{ marginBottom: '40px', cursor: 'pointer' }}>비밀번호를 잊어버리셨나요?</SimpleLabel>
                <FormButton style={{ marginBottom: '4px' }} onClick={store.signin}>로그인</FormButton>
                <SimpleLabel>아직 회원이 아니신가요? <SubLabel onClick={redirectToSignup}>회원가입하러가기</SubLabel></SimpleLabel>
            </FormContainer>
        </Container>
    )
});

export default Signin;