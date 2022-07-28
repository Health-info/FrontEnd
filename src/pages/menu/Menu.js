import Style from './menu.module.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  const onChattingClick = () => {
    console.log("구현 예정")
  }
  const onLogoutClick = () => {
    //로그아웃하는 API call하기 => 동기로 처리하고 처리 된 이후에 login 화면으로 이동
    window.location.href = '/login';
  }
  return (
      <div className={Style.cover}>
          <div className={Style.titleBlock}>
            <h1 className={Style.title}>Menu</h1>
          </div>
          <div className={Style.block}>
            <Link to='fit'><button type="button"className={Style.normalBtn}>Guide</button></Link>
          </div>
          <div className={Style.block}>
            <button type="button" className={Style.normalBtn} onClick={onChattingClick}>Chatting</button>
          </div>
          <div className={Style.block}>
            <button type="button" className={Style.normalBtn} onClick={onLogoutClick}>Logout</button>
          </div>
      </div>
  );
};

export default Menu;
