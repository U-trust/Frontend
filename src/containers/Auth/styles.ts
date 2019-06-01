import styled from 'styled-components';
import { withFormInputLabel } from 'components/Label/FormInputLabel';
import { TextInput } from 'components/Input';

export const Container = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`
export const FormContainer = styled.div`
    display: flex;
    flex-flow: column;
    min-width: 400px;
    max-width: 40%;
`

export const Group = styled.div`
    display: flex;
    & > * {
        flex: 1;
    }
`

export const FormGroup = withFormInputLabel(Group);
export const FormInput = withFormInputLabel(TextInput);