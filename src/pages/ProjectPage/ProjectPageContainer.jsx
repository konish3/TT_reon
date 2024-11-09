import { useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../api/useFetch";
import { ProjectPage } from "./ProjectPage";
import { Preloader } from "../../components/_shared/Preloader/Preloader";

export const ProjectPageContainer = () => {
  const { projectId } = useParams();
  // const navigate = useNavigate();
  const { data, isPending, error } = useFetch(
    `http://localhost:3001/projects/${projectId}`
  );

  // useEffect(() => {
  //   navigate("/error");
  // }, [error]);

  console.log(data, isPending, error);

  return !isPending ? <ProjectPage project={data} /> : <Preloader />;
};
