import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [value, setValue] = useState("");
  const [click, setClick] = useState("");
  const [isKata, setIsKata] = useState(false);
  const handleInput = () => {
    setClick(value);
  };
  const handleKato = () => {
    setIsKata(true);
  };
  return (
    <div>
      {isKata ? (
        <h1 style={{ textDecoration: "line-through" }}>{click}</h1>
      ) : (
        <h1>{click}</h1>
      )}
      <input
        type="text"
        placeholder="Just hit it"
        onChange={(e) => setValue(e.target.value)}
      />{" "}
      <br />
      <button onClick={handleInput}>Add ToDo</button>
      <button onClick={handleKato}>Completed</button>
    </div>
  );
}

export default Form;
