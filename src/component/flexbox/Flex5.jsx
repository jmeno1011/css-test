import React from "react";

export function Flex5() {
  return (
    <>
      <h2 className="inner-title">flex-grow, flex-shrink</h2>
      <span className="description">
        description : flex-shrink는 해당 박스의 크기를 배수에 따라 줄여준다.{" "}
      </span>
      <span className="description">
        flex-shrink의 default값은 1이고 2번째 박스에 2로 설정하여 window의
        사이즈를 줄이면 다른 박스와 비교했을때 크기가 두배로 줄어든다{" "}
      </span>
      <span className="description">
        description : flex-grow는 주변 공간을 채워간다.{" "}
      </span>
      <div className="wrapper-5">
        <div className="box box5">
          <span className="box-number">1</span>
        </div>
        <div className="box box5">
          <span className="box-number">2</span>
        </div>
        <div className="box box5">
          <span className="box-number">3</span>
        </div>
      </div>
      <div className="wrapper-5-2">
        <div className="box box5-2">
          <span className="box-number">4</span>
        </div>
        <div className="box box5-2">
          <span className="box-number">5</span>
        </div>
        <div className="box box5-2">
          <span className="box-number">6</span>
        </div>
      </div>
    </>
  );
}
