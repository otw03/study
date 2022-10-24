import React from 'react';
/** CSS 모듈 참조 --> 참조변수 이름을 지정한다. */
import myStyles from '../assets/CSS/mystyle.module.css';

const CssModule = () => {
    return (
        <div>
            <h2>CssModule</h2>

            <h3>변수에 저장된 CSS 클래스</h3>
            <div className={myStyles.myCssBox} />

            <h3>독립 클래스</h3>
            <div className="myBorderBox" />

            <h3>다중 클래스 적용 (1) - 역따옴표 사용</h3>
            <div className={`${myStyles['my-size']} ${myStyles['my-bg']}`} />

            <h3>변수에 저장된 CSS 클래스</h3>
            <div className={[myStyles['my-size'], myStyles['my-bg']].join(' ')} />
        </div>
    );
}

export default CssModule;
