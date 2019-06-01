import axios from 'axios';

export const signup = async (name: string, email: string, password: string) => {
    const res = await axios.post('https://korxpdh359.execute-api.ap-northeast-2.amazonaws.com/dev/signUp', { name, mail: email, password });
    return res.status === 200;
}

export const signin = async (email: string, password: string) => {
    const res = await axios.post('https://korxpdh359.execute-api.ap-northeast-2.amazonaws.com/dev/signUp', { mail: email, password });
    return res.status === 200;
}