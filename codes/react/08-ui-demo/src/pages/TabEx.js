import React, {memo, useState, useCallback, useMemo} from 'react';  // useRef를 React.useRef() 대신 useRef() 쓰기 위함
import styled from 'styled-components';
import classnames from 'classnames';


/** 썸네일 리스트에 대한 StyledComponent */
const TabContainer= styled.div`
    .tab-button-group {
        overflow: hidden;
        border: 1px solid #ccc;
        background-color: #f1f1f1;
        display: flex;

        .tab-button {
            display: flex;
            background-color: inherit;
            max-width: 100px;
            box-sizing: border-box;
            border: none;
            outline: none;
            padding: 14px 16px;
            color: #222;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
            transition: 0.3s;

            &:hover {
            background-color: #ddd;
            }

            &.active {
                background-color: #ccc;
            }
        }
    }

    .tab-page {
        padding: 6px 12px;
        border: 1px solid #ccc;
        border-top: none;
    }
`;

/** 탭을 표시하기 위한 컨텐츠 데이터 */
const tabContent = [{
    id: 'newyork',
    subject: 'NewYork',
    content: 'NewYork is the capital city of US.',
}, {
    id: 'london',
    subject: 'London',
    content: 'London is the capital city of England.',
}, {
    id: 'paris',
    subject: 'Paris',
    content: 'Paris is the capital city of France.',
}, {
    id: 'seoul',
    subject: 'Seoul',
    content: 'Seoul is the capital city of Korea.',
}];

// memo 안에 callback 함수를 안에 넣으면 최적화한다.
// memo는 memorize 성능최적화, memo를 여기서 직접 사용하거나 default로 내보낼때 memo로 감쌀 수도 있다. ex: export default memo(StyleEx);
const TabEx = memo(() => {
    /** 현재 표시되고 있는 탭의 인덱스 번호 */
    const [tabIndex, setTabIndex] = useState(0);

    /** 버튼에 대한 이벤트 처리 함수 */
    const onTabButtonClick = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;
        const href = current.getAttribute('href');
        console.log(href);
        setTabIndex(tabIndex => tabContent.findIndex(element => `#${element.id}` === href));
    });

    const {subject, content} = useMemo(() => {
        return tabContent[tabIndex];
    }, [tabIndex]);

    return (
        <div>
            <h1>TabEx</h1>

            <TabContainer>
            {/* Tab 버튼 그룹 */}
            <div className='tab-button-group'>
                {tabContent.map((v, i) => {

                    // 조건부 className 적용하기 위한 객체 생성
                    // cls => "tab-button active"
                    const cls = classnames({        
                    'tab-button': true,
                    'active': i === tabIndex
                    });

                    return (
                        <a key={i} className={cls} href={`#${v.id}`}
                            onClick={onTabButtonClick}>{v.subject}</a>
                    )
                })}
                </div>

            {/* Tab 페이지 영역 */}
            <div className='tab-page'>
                <h3>{subject}</h3>
                <p>{content}</p>
            </div>
            </TabContainer>
        </div>
    );
});

export default TabEx;
