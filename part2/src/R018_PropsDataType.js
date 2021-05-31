import React from "react";
import datatype from "prop-types"; // 리액트 기본 내장 패키지

const R018_PropsDataType = ({ String, Number, Boolean, Json, Function }) => {
  return (
    <div style={{ padding: "0px" }}>
      <p>StringProps : {String}</p>
      <p>NumberProps : {Number}</p>
      <p>BooleanProps : {Boolean.toString()}</p>
      <p>ArrayProps : {Array.toString()}</p>
      <p>JsonProps : {JSON.stringify(Json)}</p>
      <p>FunctionProps : {Function}</p>
    </div>
  );
};

// props의 자료형 선언
R018_PropsDataType.propTypes = {
  // String은 number가 아닌 string이므로 콘솔에 오류 표시
  String: datatype.number,
  Number: datatype.number,
  Boolean: datatype.bool,
  Array: datatype.array,
  Json: datatype.object,
  Function: datatype.func,
};

export default R018_PropsDataType;
