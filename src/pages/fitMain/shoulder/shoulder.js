import React, { useState } from "react";
import Front from "./front/front";
function Shoulder() {
  const [valid, setValid] = useState(false);
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setValid(!valid);
          }}
        >
          Front
        </button>
        {valid === true ? <Front /> : null}
      </div>
      <button> Side</button>
      <button> Back</button>
      <button>Return</button>
    </div>
  );
}

export default Shoulder;
