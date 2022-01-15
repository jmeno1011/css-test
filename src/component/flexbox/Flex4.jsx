import React from "react";

function Flex4() {
  return (
    <>
      <h2 className="inner-title">flex-wrap</h2>
      <span className="description">
        description: flex-wrap은 box의 사이즈를 유지하려고 한다.
      </span>
      <span className="description">
        justify-content가 space-around일 때 flex-wrap:nowrap일 경우 box의
        사이즈가 작아지면서 화면에 보이지만
      </span>
      <span className="description">
        flex-wrap: wrap 일 경우 사이즈를 유지하고 그 아래로 내려준다.
      </span>
      <div className="wrapper-4">
        <div className="box">
          <span className="box-number">1</span>
        </div>
        <div className="box">
          <span className="box-number">2</span>
        </div>
        <div className="box">
          <span className="box-number">3</span>
        </div>
        <div className="box">
          <span className="box-number">4</span>
        </div>
        <div className="box">
          <span className="box-number">5</span>
        </div>
        <div className="box">
          <span className="box-number">6</span>
        </div>
      </div>
    </>
  );
}

export default Flex4;
