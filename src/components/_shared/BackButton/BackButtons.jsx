import { useNavigate } from "react-router-dom";
import style from "./backButton.module.css";

export const BackButton = () => {
  const navigate = useNavigate();

  const navigateToBack = () => {
    navigate(-1);
  };
  return (
    <button onClick={navigateToBack} className={style.backButton}>
      <svg className={style.arrow} viewBox="0 0 100 85">
        <polygon points="58.263,0.056 100,41.85 58.263,83.641 30.662,83.641 62.438,51.866 0,51.866 0,31.611 62.213,31.611 30.605,0 58.263,0.056" />
      </svg>
    </button>
  );
};
