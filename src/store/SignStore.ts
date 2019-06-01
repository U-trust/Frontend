import React from 'react';
import { observable, action } from 'mobx';
import * as AuthApi from '../api/AuthApi';

export default class SignStore {
    @observable firstName: string = '';
    @observable lastName: string = '';
    @observable email: string = '';
    @observable password: string = '';


    async signin() {
        const res = await AuthApi.signin(this.email, this.password);
        alert(res);
    }

    async signup() {
        const res = await AuthApi.signup(this.firstName + this.lastName, this.email, this.password);
        alert(res);
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