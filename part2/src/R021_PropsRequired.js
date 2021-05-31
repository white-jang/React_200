import React from "react";
import datatype from "prop-types";

const R021_PropsRequired = ({ ReactNumber }) => {
  return <div style={{ padding: "0px" }}>{ReactNumber}</div>;
};

R021_PropsRequired.propTypes = {
  ReactNumber: datatype.isRequired,
};

export default R021_PropsRequired;
