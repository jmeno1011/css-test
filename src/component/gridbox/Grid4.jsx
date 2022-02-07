import React from "react";
import style from "./css/styles.module.css";

export function Grid4() {
  return (
    <>
      <h2 className="inner-title">Grid-Short-Cut</h2>
      <span className="description">
        <p>grid-column: 1 / 5; 처럼 grid-column-start-end 생략 가능</p>
      </span>
      <div className={style.grid__div3}>
        <div className={style.header3}></div>
        <div className={style.content3}></div>
        <div className={style.nav3}></div>
        <div className={style.footer3}></div>
      </div>
    </>
  );
}
