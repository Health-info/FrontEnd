import Style from "./background.module.css";

const Background = ({ Tag }) => {
  return (
    <div>
      <div className={Style.field}>
        <div />
        <Tag />
        <div />
      </div>
    </div>
  );
};

export default Background;
