import { Input } from "@material-ui/core";
import React from "react";
import "./App.css";
// import CD from "./component/CountDown/CD";
// import Form from "./component/FormChallange/Form";
// import MaterialUI from "./component/Material/MaterialUI";
// import ChallangeThree from "./component/ChallangeThree/ChallangeThree";
// import HookChallange from "./component/HooksChallange/HookChallange";
// import ChallangeTwo from "./component/ChallangeTwo/ChallangeTwo";
import Todo from "./component/ToDo/Todo";

function App() {
  return (
    <div className="App">
      {/* <ChallangeTwo />
      <ChallangeThree />
      <HookChallange />
      <Form />
      <CD />
      <MaterialUI /> */}
      <Todo />
      <Input />
    </div>
  );
}

export default App;
