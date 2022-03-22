import React from "react";
import styled from "styled-components";

const Magnet = () => {
  const rowPin = [];
  for (let i = 0; i < 20; i++) {
    rowPin.push(<Pin key={i} />);
  }
  return (
    <>
      <h1 className="in-title">Magnet</h1>
      <div style={{ padding: "2rem" }}>
        <PinBox>
          <Row>{rowPin}</Row>
          <Row>{rowPin}</Row>
          <Row>{rowPin}</Row>
          <Row>{rowPin}</Row>
          <Row>{rowPin}</Row>
          <Row>{rowPin}</Row>
          <Row>{rowPin}</Row>
          <Row>{rowPin}</Row>
          <Row>{rowPin}</Row>
          <Row>{rowPin}</Row>
          <Row>{rowPin}</Row>
          <Row>{rowPin}</Row>
          <Row>{rowPin}</Row>
          <Row>{rowPin}</Row>
        </PinBox>
      </div>
    </>
  );
};

export default Magnet;

const PinBox = styled.div`
  height: 300px;
  width: 400px;
  background-color: #182029;
  display: flex;
  flex-direction: column;
  padding: 10px;
  &:hover {
    div > div {
      transform: scale(0.7);
    }
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
`;

const Pin = styled.div`
  height: 20px;
  width: 20px;
  padding: 5px;
  border-radius: 50%;
  background-color: #5773ff;
  transform: scale(0.5);
`;
