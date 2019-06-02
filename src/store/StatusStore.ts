import {observable, runInAction, action} from 'mobx';
import { Track } from 'models/Track';
import * as TrackApi from '../api/TrackApi';

export default class StatusStore {
    @observable applyTracks: Track[] = [];

    constructor() {
        TrackApi.getAppliedTracks().then(res => runInAction(() => this.applyTracks = res));
    }


    @action setStop = (track: Track) => {
        alert(`${track.title} 의 신청을 취소하였습니다`)
    }
}