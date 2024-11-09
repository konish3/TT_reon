import { ProjectCard } from "./ProjectCard";
import { Preloader } from "../_shared/Preloader/Preloader";
// import useFetch from "../../api/useFetch";
import { getFetch } from "../../api/getFetch";
import { UrlConstans } from "../../constans/urlConstants/urlConstans";
import style from "./projectCard.module.css";
import { useEffect, useState } from "react";

export const ProjectCardContainer = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await getFetch(UrlConstans.PROJECTS);
      setProjectsData(data ?? []);
      setIsLoadingProjects(false);
    };
    getData();
  }, []);

  return (
    <div className={style.cardList}>
      {isLoadingProjects && <Preloader />}

      {projectsData.length &&
        projectsData.map((item) => {
          return <ProjectCard key={item.id} project={item} />;
        })}

      {!isLoadingProjects && !projectsData.length && (
        <div className="">
          Проектов нет, хотите <a href="">создать</a>?
        </div>
      )}
    </div>
  );
};
