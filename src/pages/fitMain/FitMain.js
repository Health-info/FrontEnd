import Style from "./fitMain.module.css";
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

  const ChestUpper = () => {
    setExercise((current) => "C1");
  };
  const ChestMiddle = () => {
    setExercise((current) => "C2");
  };
  const ChestLow = () => {
    setExercise((current) => "C3");
  };

  const LegQuad = () => {
    setExercise((current) => "L1");
  };
  const LegBiceps = () => {
    setExercise((current) => "L2");
  };
  const LegGlutes = () => {
    setExercise((current) => "L3");
  };

  const ArmBiceps = () => {
    setExercise((current) => "A1");
  };
  const ArmTriceps = () => {
    setExercise((current) => "A2");
  };
  const ArmFore = () => {
    setExercise((current) => "A3");
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
            <button type="button" onClick={ChestUpper}>
              Upper Chest
            </button>
            {exercise === "C1" ? (
              <div>
                <button type="button">Incline Bench Press</button>
                <button type="button">Incline Dumbbell Press</button>
                <button type="button">Decline Push Up</button>
                <button type="button">Low Cable Fly</button>
              </div>
            ) : null}
            <button type="button" onClick={ChestMiddle}>
              Middle Chest
            </button>
            {exercise === "C2" ? (
              <div>
                <button type="button">Bench Press</button>
                <button type="button">Dumbbell Press</button>
                <button type="button">Pec Dec Fly</button>
                <button type="button">Chest Press</button>
                <button type="button">Cable Fly</button>
                <button type="button">Push Up</button>
              </div>
            ) : null}
            <button type="button" onClick={ChestLow}>
              Lower Chest
            </button>
            {exercise === "C3" ? (
              <div>
                <button type="button">Decline Bench Press</button>
                <button type="button">Dips</button>
                <button type="button">Incline Push Up</button>
              </div>
            ) : null}
          </div>
        ) : null}

        <div>
          <button type="button" onClick={Leg}>
            Leg
          </button>
        </div>
        {valid === "L" ? (
          <div>
            <button type="button" onClick={LegQuad}>
              Quadriceps
            </button>
            {exercise === "L1" ? (
              <div>
                <button type="button">Waliking Lunge</button>
                <button type="button">Bulgarian Split Squat</button>
                <button type="button">Front Squat</button>
                <button type="button">Leg Extension</button>
                <button type="button">Leg Press</button>
                <button type="button">Barbell Back Squat</button>
              </div>
            ) : null}

            <button type="button" onClick={LegBiceps}>
              Biceps Femoris
            </button>
            {exercise === "L2" ? (
              <div>
                <button type="button">Leg Curl</button>
                <button type="button">Barbell Back Squat</button>
                <button type="button">Leg Press</button>
                <button type="button">Stiff DeadLift</button>
                <button type="button">DeadLift</button>
              </div>
            ) : null}
            <button type="button" onClick={LegGlutes}>
              Glutes
            </button>
            {exercise === "L3" ? (
              <div>
                <button type="button">Stiff DeadLift</button>
                <button type="button">DeadLift</button>
                <button type="button">Hips Thrusts</button>
              </div>
            ) : null}
          </div>
        ) : null}

        <div>
          <button type="button" onClick={Arm}>
            Arm
          </button>
        </div>
        {valid === "A" ? (
          <div>
            <button type="button" onClick={ArmBiceps}>
              Biceps
            </button>
            {exercise === "A1" ? (
              <div>
                <button type="button">Barbell Curl</button>
                <button type="button">Chin Up</button>
                <button type="button">Preacher Curl</button>
                <button type="button">Hammer Curl</button>
                <button type="button">Incline Dumbbell Curl</button>
                <button type="button">Concentration Curl</button>
              </div>
            ) : null}
            <button type="button" onClick={ArmTriceps}>
              Triceps
            </button>
            {exercise === "A2" ? (
              <div>
                <button type="button">Dips</button>
                <button type="button">Rope Tricep Push Down</button>
                <button type="button">SkullCrusher</button>
                <button type="button">Tricep Extension</button>
                <button type="button">Close Grip Bench Press</button>
              </div>
            ) : null}
            <button type="button" onClick={ArmFore}>
              ForeArm
            </button>
            {exercise === "A3" ? (
              <div>
                <button type="button">EZ-Bar Reverse Curl</button>
                <button type="button">Barbell Reverse Biceps Curl</button>
                <button type="button">Hammer Curl</button>
                <button type="button">Zottman Curl</button>
                <button type="button">Farmer's Carry</button>
              </div>
            ) : null}
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
