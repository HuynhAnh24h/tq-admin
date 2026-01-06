import type React from "react";
import NavigateItems from "../../constants/NavigateItems";
import { NavLink } from "react-router-dom";
import { MdOutlineSecurity } from "react-icons/md";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 z-50 transform 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out md:translate-x-0 md:static
          bg-gradient-to-br from-white/80 via-white/70 to-white/80 backdrop-blur-2xl
          border-r border-white/50 shadow-2xl`}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -right-24 w-48 h-48 bg-indigo-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col">
          {/* Header / Logo */}
          <div className="p-6 pb-4">
            <NavLink
              to="/dashboard"
              className="group relative block"
              onClick={onClose}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              
              {/* Main button */}
              <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <MdOutlineSecurity size={24} className="text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold text-lg leading-tight">Admin Panel</p>
                    <p className="text-blue-100 text-xs">Management System</p>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-1.5">
            {NavigateItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `group relative block rounded-xl transition-all duration-300 ${
                    isActive ? "scale-[1.02]" : "hover:scale-[1.02]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {/* Active glow */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur-md opacity-50"></div>
                    )}
                    
                    {/* Main nav item */}
                    <div
                      className={`relative flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                          : "bg-white/40 backdrop-blur-sm text-gray-700 hover:bg-white/60 hover:shadow-md border border-white/50"
                      }`}
                    >
                      {/* Icon container */}
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-white/20 backdrop-blur-sm text-white"
                            : "bg-gradient-to-br from-blue-500 to-indigo-600 text-white group-hover:scale-110"
                        }`}
                      >
                        <span className="text-lg">{item.icon}</span>
                      </div>

                      {/* Text */}
                      <div className="flex-1">
                        <p className={`font-semibold text-sm ${
                          isActive ? "text-white" : "text-gray-800"
                        }`}>
                          {item.name}
                        </p>
                      </div>

                      {/* Active indicator */}
                      {isActive && (
                        <div className="w-2 h-2 bg-white rounded-full shadow-lg animate-pulse"></div>
                      )}
                    </div>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Footer Info */}
          <div className="p-4 mt-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              
              <div className="relative bg-white/40 backdrop-blur-sm border border-white/50 rounded-xl p-4 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-800 mb-1">System Status</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <p className="text-xs text-gray-600">All systems operational</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:hidden w-8 h-8 bg-white/60 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/80 transition-all duration-200 border border-white/50 shadow-lg"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Sidebar;