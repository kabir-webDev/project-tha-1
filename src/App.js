import { Input, Table } from "@material-ui/core";
import React from "react";
import "./App.css";
import Chart from "./component/TableChart/Chart";
import Table from "./component/TableChart/Table";
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
      <MaterialUI />
      <Todo />
      <Input /> */}
      <Chart />
      <Table />
    </div>
  );
}

export default App;
