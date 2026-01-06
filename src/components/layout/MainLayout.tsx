import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Content */}
      <div className="flex flex-col flex-1">
        <Header onToggleSidebar={toggleSidebar} />
        <main className="p-4 overflow-y-auto">
          {/* Đây là nơi render các route con */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
