import { Outlet } from "react-router-dom";
import SideBar from "../../components/UI/other/SideBar";
import Header from "../../components/UI/other/Header";
import { useState } from "react";

const DashboardLayout: React.FC = () => {
  const [sideBarStyleToggle, setSideBarStyleToggle] = useState<string>("w-0");
  const handleSideBarStyleToggle = () => {
    setSideBarStyleToggle((pre) => (pre === "w-0" ? "w-full" : "w-0"));
  };
  return (
    <div className="flex h-full">
      <SideBar
        sideBarStyleToggle={sideBarStyleToggle}
        handleSideBarStyleToggle={handleSideBarStyleToggle}
      />
      <div className="w-full md:w-3/4">
        <Header handleSideBarStyleToggle={handleSideBarStyleToggle} />
        {/* <Header /> */}
        <div className="h-[calc(100vh-5rem)] w-full flex-1 overflow-hidden">
          <div className="m-3 mt-0 h-[calc(100%-4px)] w-[calc(100%-24px)] rounded-3xl bg-[#F2F4F8] md:m-10 md:mt-0 md:h-[calc(100%-40px)] md:w-[calc(100%-80px)]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
