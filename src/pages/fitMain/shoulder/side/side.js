import React from "react";
import CableSideLateralRaise from "./detail/CableSideLateralRaise";
import SideLateralRaise from "./detail/sideLateralRaise";
import UprightRow from "./detail/UprightRow";
function Side() {
  return (
    <div>
      <button onClick={<SideLateralRaise />}>Side Lateral Raise</button>
      <button onClick={<UprightRow />}>Uprigt Row</button>
      <button onClick={<CableSideLateralRaise />}>
        Cable Side Lateral Raise
      </button>
    </div>
  );
}
export default Side;
