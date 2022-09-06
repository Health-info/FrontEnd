import React, { useState } from "react";
import Back from "./back/back";
import Front from "./front/front";
import Side from "./side/side";
function Shoulder() {
  const [valid, setValid] = useState("");
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setValid("Front");
          }}
        >
          Front
        </button>
        {valid === "Front" ? <Front /> : null}
      </div>
      <button
        onClick={() => {
          setValid("Side");
        }}
      >
        Side
      </button>
      {valid === "Side" ? <Side /> : null}
      <button
        onClick={() => {
          setValid("Back");
        }}
      >
        Back
      </button>
      {valid === "Back" ? <Back /> : null}
      <button
        onClick={() => {
          setValid("");
        }}
      >
        Return
      </button>
    </div>
  );
}

export default Shoulder;
