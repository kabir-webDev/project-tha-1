import React from "react";
import Button from "@material-ui/core/Button";
import "./MaterialUI.css";

function MaterialUI() {
  return (
    <div className="container">
      <div className="box">
        <h2>I am material</h2>
        <Button variant="contained" className="btn">
          Add To Basket
        </Button>
      </div>
    </div>
  );
}

export default MaterialUI;
