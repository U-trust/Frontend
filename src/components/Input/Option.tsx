import React, { useCallback } from 'react';
import styled from 'styled-components';
import dropdownIcon from '../../assets/ic_arrow_down.svg';

const Menu = styled.div`
    display: none;
    width: 99%;
    position: absolute;
    border-width: 0 1px 1px 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.4);
    background: white;
    & > option {
        padding: 6px 10px;
        &:hover {
            background-color: #DDD;
        }
    }
`
const Container = styled.div`
    display: inline-block;
    position: relative;
    cursor: pointer;
    &:after {
        content: '';
        width: 12px;
        height: 6px;
        top: calc(50% - 3px);
        right: 10px;
        position: absolute;
        background-repeat: no-repeat;
        background-image: url(${dropdownIcon});
        transition-duration: 0.3s;
    }
    &:hover:after {
        transform: rotate(180deg);
    }
    &:hover ${Menu} {
        display: block;
    }
`

const SelectInput = styled.input`
    border-radius: 0;
    background-color: white;
    border: solid 1px #000000;
    font-size: 16px;
    padding: 10px 10px;
    -webkit-appearance: none;
    cursor: pointer;
`

interface OwnProps {
    options: string[],
    value?: string,
    placeholder?: string,
    onSelectValue: (val?: string) => void
}

type Props = React.HTMLAttributes<HTMLDivElement> & OwnProps;

export const Option: React.FC<Props> = ({ options, value, placeholder, onSelectValue, ...divProps }) => {
    const selectHandler = useCallback((e: React.MouseEvent) => onSelectValue((e.target as HTMLOptionElement).value), [onSelectValue]);
    return (
        <Container>
            <SelectInput {...divProps} value={value} placeholder={placeholder} disabled={true} />
            <Menu>
                {options.map(opt => <option key={opt} value={opt} onClick={selectHandler}>{opt}</option>)}
            </Menu>
        </Container>
    )
}