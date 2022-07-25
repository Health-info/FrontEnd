import Style from './menu.module.css';

const Menu = () => {
  return (
      <div className={Style.cover}>
          <div className={Style.titleBlock}>
            <h1 className={Style.title}>Menu</h1>
          </div>
          <div className={Style.block}>
            <button className={Style.normalBtn}>Guide</button>
          </div>
          <div className={Style.block}>
            <button className={Style.normalBtn}>Chatting</button>
          </div>
          <div className={Style.block}>
            <button className={Style.normalBtn}>Logout</button>
          </div>
      </div>
  );
};

export default Menu;
