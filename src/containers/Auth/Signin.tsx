import React from 'react';
import styled from 'styled-components';
import { Title, SimpleLabel } from 'components/Label';
import { FormButton } from 'components/Button';
import { Container, FormContainer, FormInput } from './styles';
const SubLabel = styled.span`
    font-weight: bold;
    float: right;
    cursor: pointer;
`

const Signin: React.FC = () => {
    return (
        <Container>
            <FormContainer>
                <Title>로그인</Title>
                <FormInput title="이메일" placeholder="이메일을 입력해주세요" />
                <FormInput title="비밀번호" placeholder="비밀번호를 입략해주세요" margin={false} style={{marginBottom: '4px'}}/>
                <SimpleLabel style={{ marginBottom: '40px' }}>비밀번호를 잊어버리셨나요?</SimpleLabel>
                <FormButton style={{marginBottom: '4px'}}>로그인</FormButton>
                <SimpleLabel>아직 회원이 아니신가요? <SubLabel>회원가입하러가기</SubLabel></SimpleLabel>
            </FormContainer>
        </Container>
    )
}

export default Signin;