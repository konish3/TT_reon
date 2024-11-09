import { useNavigate } from "react-router-dom";
import style from "./projectCard.module.css";

export const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const navigateToProject = (e) => {
    navigate(`/exchange/project/${e.currentTarget.id}`);
  };
  return project ? (
    <button id={project.id} onClick={navigateToProject}>
      <div className={style.card}>
        <div className={style.content}>
          <div className={style.about}>
            <h4 className={style.name}>{project.name}</h4>
            <p className={style.description}>{project.description}</p>
            <div className={style.language}>{project.languages}</div>
          </div>
          <div className={style.stage}>
            <span>Этап</span>
            <span>{project.stage}</span>
          </div>
          <div className={style.tasks}>
            <span>Список задач</span>
            <ul className={style.tasksList}>
              {project.tasks.length ? (
                project.tasks.map((task) => {
                  return <li key={task.id}>{task.name}</li>;
                })
              ) : (
                <li>Задач пока нет</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </button>
  ) : (
    <div className=""></div>
  );
};
