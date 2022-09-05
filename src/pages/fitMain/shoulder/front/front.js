import React from "react";
import DumbbellArnoldPress from "./detail/dumbbellArnoldPress";
import FrontRaise from "./detail/frontRaise";
import overheadPress from "./detail/overheadPress";

function Front() {
  return (
    <div>
      <button onClick={<FrontRaise />}>Front Raise</button>
      <button onClick={<DumbbellArnoldPress />}>Dumbbell Arnold Press</button>
      <button onClick={<overheadPress />}>Over Head Press</button>
    </div>
  );
}
export default Front;
