import { observable, action } from 'mobx';
import { Track } from '../models/Track';

export default class SearchStore {
    @observable firstFilter?: string;
    @observable secondFilter?: string;
    @observable firstFilters: string[] = ['filter1', 'filter2'];
    @observable secondFilters: string[] = ['filter1', 'filter2'];
    @observable results: Track[] = [{
        id: '1',
        title: '블랭크가 책임져드립니다. 개발자...',
        subTitle: '블랭크 코퍼레이션',
        thumbnail: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/5d2d72c9-e5a5-4cf2-9469-eeb7de2c43ec.png'
    },{
        id: '5',
        title: '1부터 10까지 크몽에서 디자이너...',
        subTitle: '(주)크몽',
        thumbnail: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/b2129275-ea9a-451f-be18-33993e54c4f7.png'
    },{
        id: '6',
        title: '당신의 개발자 꿈을 키워드립니다!',
        subTitle: '(주)비바리퍼블리카',
        thumbnail: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/5232f419-8fb4-40b1-9739-c1f552511f8d.png'
    },{
        id: '7',
        title: '망설이지마세요! 개발자로 키워드...',
        subTitle: '(주)레이니스트',
        thumbnail: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/c75c6e85-a804-4c3c-a7be-0b91447d289b.png'
    },{
        id: '7',
        title: '망설이지마세요! 디자이너로 키워드...',
        subTitle: '(주)레이니스트',
        thumbnail: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/5839e933-9bb9-490d-9918-aa617012d411.png'
    },{
        id: '8',
        title: '고생많으셨죠? 그 무게 이제 저희가...',
        subTitle: '(주)빙글',
        thumbnail: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/ab2ec72c-4610-423d-b4f7-c07468096e8a.png'
    },{
        id: '8',
        title: '고생많으셨죠? 그 무게 이제 저희가...',
        subTitle: '(주)빙글',
        thumbnail: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/ab2ec72c-4610-423d-b4f7-c07468096e8a.png'
    },{
        id: '9',
        title: '후원받을 디자이너를 찾습니다...!',
        subTitle: '(주)우아한형제들',
        thumbnail: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/60dd3b70-a212-4470-bc98-3692cd1edcd7.png'
    },{
        id: '9',
        title: '후원받을 디자이너를 찾습니다...!',
        subTitle: '(주)우아한형제들',
        thumbnail: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/60dd3b70-a212-4470-bc98-3692cd1edcd7.png'
    },{
        id: '10',
        title: '개발자의 꿈을 이루고 싶은 분들을 찾...',
        subTitle: '(주)에이비일팔공',
        thumbnail: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/eae00719-b50c-4ef9-be36-c108a3af6bdd.png'
    },{
        id: '10',
        title: '개발자의 꿈을 이루고 싶은 분들을 찾...',
        subTitle: '(주)에이비일팔공',
        thumbnail: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/eae00719-b50c-4ef9-be36-c108a3af6bdd.png'
    },{
        id: '11',
        title: '포기하지마세요! 당신의 디자이너의...',
        subTitle: '(주)마이다스아이티',
        thumbnail: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/a96018af-2d97-4f5c-b890-0e71b4baefbf.png'
    },{
        id: '11',
        title: '포기하지마세요! 당신의 디자이너의...',
        subTitle: '(주)마이다스아이티',
        thumbnail: 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/a96018af-2d97-4f5c-b890-0e71b4baefbf.png'
    }];

    @action setFirstFilter = (filter?: string) => {
        this.firstFilter = filter;
    }

    @action setSecondFilter = (filter?: string) => {
        this.secondFilter = filter;
    }
}