import { observable, action } from 'mobx';

export default class SearchStore {
    @observable firstFilter?: string;
    @observable secondFilter?: string;
    @observable firstFilters: string[] = ['filter1', 'filter2'];
    @observable secondFilters: string[] = ['filter1', 'filter2'];

    @action setFirstFilter = (filter?: string) => {
        this.firstFilter = filter;
    }

    @action setSecondFilter = (filter?: string) => {
        this.secondFilter = filter;
    }
}