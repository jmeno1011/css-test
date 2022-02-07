import React from "react";

export function Flex2() {
  return (
    <>
      <h2 className="inner-title">flex-direction: column</h2>
      <span className="description">
        description : display:flex일 때 flex-direction의 row와 같다
      </span>
      <span className="description">
        세로로 표현하기 위해 flex-direction: column을 이용하면 다음과 같다
      </span>
      <div className="wrapper-2">
        <div className="box">
          <span className="box-number">1</span>
        </div>
        <div className="box">
          <span className="box-number">2</span>
        </div>
        <div className="box">
          <span className="box-number">3</span>
        </div>
      </div>
    </>
  );
}
