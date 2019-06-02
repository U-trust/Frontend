import { observable, action } from 'mobx';
import Account from '../models/Account';

export default class AuthStore {
    @observable isLogined: boolean = false;
    @observable isCompany: boolean = false;
    @observable account?: Account;

    constructor() {
        const res = localStorage.getItem('acc');
        if(res) {
            this.setCurrentAccount(JSON.parse(res) as Account);
        }
    }

    @action setCurrentAccount = (account: Account) => {
        localStorage.setItem('acc', JSON.stringify(account));
        this.isLogined = true;
        this.account = account;
        this.isCompany = !!account.company;
    }
}