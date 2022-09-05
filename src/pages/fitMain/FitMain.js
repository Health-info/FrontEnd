import Style from "./fitMain.module.css";
import { useState } from "react";
import Shoulder from "./shoulder/shoulder";

const FitMain = () => {
  return (
    <div>
      <button onClick={<Shoulder />}>Shoulder</button>
      <button>Back</button>
      <button>Leg</button>
      <button>Arm</button>
      <button>Core</button>
    </div>
  );
};
export default FitMain;
