import {observable} from 'mobx';
import { Track } from 'models/Track';

export default class StatusStore {
    @observable applyTracks: Track[] = [{
        id: '1',
        title: '블랭크가 책임져드립니다. 개발자...',
        subTitle: '블랭크 코퍼레이션',
        thumbnail: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/5d2d72c9-e5a5-4cf2-9469-eeb7de2c43ec.png'
    }];
}