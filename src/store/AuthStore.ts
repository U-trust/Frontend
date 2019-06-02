import { observable } from 'mobx';
import Account from '../models/Account';
import * as AuthApi from '../api/AuthApi';

export default class AuthStore {
    @observable isLogined: boolean = false;
    @observable isCompany: boolean = false;
    @observable account?: Account;

    constructor() {
        AuthApi.getCurrentAuth().then(res => {
            this.isLogined = true;
            this.account = res;
            this.isCompany = !!res.company;
        })
    }
}