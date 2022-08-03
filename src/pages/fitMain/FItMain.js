//import Style from "./fitMain.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const FitMain = () => {
  //const [shoulderClicked, setShoulderClicked] = useState(false);
  const [valid, setValid] = useState();
  const [exercise, setExercise] = useState();

  const Shoulder = () => {
    setValid((current) => "S");
  };
  const Back = () => {
    setValid((current) => "B");
  };
  const Chest = () => {
    setValid((current) => "C");
  };
  const Leg = () => {
    setValid((current) => "L");
  };
  const Arm = () => {
    setValid((current) => "A");
  };
  const Core = () => {
    setValid((current) => "Co");
  };

  //어깨 삼각근
  const ShoulderFront = () => {
    setExercise((current) => "S1");
  };
  const ShoulderSide = () => {
    setExercise((current) => "S2");
  };
  const ShoulderBack = () => {
    setExercise((current) => "S3");
  };
  //등 운동
  const BackLats = () => {
    setExercise((current) => "B1");
  };
  const BackUpper = () => {
    setExercise((current) => "B2");
  };
  const BackMiddle = () => {
    setExercise((current) => "B3");
  };
  const BackLow = () => {
    setExercise((current) => "B4");
  };

  return (
    <div>
      <div>
        <div>
          <button type="button" onClick={Shoulder}>
            Shoulder
          </button>
        </div>
        {valid === "S" ? (
          <div>
            <button type="button" onClick={ShoulderFront}>
              Front
            </button>
            {exercise === "S1" ? (
              <div>
                <button type="button">Barbell Shoulder Press</button>
                <button type="button">Dumbbell Shoulder Press</button>
                <button type="button">Shoulder Press Machine</button>
                <button type="button">Military Press</button>
                <button type="button">Front Raise</button>
              </div>
            ) : null}

            <button type="button" onClick={ShoulderSide}>
              Side
            </button>
            {exercise === "S2" ? (
              <div>
                <button type="button">Side Lateral Raise</button>
                <button type="button">Upright Row</button>
                <button type="button">Arnold Press</button>
              </div>
            ) : null}
            <button type="button" onClick={ShoulderBack}>
              Back Side
            </button>
            {exercise === "S3" ? (
              <div>
                <button type="button">BentOver Raise</button>
                <button type="button">Reverse Pec Dec Fly</button>
                <button type="button">Face Pull</button>
                <button type="button">Cable Reverse Fly</button>
              </div>
            ) : null}
          </div>
        ) : null}

        <div>
          <button type="button" onClick={Back}>
            Back
          </button>
        </div>
        {valid === "B" ? (
          <div>
            <button type="button" onClick={BackLats}>
              Lats
            </button>
            {exercise === "B1" ? (
              <div>
                <button type="button">Pull Up</button>
                <button type="button">Lat Pull Down</button>
                <button type="button">Straight Arm Pull Down</button>
                <button type="button">Dumbbell Row</button>
                <button type="button">One Arm Dumbbell Row</button>
                <button type="button">Romanian DeadLift </button>
                <button type="button">Seated Cable Row</button>
              </div>
            ) : null}

            <button type="button" onClick={BackUpper}>
              Upper Back
            </button>
            {exercise === "B2" ? (
              <div>
                <button type="button">Bent Over Barbell Row</button>
                <button type="button">Shrug</button>
                <button type="button">Reverse Fly</button>
                <button type="button">Pull Up</button>
              </div>
            ) : null}
            <button type="button" onClick={BackMiddle}>
              Middle Back
            </button>
            {exercise === "B3" ? (
              <div>
                <button type="button">Bent Over Barbell Row</button>
                <button type="button">Seated Chest Supported Row</button>
                <button type="button">Seated Cable Row</button>
                <button type="button">Pull Up</button>
              </div>
            ) : null}

            <button type="button" onClick={BackLow}>
              Lower Back
            </button>
            {exercise === "B4" ? (
              <div>
                <button type="button">Chin Up</button>
                <button type="button">Rack Pull</button>
                <button type="button">DeadLift</button>
                <button type="button">High Low Machine</button>
                <button type="button">One Arm Dumbbell Row</button>
              </div>
            ) : null}
          </div>
        ) : null}

        <div>
          <button type="button" onClick={Chest}>
            Chest
          </button>
        </div>
        {valid === "C" ? (
          <div>
            <button type="button">Upper Chest</button>
            <button type="button">Middle Chest</button>
            <button type="button">Lower Chest</button>
          </div>
        ) : null}

        <div>
          <button type="button" onClick={Leg}>
            Leg
          </button>
        </div>
        {valid === "L" ? (
          <div>
            <button type="button">Quadriceps</button>
            <button type="button">Biceps Femoris</button>
            <button type="button">Calf</button>
          </div>
        ) : null}

        <div>
          <button type="button" onClick={Arm}>
            Arm
          </button>
        </div>
        {valid === "A" ? (
          <div>
            <button type="button">Biceps</button>
            <button type="button">Triceps</button>
            <button type="button">ForeArm</button>
          </div>
        ) : null}

        <div>
          <button type="button" onClick={Core}>
            Core
          </button>
        </div>
        {valid === "Co" ? (
          <div>
            <button type="button">Plank</button>
            <button type="button">L-sit</button>
            <button type="button">AB Rollout</button>
            <button type="button">DeadLift</button>
            <button type="button">Squat</button>
            <button type="button">Sit Up</button>
          </div>
        ) : null}

        <Link to="/">
          <div>
            <button type="button">Return</button>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default FitMain;
