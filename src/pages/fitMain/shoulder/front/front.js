import React, { useState } from "react";
import FrontRaise from "./detail/frontRaise";

function Front() {
  const [valid, setValid] = useState(false);
  return (
    <>
      <div>
        <button
          onClick={() => {
            setValid(!valid);
          }}
        >
          Front Raise
        </button>
        <div>{valid === true ? <FrontRaise /> : null}</div>
        <button>Dumbbell Arnold Press</button>
        <button>Over Head Press</button>
      </div>
    </>
  );
}
export default Front;
