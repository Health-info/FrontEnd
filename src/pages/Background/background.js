import Style from "./background.module.css";
import BackImage from "./backimage.png";
const Background = ({ Tag }) => {
  return (
    <div style={{ backgroundImage: `url(${BackImage})` }}>
      <div className={Style.field}>
        <div className={Style.none} />
        <Tag />
        <div className={Style.none} />
      </div>
    </div>
  );
};

export default Background;
