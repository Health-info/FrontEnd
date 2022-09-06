import Style from "./fitMain.module.css";
import { useState } from "react";
import Shoulder from "./shoulder/shoulder";

const FitMain = () => {
  const [valid, setValid] = useState(false);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setValid(!valid);
          }}
        >
          Shoulder
        </button>
        {valid === true ? <Shoulder /> : null}
      </div>
      <button>Back</button>
      <button>Leg</button>
      <button>Arm</button>
      <button>Core</button>
    </div>
  );
};
export default FitMain;
