import { Outlet } from "react-router";

import MainNavigation from "../navigation/main-navigation";
import RootFooter from "../footers/root-footer";

function RootLayout() {
    return (
        <div className="root-layout">
            <MainNavigation />
            <Outlet />
            <RootFooter />
        </div>
    );
}

export default RootLayout;