import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";

const AppLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
      <Sidebar />
      <div className="xl:col-span-5 bg-slate-100">
        <Header />
        <div className="h-[90vh] overflow-y-scroll no-scrollbar p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
