import axios from 'axios';
import Account from 'models/Account';

export const signup = async (name: string, email: string, password: string) => {
    const res = await axios.post('https://korxpdh359.execute-api.ap-northeast-2.amazonaws.com/dev/signUp', { name, mail: email, password });
    return res.status === 200;
}

export const signin = async (email: string, password: string) => {
    const res = await axios.post('https://korxpdh359.execute-api.ap-northeast-2.amazonaws.com/dev/signUp', { mail: email, password });
    return res.status === 200;
}

export const getCurrentAuth = async () => {
    return {name : '홍길동', job: '백엔드 프로그래머', photo: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/6eeaab2d-3ff4-4395-960c-4357d27e1b7d.png'} as Account;
}