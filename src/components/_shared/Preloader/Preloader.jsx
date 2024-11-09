import style from "./preloader.module.css";

export const Preloader = () => {
  return (
    <div className={style.container}>
      <div className={style.preloader}></div>
    </div>
  );
};
