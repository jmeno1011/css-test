import React from "react";
import style from "./css/styles.module.css";

export function Grid5() {
  return (
    <>
      <h2 className="inner-title">Grid-Line-Naming</h2>
      <span className="description">
        <p>line에 이름을 붙여서 사용할때 css에서 설정가능</p>
      </span>
      <div className={style.grid__div4}>
        <div className={style.header4}></div>
        <div className={style.content4}></div>
        <div className={style.nav4}></div>
        <div className={style.footer4}></div>
      </div>
    </>
  );
}
