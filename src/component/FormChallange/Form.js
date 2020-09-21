import React, { useState } from "react";

function Form() {
  const [value, setValue] = useState("");
  const [click, setClick] = useState("");
  const handleInput = () => {
    setClick(value);
  };
  return (
    <div>
      <h1>{click}</h1>
      <input
        type="text"
        placeholder="Just hit it"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleInput}>Add ToDo</button>
    </div>
  );
}

export default Form;
