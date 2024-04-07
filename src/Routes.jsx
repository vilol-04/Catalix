import React from "react";
import { useRoutes } from "react-router-dom";

import NotFound from "pages/NotFound";
import Analytics from "pages/Analytics";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Analytics /> },
    { path: "*", element: <NotFound /> },
    {
      path: "analytics",
      element: <Analytics />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
