import { BackButton } from "../../components/_shared/BackButton/BackButtons";
import { TaskContainer } from "../../components/Task/TaskContainer";
import style from "./projectPage.module.css";

export const ProjectPage = ({ project }) => {
  const { name, description, languages, tasks } = project;
  console.log(
    tasks.filter((task) => {
      return task.stage === "start";
    })
  );
  return (
    <div className={style.project}>
      <div className={style.content}>
        <BackButton />
        <div className={style.about}>
          <div className={style.info}>
            <h2 className={style.name}>{name}</h2>
            <p className={style.description}>{description}</p>
            <span className={style.language}>{languages}</span>
          </div>
          <div className={style.author}>
            {/* <img src="http://localhost:3000/avatarProfile.png" alt="" /> */}
            <div className={style.nameAuthor}>
              <h4>John Simons</h4>
              <p>Разработчик, программист</p>
            </div>
          </div>
        </div>
        <div className={style.tasks}>
          <h3>Задачи</h3>
          <div className={style.table}>
            <div className={style.column}>
              <div className={style.nameColumn}>Нужно сделать</div>
              <div className={style.tasksField}>
                <div className={style.tasksList}>
                  {tasks
                    .filter((item) => item.stage === "start")
                    .map((task) => {
                      return <TaskContainer task={task} />;
                    })}
                </div>
              </div>
            </div>
            <div className={style.column}>
              <div className={style.nameColumn}>В работе</div>
              <div className={style.tasksField}>
                <div className={style.tasksList}>
                  {tasks
                    .filter((item) => item.stage === "in work")
                    .map((task) => {
                      return <TaskContainer task={task} />;
                    })}
                </div>
              </div>
            </div>
            <div className={style.column}>
              <div className={style.nameColumn}>Выполнено</div>
              <div className={style.tasksField}>
                <div className={style.tasksList}>
                  {tasks
                    .filter((item) => item.stage === "complete")
                    .map((task) => {
                      return <TaskContainer task={task} />;
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
