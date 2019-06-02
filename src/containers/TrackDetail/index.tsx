import React, { useState, useCallback} from 'react';
import queryString from 'query-string';
import styled from 'styled-components';
import { FormButton } from 'components/Button';
import { RouteComponentProps } from 'react-router';
import TrackStore from 'store/TrackStore';
import { SimpleLabel } from 'components/Label';
import { PREFIX } from 'util/const';

const Container = styled.div`
    padding: 30px 25% 150px 25%;
`

const BottomBar = styled.div`
    background-color: #ff9b00;
    position: fixed;
    display: flex;
    bottom: 0;
    width: 60%;
    padding: 10px 20%;
    align-items: center;
`
const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    margin-bottom: 10px;
    margin-top: 20px;
`
const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: gray;
    content: '';
    margin-bottom: 20px;
`

const TrackDetail: React.FC<RouteComponentProps> = ({ location, history }) => {
    const values = queryString.parse(location.search)
    const trackId = values.id;
    const [trackStore] = useState(() => new TrackStore(trackId ? trackId[0] : ''));
    const apply = useCallback(() => {
        trackStore.apply();
        history.push(`${PREFIX}/status`);
    }, [trackStore, history]);
    return (
        <>
            <Container>
                <Title>{trackStore.track ? trackStore.track.title : '5 guys와 함께 더 나은 사회를 만들어봐요!'}</Title>
                <SimpleLabel style={{ marginBottom: '20px' }}>{trackStore.track ? trackStore.track.subTitle : 'FIVE-GUYS'}</SimpleLabel>
                <Line />
                <img src={trackStore.track ? trackStore.track.thumbnail : 'https://cdn.zeplin.io/5cf26e12308e3b1daa3e6eaf/assets/b2129275-ea9a-451f-be18-33993e54c4f7.png'} alt="" />
                <div>
                -  레이니스트에서 미래의 핀테크 서버 엔지니어를 후원합니다.<br/><br/>

레이니스트는 국내 1위 돈 관리 앱 ‘뱅크샐러드’를 운영하는 핀테크 스타트업입니다. 국내 최대 규모의 금융상품 데이터와 알고리즘을 기반으로 흩어진 내 자산을 한 번에 관리할 수 있도록 하여 정보 비대칭성을 해결하고, 사람들의 삶에 가장 확실한 효용을 제공할 수 있는 금융 서비스를 만들고 있습니다.
<br/><br/>
레이니스트의 구성원은 소비자의 목소리를 듣고, 그들에게 서비스의 가치를 알리는 사람들입니다. 사용자의 반응을 통해 그들의 문제를 해결하고, 그들에게 더 많은 가치를 전달하기 위해 끊임없이 고민하며 학습합니다.
<br/><br/>
레이니스트의 구성원들은 자율적이고 주도적인 업무 환경에서 일하고 있습니다. 이는 ‘탑다운(Top-down) 방식’, ‘보고를 위한 보고’ 등의 수동적인 방식이 아닌, 스스로 가설을 세우고, 실험하고, 성과를 내는 주체적인 방식으로 일한다는 것을 의미합니다.
<br/><br/>
이렇게 든든한 팀원들과 함께 뱅크샐러드라는 서비스의 가치를 세상에 알릴 미래의 핀테크 서버 엔지니어를 후원합니다.
<br/><br/>
- 자격요건 <br/>
    - 컴퓨터 관련 전공자 3학년 이상 수료자<br/>
    - 알고리즘, 네트워크, 운영체제 지식이 있는 분<br/>
    - 알고리즘 및 프로그래밍 관련 대회 수상자<br/>
- 우대사항<br/>
    - 금융에 대한 관심과 지식이 많은 분<br/>
    - DevOps 환경에서 서버 개발 및 운영 경험이 있는 분<br/>
- 후원 사항<br/>
    - 생활 후원금 월 30만원 지급<br/>
    - 패스트캠퍼스 핀테크 과정 교육 지원<br/>
- 후원 조건<br/>
    - 패스트캠퍼스 핀테크 과정 교육 수료<br/>
    - 분기별 뱅크샐러드에 제시한 과제 제출<br/>
    - 뱅크샐러드 대학생 서포터즈 진행<br/><br/>
- 지원 유의사항<br/>
    - 담보채권 투자 대상은 (주)유트러스트에서 취급한 대출의 원리금 수취권입니다.<br/>
    - 후원 지원 활동은 지원자 본인의 판단에 의해 이루어지며, 당사는 후원사에 대한 후원금이나 조건을 보장하지 않으므로 지원시 신중한 결정이 필요합니다.<br/>
    - 후원조건을 완수하지 못하는 경우 후원이 중단될 수 있으며 후원금이 청구될 수 있습니다.

                </div>
            </Container>

            <BottomBar>
                서류를 제출하여 후원을 받아보세요!
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                    <FormButton style={{ color: '#ff9b00', backgroundColor: 'white' }} onClick={apply}>지원하기</FormButton>
                </div>
            </BottomBar>
        </>
    )
}

export default TrackDetail;