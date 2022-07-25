import Style from './background.module.css';

const Background = ({Tag}) => {
  return (
    <div>
      <div className={Style.field}>
        <div className={Style.none} />
        <Tag />
        <div className={Style.none} />
      </div>
    </div>
  );
}

export default Background;