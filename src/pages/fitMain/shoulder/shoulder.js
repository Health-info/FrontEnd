import Front from "./front";
import Side from "./side/side";
import Back from "./back/back";

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
