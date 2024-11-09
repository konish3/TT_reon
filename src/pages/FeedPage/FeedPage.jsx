import React from "react";
import { Header } from "../../components/Header/Header";
import { ProjectCardContainer } from "../../components/ProjectCard/ProjectCardContainer";
import style from "./feedPage.module.css";
import { ProjectsFilters } from "../../components/ProjectsFilters/ProjectFilters";

export const FeedPage = () => {
  return (
    <div className="">
      <Header />
      <main>
        <div className={style.projects}>
          <h1 className={style.title}>Мои проекты</h1>
        </div>
        <div className={style.mainContent}>
          <ProjectCardContainer />
          <ProjectsFilters />
        </div>
      </main>
    </div>
  );
};
