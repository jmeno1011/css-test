import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FlexBox from "./component/flexbox/FlexBox";
import Flex1 from "./component/flexbox/Flex1";
import Flex2 from "./component/flexbox/Flex2";
import Flex3 from "./component/flexbox/Flex3";
import Flex4 from "./component/flexbox/Flex4";
import Flex5 from "./component/flexbox/Flex5";
import Flex6 from "./component/flexbox/Flex6";
import ActionMenu from "./component/action-menu/ActionMenu";
import CodeBox from "./component/code-box/CodeBox";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="flex-box/*" element={<FlexBox />}>
            <Route path="flex" element={<Flex1 />} />
            <Route path="flex-direction" element={<Flex2 />}></Route>
            <Route path="align-self" element={<Flex3 />}></Route>
            <Route path="wrap" element={<Flex4 />}></Route>
            <Route path="glow-shrink" element={<Flex5 />}></Route>
            <Route path="flex-basis" element={<Flex6 />}></Route>
          </Route>
          <Route path="action-menu" element={<ActionMenu />}></Route>
          <Route path="code-box" element={<CodeBox />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
