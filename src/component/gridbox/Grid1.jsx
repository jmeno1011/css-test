import React from "react";
import style from "./css/styles.module.css";

export function Grid1() {
  return (
    <>
      <h2 className="inner-title">Grid-Basic-Concepts</h2>
      <span className="description">
        grid-template-columns, grid-template-rows, gap
      </span>
      <div className={style.father}>
        <div className={style.child}>1</div>
        <div className={style.child}>2</div>
        <div className={style.child}>3</div>
        <div className={style.child}>4</div>
        <div className={style.child}>5</div>
        <div className={style.child}>5</div>
        <div className={style.child}>5</div>
        <div className={style.child}>5</div>
        <div className={style.child}>5</div>
      </div>
    </>
  );
}
