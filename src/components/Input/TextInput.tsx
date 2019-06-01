import styled from 'styled-components';

export const TextInput = styled.input`
    border: solid 1px #000000;
    font-size: 16px;
    padding: 18px 24px;
    margin-bottom: 20px;
    ${(props: {margin?: boolean}) => props.margin === false && `
        margin: 0;
    `}
`