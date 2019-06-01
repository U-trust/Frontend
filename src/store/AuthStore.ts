import { observable } from 'mobx';
import Account from '../models/Account';

export default class AuthStore {
    @observable isLogined: boolean = true;
    @observable account: Account = {name : '홍길동', photo: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/6eeaab2d-3ff4-4395-960c-4357d27e1b7d.png'};
}