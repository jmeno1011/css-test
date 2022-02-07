import React from "react";
import style from "./css/styles.module.css";

export function Grid2() {
  return (
    <>
      <h2 className="inner-title">Grid-Basic-Concepts</h2>
      <span className="description">
        grid-template-areas, grid-area 두개는 쌍으로 사용 ,
        <p>grid-template-columns는 repeat()으로 반복사용</p>
      </span>
      <div className={style.grid__div1}>
        <div className={style.header}></div>
        <div className={style.content}></div>
        <div className={style.nav}></div>
        <div className={style.footer}></div>
      </div>
    </>
  );
}
