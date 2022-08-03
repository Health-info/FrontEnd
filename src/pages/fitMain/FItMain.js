//import Style from "./fitMain.module.css";

import { createElement } from "react";

const ShoulderEx = () => {
  return (
    <div>
      <button type="button">Military Press</button>
    </div>
  );
};

const FitMain = () => {
  return (
    <div>
      <div>
        <div>
          <button type="button" onClick={ShoulderEx}>
            Shoulder
          </button>
        </div>
        <div>
          <button type="button">Back</button>
        </div>
        <div>
          <button type="button">Chest</button>
        </div>
        <div>
          <button type="button">Leg</button>
        </div>
        <div>
          <button type="button">Arm</button>
        </div>
        <div>
          <button type="button">Core</button>
        </div>
        <div>
          <button type="button">Return</button>
        </div>
      </div>
    </div>
  );
};
export default FitMain;
