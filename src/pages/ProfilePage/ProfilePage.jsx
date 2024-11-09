import { BackButton } from "../../components/_shared/BackButton/BackButtons";
import style from "./profilePage.module.css";
import { getFetch } from "../../api/getFetch";
import { UrlConstans } from "../../constans/urlConstants/urlConstans";

export const ProfilePage = () => {
  // Получение данных своего профиля и отображение их

  return (
    <div className={style.profile}>
      <div className={style.content}>
        <div className={style.backButton}>
          <BackButton />
        </div>
        <div className={style.short}>
          <img
            src="https://www.gravatar.com/avatar/f03404a2cb7aab365f6c0e36ead2aa3e?d=mm&s=48"
            alt=""
          />
          <span>John Simons</span>
        </div>
        <div className={style.detail}>
          <div className={style.info}>
            <h2>Сводка</h2>
            <div className={style.infoItem}>
              <span>Аватар: </span>
              <img
                src="https://www.gravatar.com/avatar/f03404a2cb7aab365f6c0e36ead2aa3e?d=mm&s=48"
                alt=""
              />
            </div>
            <div className={style.infoItem}>
              <span>Имя пользователя: </span>
              <span>fdsfsdfsdfsd</span>
            </div>
            <div className={style.infoItem}>
              <span>Полное имя: </span>
              <span>fdsfsdfsdfsd</span>
            </div>
            <div className={style.infoItem}>
              <span>Почта: </span>
              <span>fdsfsdfsdfsd</span>
            </div>
          </div>
          <div className={style.tasksComplete}>
            <h2>Выполненые задачи</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
