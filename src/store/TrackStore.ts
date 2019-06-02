import {observable, action} from 'mobx';
import { Track } from 'models/Track';
import * as TaskApi from 'api/TrackApi';

export default class TrackStore {
    @observable track?: Track;

    constructor(id: string) {
        TaskApi.getTracks().then(res => this.track = res.find(t => t.id === id));
    }

    @action apply = () => {
        alert(`${this.track ? this.track.title : '???'}에 신청하였습니다.`);
    }
}