import { useNavigate } from "react-router-dom";
import style from "./header.module.css";
import { AuthRoutes } from "../../constans/routesConstants/routesContants";
import { ExchangeRoutes } from "../../constans/routesConstants/routesContants";

export const Header = () => {
  const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate(`/${ExchangeRoutes.EXCHANGE}/${ExchangeRoutes.PROFILE}`);
  };

  const handleLogOut = () => {
    localStorage.removeItem("dataUser");
    navigate(`${AuthRoutes.LOGIN}`);
  };

  return (
    <header className={style.header}>
      <div className={style.content}>
        <div className={style.navigate}>
          <h2>
            <a href={`/${ExchangeRoutes.EXCHANGE}/${ExchangeRoutes.FEED}`}>
              Sitemark
            </a>
          </h2>
          <nav>
            {/* Оптимизировать и адаптировать вывод пунктов навигации */}
            <ul className={style.menuList}>
              <li>
                <a href="">Пункт 1</a>
              </li>
              <li>
                <a href="">Пункт 2</a>
              </li>
              <li>
                <a href="">Пункт 3</a>
              </li>
              <li>
                <a href="">Пункт 4</a>
              </li>
              <li>
                <a href="">Пункт 5</a>
              </li>
            </ul>
          </nav>
          <div className={style.buttons}>
            <button onClick={handleLogOut} className={style.logOut}>
              Выйти
            </button>
            <button onClick={navigateToProfile}>
              {/* svg вынести в отдельный компонент */}
              <svg
                viewBox="0 0 20 21"
                style={{ width: "30px", color: "rgb(71, 83, 107)" }}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 10.4056C12.3012 10.4056 14.1667 8.54012 14.1667 6.23893C14.1667 3.93775 12.3012 2.07227 10 2.07227C7.69885 2.07227 5.83337 3.93775 5.83337 6.23893C5.83337 8.54012 7.69885 10.4056 10 10.4056Z"
                  stroke="currentColor"
                  strokeWidth="1.66667"
                />
                <path
                  d="M14.1667 12.0723H14.46C15.0692 12.0724 15.6574 12.2951 16.1141 12.6983C16.5708 13.1016 16.8645 13.6577 16.94 14.2623L17.2658 16.8656C17.2952 17.1001 17.2742 17.3382 17.2045 17.564C17.1348 17.7899 17.0178 17.9983 16.8614 18.1754C16.7049 18.3526 16.5126 18.4945 16.2971 18.5916C16.0817 18.6888 15.848 18.739 15.6117 18.7389H4.38834C4.15199 18.739 3.91834 18.6888 3.70288 18.5916C3.48742 18.4945 3.29509 18.3526 3.13866 18.1754C2.98222 17.9983 2.86525 17.7899 2.79551 17.564C2.72578 17.3382 2.70487 17.1001 2.73418 16.8656L3.05918 14.2623C3.13476 13.6575 3.42869 13.1011 3.8857 12.6978C4.34272 12.2945 4.93132 12.072 5.54084 12.0723H5.83334"
                  stroke="currentColor"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
