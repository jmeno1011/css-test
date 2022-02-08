import React from "react";
import style from "./css/styles.module.css";

export function Grid8() {
  return (
    <>
      <h2 className="inner-title">Grid-Place Content </h2>
      <span className="description">
        <p>grid-place&items 2 느낌</p>
        <p>place-content로 justify-content, align-content 통합됨</p>
      </span>
      <div className={style.grid__div7}>
        <div className={style.header7}>haeder</div>
        <div className={style.content7}>content</div>
        <div className={style.nav7}>nav</div>
        <div className={style.footer7}>footer</div>
        <div className={style.header7}>haeder</div>
        <div className={style.content7}>content</div>
        <div className={style.nav7}>nav</div>
        <div className={style.footer7}>footer</div>
        <div className={style.header7}>haeder</div>
        <div className={style.content7}>content</div>
        <div className={style.nav7}>nav</div>
        <div className={style.footer7}>footer</div>
        <div className={style.header7}>haeder</div>
        <div className={style.content7}>content</div>
        <div className={style.nav7}>nav</div>
        <div className={style.footer7}>footer</div>
      </div>
    </>
  );
}
