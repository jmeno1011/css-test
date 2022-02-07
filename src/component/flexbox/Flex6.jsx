import React from "react";

export function Flex6() {
  return (
    <>
      <h2 className="inner-title">flex-basis</h2>
      <span className="description">
        description: flex-basis는 박스의 크기를 지정하는 방법
      </span>
      <span className="description">
        현재 걸린 내용은 flex-direction: column, 박스:flex-basis:30%, 2번째 박스
        flex-glow:1
      </span>
      <span className="description">
        박스 크기가 30%씩 3개 10%가 남지만 flex-glow로 공백이 채워짐
      </span>
      <div className="wrapper-6">
        <div className="box6">
          <span className="box-number">1</span>
        </div>
        <div className="box6">
          <span className="box-number">2</span>
        </div>
        <div className="box6">
          <span className="box-number">3</span>
        </div>
      </div>
    </>
  );
}
