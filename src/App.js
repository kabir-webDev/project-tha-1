import React from "react";
import "./App.css";
import CD from "./component/CountDown/CD";
import Form from "./component/FormChallange/Form";
// import ChallangeThree from "./component/ChallangeThree/ChallangeThree";
// import HookChallange from "./component/HooksChallange/HookChallange";
// import ChallangeTwo from "./component/ChallangeTwo/ChallangeTwo";

function App() {
  return (
    <div className="App">
      {/* <ChallangeTwo />
      <ChallangeThree />
      <HookChallange /> */}
      <Form />
      {/* <CD /> */}
    </div>
  );
}

export default App;
