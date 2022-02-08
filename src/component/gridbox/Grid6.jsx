import React from "react";
import style from "./css/styles.module.css";

export function Grid6() {
  return (
    <>
      <h2 className="inner-title">Grid-Template </h2>
      <span className="description">
        <p>1fr → fr은 가능한 만큼 공간을 차지함</p>
        <p>
          grid-template 을 통해서도 가로는 이름(grid-area), 세로는 1fr로
          설정가능
        </p>
      </span>
      <div className={style.grid__div5}>
        <div className={style.header5}></div>
        <div className={style.content5}></div>
        <div className={style.nav5}></div>
        <div className={style.footer5}></div>
      </div>
    </>
  );
}
