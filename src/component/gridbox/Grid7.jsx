import React from "react";
import style from "./css/styles.module.css";

export function Grid7() {
  return (
    <>
      <h2 className="inner-title">Grid-Place, Items </h2>
      <span className="description">
        <p>justify-items && align-items - default:stretch</p>
        <p>justify는 가로 , align은 세로 방향이다.</p>
        <p>grid안에 박스안에 content가 있거나 size가 있어야됨</p>
        <p>place-items: 세로 가로 shortcut임</p>
      </span>
      <div className={style.grid__div6}>
        <div className={style.header6}>haeder</div>
        <div className={style.content6}>content</div>
        <div className={style.nav6}>nav</div>
        <div className={style.footer6}>footer</div>
      </div>
    </>
  );
}
