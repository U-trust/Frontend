import React from 'react';
import styled from 'styled-components';

interface Props {
    title: string
}

const Label = styled.div`
    font-size: 15px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    margin-bottom: 8px;
`

export const FormInputLabel: React.FC<Props> = ({ title }) => {
    return (<Label>{title}</Label>)
}

export const withFormInputLabel = <P extends object>(
    Component: React.ComponentType<P>
): React.FC<P & Props> => ({ title, ...props }: Props) => (
    <>
        <FormInputLabel title={title} />
        {<Component {...props as P} />}
    </>
);
