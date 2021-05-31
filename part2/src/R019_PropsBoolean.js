import React from "react";

const R019_PropsBoolean = ({ BooleanTrueFalse }) => {
  return (
    <div style={{ padding: "0px" }}>
      {BooleanTrueFalse ? "2. " : "1. "}
      {BooleanTrueFalse.toString()}
    </div>
  );
};

export default R019_PropsBoolean;
