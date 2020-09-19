import React from "react";

function ChallangeThree() {
  const time = new Date().getHours();
  var greeting = "";
  const styles = {};
  if (time >= 23 && time <= 6) {
    greeting = "Good Night";
  } else if (time > 6 && time <= 10) {
    greeting = "Good Morning";
  } else if (time > 10 && time <= 19) {
    greeting = "Good Day";
    styles.color = "tomato";
  } else {
    greeting = "Good Evening";
  }
  return (
    <div>
      <h2>Time is : {time}</h2>
      <h1 style={styles}>{greeting}, sir</h1>
    </div>
  );
}

export default ChallangeThree;
