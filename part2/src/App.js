/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import R017_Props from "./R017_Props";
import R018_PropsDataType from "./R018_PropsDataType";
import R019_PropsBoolean from "./R019_PropsBoolean";
import R020_PropsObjVal from "./R020_PropsObjVal";
import R021_PropsRequired from "./R021_PropsRequired";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <R017_Props text="This is Props" />
      <R018_PropsDataType
        String="react"
        Number={200}
        // eslint-disable-next-line no-self-compare
        Boolean={1 === 1}
        Array={[0, 1, 8]}
        Json={{ react: "리액트", twohundred: "200" }}
        Function={console.log("FunctionProps : function!")}
      />
      <R019_PropsBoolean BooleanTrueFalse={false} />
      <R019_PropsBoolean BooleanTrueFalse />
      <R020_PropsObjVal obj={{ react: "리액트", twohundred: "200" }} />
      <R021_PropsRequired ReactNumber={200} />
    </div>
  );
}

export default App;
