// (1) 리액트 패키지 참조(모든 js 파일의 최 상단에서 필수명시)
import React from 'react';

const MySubComponent = () => {
    return (
        <div>
            <ul>
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
            </ul>
        </div>
    );
};

export default MySubComponent;