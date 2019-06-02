import axios from 'axios';
import Account from 'models/Account';

export const getUsers = async () => {
    const res = await axios.get('https://w155ay04v8.execute-api.ap-northeast-2.amazonaws.com/dev/applicants');
    return res.data.applicants.map((data: any) => ({ email: data.mail, name: data.name, photo: data.image || 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/ad50b586-afc8-46c0-9dbf-1d2c838ef879.png', job: data.educations ? data.educations[0] : '백엔드 프로그래머' })) as Account[];
}

export const getApplicants = async (company?: string) => {
    const res = await axios.get('https://w155ay04v8.execute-api.ap-northeast-2.amazonaws.com/dev/applicants');
    return res.data.applicants.map((data: any) => ({ email: data.mail, name: data.name, photo: data.image || 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/ad50b586-afc8-46c0-9dbf-1d2c838ef879.png', job: data.educations ? data.educations[0] : '백엔드 프로그래머' })) as Account[];
}

export const getProgress = async (company?: string) => {
    return [
        { name: '홍길동', job: '백엔드 프로그래머', photo: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/c481306e-ace1-41cc-9330-a4eb7b4b9742.png' }
    ];
}