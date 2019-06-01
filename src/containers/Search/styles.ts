import styled from 'styled-components';

export const Container = styled.div`
    padding: 40px 10%;
`

export const SearchTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    margin-bottom: 25px;
`

export const FormGroup = styled.div`
    display: flex;
`

export const RightGroup = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: flex-end;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    
`