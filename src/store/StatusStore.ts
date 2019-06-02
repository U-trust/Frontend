import {observable, action} from 'mobx';
import { Track } from 'models/Track';

export default class StatusStore {
    @observable applyTracks: Track[] = [];

    constructor() {
        const list = localStorage.getItem('applies') || '[]';
        const listObj = JSON.parse(list);
        this.applyTracks = listObj;
    }


    @action setStop = (track: Track) => {
        const list = localStorage.getItem('applies') || '[]';
        const listObj = JSON.parse(list) as Track[];
        listObj.splice(listObj.findIndex(d => d.title === track.title), 1);
        localStorage.setItem('applies', JSON.stringify(listObj));
        this.applyTracks = listObj;
        alert(`${track.title} 의 신청을 취소하였습니다`)
    }
}