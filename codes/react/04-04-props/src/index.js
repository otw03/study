import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import Meta from './Meta';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* Route처리를 적용 받는 페이지에서 이 컴포넌트를 중복 사용시, 이 내용이 모든 페이지에 공통 적용된다. */}
        <Meta />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
