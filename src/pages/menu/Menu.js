import Style from './menu.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const logoutApiUrl = "http://43.200.170.40:80/auth/logout";

const Menu = () => {
  const onChattingClick = () => {
    alert("업데이트 예정");
  }
  const onLogoutClick = () => {
    axios.get(logoutApiUrl)
    .then((res) =>{
      alert("로그아웃되었습니다.");
      window.location.href="/login";
    })
    .catch((res) =>{
      console.log(res);
      alert("문제 발생");
    });
  }
  return (
      <div className={Style.mainCover}>
          <div className={Style.Cover}>
            <h1 className={Style.title}>Menu</h1>
          </div>
          <div className={Style.Cover}>
            <Link to='fit'><button type="button"className={Style.normalBtn}>Guide</button></Link>
          </div>
          <div className={Style.Cover}>
            <button type="button" className={Style.normalBtn} onClick={onChattingClick}>Chatting</button>
          </div>
          <div className={Style.Cover}>
            <button type="button" className={Style.normalBtn} onClick={onLogoutClick}>Logout</button>
          </div>
      </div>
  );
};

export default Menu;