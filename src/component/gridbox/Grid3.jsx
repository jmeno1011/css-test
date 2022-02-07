import React from "react";
import style from "./css/styles.module.css";

export function Grid3() {
  return (
    <>
      <h2 className="inner-title">Grid-Rows-Columns</h2>
      <span className="description">
        grid는 첫번째가 1부터 여서 가장 왼쪽이 1 마지막이 5다
      </span>
      <div className={style.grid__div2}>
        <div className={style.header2}></div>
        <div className={style.content2}></div>
        <div className={style.nav2}></div>
        <div className={style.footer2}></div>
      </div>
    </>
  );
}
