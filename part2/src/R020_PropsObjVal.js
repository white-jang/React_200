import React from "react";
import datatype from "prop-types";

const R020_PropsObjVal = ({ obj }) => {
  return <div style={{ padding: "0px" }}>{JSON.stringify(obj)}</div>;
};

// 객체 내부 필드는 shape로 자료형을 확인
R020_PropsObjVal.propTyps = {
  obj: datatype.shape({
    react: datatype.string,
    // string-number 자료형이 맞지 않아 오류 발생
    twohundred: datatype.number,
  }),
};

export default R020_PropsObjVal;
