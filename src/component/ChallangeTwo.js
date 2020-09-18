import React from "react";

function ChallangeTwo() {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const name = "Kabir";
  return (
    <div>
      <h1>{`My name is ${name}`}</h1>
      <p>{`Current Date is: ${date}`}</p>
      <p>{`Current Time is: ${time}`}</p>
    </div>
  );
}

export default ChallangeTwo;
