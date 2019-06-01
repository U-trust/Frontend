import React, { useState, useCallback } from 'react';
import { observer } from 'mobx-react';
import { Option, TextInput } from '../../components/Input';
import { Container, SearchTitle, FormGroup, RightGroup, Grid } from './styles';
import SearchStore from 'store/SearchStore';
import { withFormInputLabel } from 'components/Label/FormInputLabel';
import { FormButton } from 'components/Button';
import { TrackCard } from 'components/Card/TrackCard';
import { Track } from 'models/Track';
import { RouteComponentProps } from 'react-router';

const OptionWithTitle = withFormInputLabel(Option);
const InputWithTitle = withFormInputLabel(TextInput);

const Search: React.FC<RouteComponentProps> = observer(({ history }) => {
    const [searchStore] = useState(() => new SearchStore());
    const trackHandler = useCallback((track: Track) => history.push(`/track?id=${track.id}`), [history])
    return (
        <Container>
            <SearchTitle>전체</SearchTitle>
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
                    <div><InputWithTitle title="검색" style={{ width: '250px', padding: '10px', marginRight: '10px' }} margin={false} /></div>
                    <FormButton style={{ height: '40px', padding: '10px 25px', backgroundColor: '#ff9b00' }} >검색</FormButton>
                </RightGroup>
            </FormGroup>
            <Grid>
                {searchStore.results.map(r => <TrackCard track={r} onClick={trackHandler} />)}
            </Grid>
        </Container>
    )
});

export default Search;