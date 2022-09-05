import React from "react";
import Back from "./back/back";
import Front from "./front/front";
import Side from "./side/side";
function Shoulder() {
  return (
    <div>
      <button onClick={<Front />}> Front</button>
      <button onClick={<Side />}> Side</button>
      <button onClick={<Back />}> Back</button>
    </div>
  );
}

export default Shoulder;
