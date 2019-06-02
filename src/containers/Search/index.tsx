import React, { useState, useCallback } from 'react';
import { inject, observer } from 'mobx-react';
import { Option, TextInput } from '../../components/Input';
import { Container, SearchTitle, FormGroup, RightGroup, Grid } from './styles';
import SearchStore from 'store/SearchStore';
import { withFormInputLabel } from 'components/Label/FormInputLabel';
import { FormButton } from 'components/Button';
import { TrackCard } from 'components/Card/TrackCard';
import { Track } from 'models/Track';
import { RouteComponentProps } from 'react-router';
import UserStore from 'store/UserStore';
import AuthStore from 'store/AuthStore';
import { UserCard } from 'components/Card/UserCard';

const OptionWithTitle = withFormInputLabel(Option);
const InputWithTitle = withFormInputLabel(TextInput);

interface Props {
    authStore?: AuthStore
}

const Search: React.FC<Props & RouteComponentProps> = inject('authStore')(observer(({ authStore, history }) => {
    const auth = authStore as AuthStore;
    const [searchStore] = useState(() => new SearchStore());
    const [userStore] = useState(() => new UserStore());
    const trackHandler = useCallback((track: Track) => history.push(`/detail?id=${track.id}`), [history])
    return (
        <Container>
            <SearchTitle>{`전체${searchStore.searchTitle}`}</SearchTitle>
            <FormGroup style={{ marginBottom: '20px' }}>
                <div style={{ marginRight: '30px' }}>
                    <OptionWithTitle
                        title="1차 분류"
                        options={searchStore.firstFilters}
                        value={searchStore.firstFilter}
                        placeholder="1차 분류"
                        onSelectValue={searchStore.setFirstFilter} />
                </div>
                <div>
                    <OptionWithTitle
                        title="2차 분류"
                        options={searchStore.secondFilters}
                        value={searchStore.secondFilter}
                        placeholder="2차 분류"
                        onSelectValue={searchStore.setSecondFilter} />
                </div>
                <RightGroup>
                    <div><InputWithTitle title="검색" value={searchStore.searchText} onChange={searchStore.setSearchText} style={{ width: '250px', padding: '10px', marginRight: '10px' }} margin={false} /></div>
                    <FormButton onClick={searchStore.search} style={{ height: '40px', padding: '10px 25px', backgroundColor: '#ff9b00' }} >검색</FormButton>
                </RightGroup>
            </FormGroup>
            <Grid>
                {auth.isCompany && userStore.results.map(user => <UserCard user={user}/>)}
                {!auth.isCompany && searchStore.results.map(r => <TrackCard track={r} onClick={trackHandler} />)}
            </Grid>
        </Container>
    )
}));

export default Search;