import React, { useState } from "react";

function HookChallange() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const changeTime = () => {
    const somoy = new Date().toLocaleTimeString();
    setTime(somoy);
  };
  setInterval(changeTime, 1000);
  return (
    <div>
      {" "}
      <br /> <br />
      <h1>{time}</h1>
      <button
        onClick={changeTime}
        style={{
          backgroundColor: "tomato",
          padding: "20px",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "20px",
        }}
      >
        Change Time
      </button>
    </div>
  );
}

export default HookChallange;
