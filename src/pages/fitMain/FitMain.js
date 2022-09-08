import Style from "./fitMain.module.css";
import { useState } from "react";
import Shoulder from "./shoulder/shoulder";

const FitMain = () => {
  const [valid, setValid] = useState(false);

  return (
    <div>
      <div className={Style.container}>
        <div className={Style.fixedMenu}>
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
            <div>
              <button>Back</button>
            </div>
            <div>
              <button>Leg</button>
            </div>
            <div>
              <button>Arm</button>
            </div>
            <div>
              <button>Core</button>
            </div>
          </div>
        </div>
        <div className={Style.container}></div>
      </div>
    </div>
  );
};
export default FitMain;
