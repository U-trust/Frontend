import Account from 'models/Account';

export const getUsers = async () => {
    return [{name : '홍길동', job: '백엔드 프로그래머', photo: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/c481306e-ace1-41cc-9330-a4eb7b4b9742.png'},
    {name : '홍길동', job: '백엔드 프로그래머', photo: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/c481306e-ace1-41cc-9330-a4eb7b4b9742.png'},
    {name : '홍길동', job: '백엔드 프로그래머', photo: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/c481306e-ace1-41cc-9330-a4eb7b4b9742.png'},
    {name : '홍길동', job: '백엔드 프로그래머', photo: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/c481306e-ace1-41cc-9330-a4eb7b4b9742.png'},
    {name : '홍길동', job: '백엔드 프로그래머', photo: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/c481306e-ace1-41cc-9330-a4eb7b4b9742.png'},
    {name : '홍길동', job: '백엔드 프로그래머', photo: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/c481306e-ace1-41cc-9330-a4eb7b4b9742.png'},
    {name : '홍길동', job: '백엔드 프로그래머', photo: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/c481306e-ace1-41cc-9330-a4eb7b4b9742.png'},
    {name : '홍길동', job: '백엔드 프로그래머', photo: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/c481306e-ace1-41cc-9330-a4eb7b4b9742.png'},
    {name : '홍길동', job: '백엔드 프로그래머', photo: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/c481306e-ace1-41cc-9330-a4eb7b4b9742.png'}] as Account[];
}

export const getApplicants = async (company?: string) => {
    return [
        {name : '홍길동', job: '백엔드 프로그래머', photo: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/c481306e-ace1-41cc-9330-a4eb7b4b9742.png'}
    ];
}

export const getProgress = async (company?: string) => {
    return [
        {name : '홍길동', job: '백엔드 프로그래머', photo: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/c481306e-ace1-41cc-9330-a4eb7b4b9742.png'}
    ];
}