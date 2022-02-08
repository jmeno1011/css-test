import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  FlexBox,
  Flex1,
  Flex2,
  Flex3,
  Flex4,
  Flex5,
  Flex6,
} from "./component/flexbox";
import ActionMenu from "./component/action-menu/ActionMenu";
import {
  GridBox,
  Grid1,
  Grid2,
  Grid3,
  Grid4,
  Grid5,
  Grid6,
  Grid7,
  Grid8,
  Grid9,
} from "./component/gridbox";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/css-test/" element={<App />}>
          <Route path="flex-box/*" element={<FlexBox />}>
            <Route path="flex" element={<Flex1 />} />
            <Route path="flex-direction" element={<Flex2 />} />
            <Route path="align-self" element={<Flex3 />} />
            <Route path="wrap" element={<Flex4 />}></Route>
            <Route path="glow-shrink" element={<Flex5 />}></Route>
            <Route path="flex-basis" element={<Flex6 />}></Route>
          </Route>
          <Route path="grid-box/*" element={<GridBox />}>
            <Route path="grid-ex" element={<Grid1 />} />
            <Route path="grid-template-area" element={<Grid2 />} />
            <Route path="grid-rows-columns" element={<Grid3 />} />
            <Route path="grid-short-cut" element={<Grid4 />} />
            <Route path="grid-line-naming" element={<Grid5 />} />
            <Route path="grid-template" element={<Grid6 />} />
            <Route path="grid-place-items" element={<Grid7 />} />
            <Route path="grid-place-content" element={<Grid8 />} />
            <Route path="grid-auto-row-columns" element={<Grid9 />} />
          </Route>
          <Route path="action-menu" element={<ActionMenu />}></Route>
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
