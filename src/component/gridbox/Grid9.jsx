import React from "react";
import style from "./css/styles.module.css";

export function Grid9() {
  return (
    <>
      <h2 className="inner-title">Grid-Auto Columns and Rows </h2>
      <span className="description">
        <p>grid-auto-rows는 위에 반복되고 남은 부분을 자동적으로 지정해준다.</p>
        <p>grid-auto-columns도 rows랑 같음</p>
        <p>grid-auto-flow랑 flex-direction이랑 같음 </p>
      </span>
      <div className={style.grid__div8}>
        <div className={style.item}>1</div>
        <div className={style.item}>2</div>
        <div className={style.item}>3</div>
        <div className={style.item}>4</div>
        <div className={style.item}>5</div>
        <div className={style.item}>6</div>
        <div className={style.item}>7</div>
        <div className={style.item}>8</div>
        <div className={style.item}>9</div>
        <div className={style.item}>10</div>
        <div className={style.item}>11</div>
        <div className={style.item}>12</div>
        <div className={style.item}>13</div>
        <div className={style.item}>14</div>
        <div className={style.item}>15</div>
        <div className={style.item}>16</div>
        <div className={style.item}>17</div>
        <div className={style.item}>18</div>
        <div className={style.item}>19</div>
        <div className={style.item}>20</div>
      </div>
    </>
  );
}
