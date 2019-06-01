import {observable, runInAction} from 'mobx';
import { Track } from 'models/Track';
import * as TrackApi from '../api/TrackApi';

export default class StatusStore {
    @observable applyTracks: Track[] = [];

    constructor() {
        TrackApi.getAppliedTracks().then(res => runInAction(() => this.applyTracks = res));
    }
}