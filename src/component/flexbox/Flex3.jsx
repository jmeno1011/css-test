import React from "react";

function Flex3() {
  return (
    <>
      <h2 className="inner-title">align-self</h2>
      <span className="description">
        description : align-self의 default는 flex-start
      </span>
      <span className="description">
        1번은 default로 설정 안함, 2번은 align-self: center, 3번은 align-self:
        flex-end
      </span>
      <div className="wrapper-3">
        <div className="box box3">
          <span className="box-number">1</span>
        </div>
        <div className="box box3">
          <span className="box-number">2</span>
        </div>
        <div className="box box3">
          <span className="box-number">3</span>
        </div>
      </div>
    </>
  );
}

export default Flex3;
