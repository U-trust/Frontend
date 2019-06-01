import React from 'react';
import styled from 'styled-components';
import { TextInput } from 'components/Input';
import { withFormLabel } from 'components/Label/FormLabel';
import { Title } from 'components/Label';
import { FormButton } from 'components/Button';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const FormContainer = styled.div`
    display: flex;
    flex-flow: column;
`

const Group = styled.div`
    display: flex;
`

const FormGroup = withFormLabel(Group);
const FormInput = withFormLabel(TextInput);

const Signup: React.FC = () => {
    return (
        <Container>
            <FormContainer>
                <Title>회원가입</Title>
                <FormInput title="이메일" placeholder="이메일을 입력해주세요"/>
                <FormInput title="비밀번호" placeholder="비밀번호를 입략해주세요" />
                <FormButton>로그인</FormButton>
            </FormContainer>
        </Container>
    )
}

export default Signup;