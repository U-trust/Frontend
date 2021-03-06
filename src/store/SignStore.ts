import React from 'react';
import { observable, action } from 'mobx';
import * as AuthApi from '../api/AuthApi';
import AuthStore from './AuthStore';

export default class SignStore {
    @observable firstName: string = '';
    @observable lastName: string = '';
    @observable email: string = '';
    @observable password: string = '';

    constructor(private authStore: AuthStore){}

    signin = async () => {
        const res = await AuthApi.signin(this.email, this.password);
        this.authStore.setCurrentAccount(res);
    }

    signup = async () => {
        const res = await AuthApi.signup(this.firstName + this.lastName, this.email, this.password);
        return res;
    }

    @action setFirstName = (e: React.ChangeEvent) => {
        this.firstName = (e.target as HTMLInputElement).value;
    }

    @action setLastName = (e: React.ChangeEvent) => {
        this.lastName = (e.target as HTMLInputElement).value;
    }

    @action setEmail = (e: React.ChangeEvent) => {
        this.email = (e.target as HTMLInputElement).value;
    }

    @action setPassword = (e: React.ChangeEvent) => {
        this.password = (e.target as HTMLInputElement).value;
    }

}