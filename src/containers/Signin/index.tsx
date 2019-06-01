import React from 'react';
import styled from 'styled-components';
import { TextInput } from 'components/Input';
import { withFormLabel } from 'components/Label/FormLabel';
import { Title } from 'components/Label';

const Container = styled.div`
    display: flex;
    flex-flow: column;
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

const Signin: React.FC = () => {
    return (
        <Container>
            <FormContainer>
                <Title>로그인</Title>
                <FormGroup title="이름" style={{ marginBottom: '20px' }}>
                    <TextInput placeholder="성" style={{ marginRight: '5px' }} />
                    <TextInput placeholder="이름" />
                </FormGroup>
                <FormInput title="이메일" placeholder="이메일을 입력해주세요" style={{ marginBottom: '20px' }} />
                <FormInput title="비밀번호" placeholder="비밀번호를 입략해주세요" />
            </FormContainer>
        </Container>
    )
}

export default Signin;