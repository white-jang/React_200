import React from "react";
import $ from "jquery";
// $ 기호 선언 (Jquery를 사용할 때 $ 기호를 붙여야 한다는 뜻)

const R016_JQuery = () => {
  const inputAlert = (e) => {
    let input_val = $("#inputId").val();
    alert(input_val);
  };

  return (
    <div>
      <h2>[This is JQuery]</h2>
      <input id="inputId" type="text" />
      <button id="buttonId" onClick={(e) => inputAlert(e)}>
        Jquery Button
      </button>
    </div>
  );
};

export default R016_JQuery;
