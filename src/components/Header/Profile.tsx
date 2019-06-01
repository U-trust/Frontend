import React, {useCallback} from 'react';
import Account from '../../models/Account';
import styled from 'styled-components';
import dropdownIcon from '../../assets/ic_arrow_down.svg';

const Image = styled.img`
    width: 27px;
    height: 27px;
    margin-right: 7px;
`

const Label = styled.div`
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: right;
    color: #000000;
    display: flex;
    align-items: center;
    cursor: pointer;
`

const ArrowImg = styled.img`
    width: 11px;
    height: 6px;
    display: block;
    margin-left: 5px;
    transition-duration: 0.5s;
`
const Menu = styled.div`
    background: white;
    display: none;
    padding: 10px;
    border: solid 1px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    width: 70px;
`
const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0;
    &:hover ${ArrowImg}{
        transform: rotate(180deg);
    }
    &:hover ${Menu} {
        position: absolute;
        top: 100%;
        display: block;
    }
`

interface Props {
    account: Account,
    onMenuClick: (path: string) => void
}

export const Profile: React.FC<Props> = ({ account, onMenuClick }) => {
    const myInfo = useCallback(() => onMenuClick('/myinfo'), [onMenuClick]);
    return (
        <ProfileContainer>
            <Image src={account.photo} />
            <Label>{account.name} <ArrowImg src={dropdownIcon}/></Label>
            <Menu onClick={myInfo}>내정보</Menu>
        </ProfileContainer>
    )
}