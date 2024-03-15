import { Outlet } from "react-router-dom";

import Topbar from "../components/shared/Topbar";
import Bottombar from "../components/shared/Bottombar";
import LeftSideBar from "../components/shared/LeftSideBar";

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSideBar />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <Bottombar />
    </div>
  );
};

export default RootLayout;
