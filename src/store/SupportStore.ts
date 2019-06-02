import { observable, action } from 'mobx';
import * as UserApi from '../api/UserApi';
import Account from 'models/Account';

export default class SupportStore {
    @observable applicants: Account[] = [];
    @observable progress: Account[] = [];
    @observable filter: string = '대기 지원자';
    company?: string;

    constructor(company?: string) {
        this.company = company;
        UserApi.getApplicants(this.company).then(res => this.applicants = res);
        UserApi.getProgress(this.company).then(res => this.progress = res);
    }

    @action setFilter = (filter?: string) => {
        this.filter = filter || '대기 지원자';
        UserApi.getApplicants(this.company).then(res => this.applicants = res);
        UserApi.getProgress(this.company).then(res => this.progress = res);
    }

    @action setAllow = (user: Account) => {
        alert(`${user.name}님에게 지원을 시작하였습니다`);
    }

    @action setStop = (user: Account) => {
        alert(`${user.name}님의 지원을 중단하였습니다`);
    }
}