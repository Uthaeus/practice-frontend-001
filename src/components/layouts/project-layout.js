import { Outlet } from "react-router";

import ProjectNavigation from "../navigation/project-navigation";
import ProjectFooter from "../footers/project-footer";

function ProjectLayout() {
    return (
        <div className="project-layout">
            <ProjectNavigation />
            <Outlet />
            <ProjectFooter />
        </div>
    );
}

export default ProjectLayout;