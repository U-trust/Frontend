import React from 'react';
import { TextInput } from 'components/Input';
import { Title, SimpleLabel } from 'components/Label';
import { FormButton } from 'components/Button';
import { Container, FormContainer, FormGroup, FormInput } from './styles';

const Signup: React.FC = () => {
    return (
        <Container>
            <FormContainer>
                <Title>회원가입</Title>
                <FormGroup title="이름">
                    <TextInput placeholder="성" style={{ marginRight: '5px' }} />
                    <TextInput placeholder="이름" />
                </FormGroup>
                <FormInput title="이메일" placeholder="이메일을 입력해주세요" />
                <FormInput title="비밀번호" placeholder="비밀번호를 입략해주세요" />
                <FormButton>회원가입</FormButton>
                <SimpleLabel>회원가입시 UTRUST의 이용약관, 개인정보처리방침을 읽고 이해하셨으며 해당 내용에 동의하신 것이 됩니다.</SimpleLabel>
            </FormContainer>
        </Container>
    )
}

export default Signup;