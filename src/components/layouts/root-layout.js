import { Outlet } from "react-router";

function RootLayout() {
    return (
        <div className="root-layout">
            <Outlet />
        </div>
    );
}

export default RootLayout;