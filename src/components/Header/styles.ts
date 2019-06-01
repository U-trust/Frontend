import styled from 'styled-components';
export const HeaderContainer = styled.header`
padding: 12px 10%;
border-bottom: 1px solid rgba(0, 0, 0, 0.15);
display: flex;
position: fixed;
width: 80%;
background: white;
`

export const Logo = styled.img`
width: 36px;
height: 36px;
padding-right: 10px;
cursor: pointer;
`

export const RightMenu = styled.div`
position: absolute;
padding: 12px 0;
top: 0;
right: 15px;
height: calc(100% - 24px);
align-items: center;
display: flex;
& > * {
    margin-right: 40px;
}
`

export const LightMenu = styled.div`
font-size: 16px;
font-weight: normal;
font-style: normal;
font-stretch: normal;
line-height: 1.5;
letter-spacing: normal;
text-align: left;
color: #000000;
cursor: pointer;
`

export const HeavyMenu = styled(LightMenu)`
font-weight: bold;
`

export const Line = styled.div`
width: 1px;
height: 100%;
background-color: rgba(0, 0, 0, 0.15);
`
