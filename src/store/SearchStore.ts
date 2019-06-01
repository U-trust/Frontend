import { observable, action } from 'mobx';
import { Track } from '../models/Track';
import * as TrackApi from '../api/TrackApi';

const filterMap: { [key: string]: string[] } = {
    '개발자': ['프론트엔드 개발자', '백엔드 개발자', 'Java 개발자', '머신러닝 개발자', '데이터 분석가'],
    '디자이너': ['UI 디자이너', 'UX 디자이너', '그래픽 디자이너']
}

export default class SearchStore {
    @observable firstFilter?: string;
    @observable secondFilter?: string;
    @observable firstFilters: string[] = ['개발자', '디자이너'];
    @observable secondFilters: string[] = [];
    @observable searchTitle: string = '';
    @observable searchText: string = '';
    @observable results: Track[] = [];

    constructor() {
        TrackApi.getTracks().then(res => this.results = res);
    }

    @action setFirstFilter = (filter?: string) => {
        this.firstFilter = filter;
        if (!!filter) {
            this.secondFilters = filterMap[filter];
        }
    }

    @action setSecondFilter = (filter?: string) => {
        this.secondFilter = filter;
    }

    @action setSearchText = (e: React.ChangeEvent) => {
        this.searchText = (e.target as HTMLInputElement).value;
    }

    @action search = () => {
        this.searchTitle = '';
        if (this.firstFilter) {
            this.searchTitle = ` > ${this.firstFilter}`;
            if (this.secondFilter) {
                this.searchTitle += ` > ${this.secondFilter}`;
            }
        }
        if (this.searchText.length > 0) {
            this.searchTitle += ` > ${this.searchText}`;
        }
    }
}