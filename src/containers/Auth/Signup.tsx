import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { TextInput } from 'components/Input';
import { Title, SimpleLabel } from 'components/Label';
import { FormButton } from 'components/Button';
import { Container, FormContainer, FormGroup, FormInput } from './styles';
import SignStore from 'store/SignStore';

const Signup: React.FC = observer(() => {
    const [store] = useState(() => new SignStore());
    return (
        <Container>
            <FormContainer>
                <Title>회원가입</Title>
                <FormGroup title="이름">
                    <TextInput placeholder="성" style={{ marginRight: '5px' }} value={store.firstName} onChange={store.setFirstName} />
                    <TextInput placeholder="이름" value={store.lastName} onChange={store.setLastName} />
                </FormGroup>
                <FormInput title="이메일" placeholder="이메일을 입력해주세요" value={store.email} onChange={store.setEmail}/>
                <FormInput style={{ marginBottom: '40px' }} title="비밀번호" placeholder="비밀번호를 입략해주세요" value={store.password} onChange={store.setPassword}/>
                <FormButton onClick={store.signup}>회원가입</FormButton>
                <SimpleLabel>회원가입시 UTRUST의 이용약관, 개인정보처리방침을 읽고 이해하셨으며 해당 내용에 동의하신 것이 됩니다.</SimpleLabel>
            </FormContainer>
        </Container>
    )
});

export default Signup;