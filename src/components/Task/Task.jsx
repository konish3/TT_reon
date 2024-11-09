import style from "./task.module.css";

export const Task = ({ task }) => {
  const { name, createAt } = task;
  return (
    <div className={style.task}>
      <div className={style.content}>
        <div className={style.nameTask}>{name}</div>
        <span className={style.createDate}>Создана: {createAt}</span>
      </div>
    </div>
  );
};
