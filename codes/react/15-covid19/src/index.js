import React from "react";
import ReactDOM from "react-dom/client";

/**/
import App from "./App";
/*/
import App from './Test';
/**/
import { BrowserRouter } from "react-router-dom";

// redux 구성을 위한 참조
// provider을 통해 store구독
import { Provider } from "react-redux";
// 전체 slice를 포함한 store
import store from "./store";

import Meta from "./Meta";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // store 속성 명시
  <Provider store={store}>
    <BrowserRouter>
      <Meta />
      <App />
    </BrowserRouter>
  </Provider>
);
