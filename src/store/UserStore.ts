import {observable} from 'mobx';
import Account from 'models/Account';
import * as UserApi from '../api/UserApi';

export default class UserStore {
    @observable results: Account[] = [];

    constructor() {
        UserApi.getUsers().then(res => this.results = res);
    }
}