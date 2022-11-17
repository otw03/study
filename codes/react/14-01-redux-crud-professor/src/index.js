/**
 * @filename: index.js
 * @description: 프로그램 시작점.
 *               라우팅 범위를 설정(BrowserRouter)하고 프로그램을 시작(App)한다.
 * @author: 
 */

/* 패키지 참조 */
import React from 'react';
import ReactDOM from 'react-dom/client';
// 라우팅 범위 설정
import { BrowserRouter } from 'react-router-dom';

// 프로그램 시작
/**/
import App from './App';
/*/
import App from './Test';
/**/

/** 리덕스 구성을 위한 참조 */
import { Provider } from 'react-redux';
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // store가 Provider를 통해 모든 하위 컴포넌트에 전달된다
    <Provider store={store}>
        {/* <Meta /> */}
        {/* <GlobalStyles /> */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
