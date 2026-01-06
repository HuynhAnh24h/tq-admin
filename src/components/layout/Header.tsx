import React from "react";
import HeaderDropdown from "./components/HeaderDropdown";

interface HeaderProps {
    onToggleSidebar: () => void;
}

const handleLogout = () => {
    // Xử lý đăng xuất ở đây
    console.log("User logged out");
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
    return (
        <header className="sticky top-0 z-30 bg-gradient-to-r from-white/80 via-white/70 to-white/80 backdrop-blur-2xl border-b border-white/50 shadow-lg">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>
                <div className="absolute top-0 right-1/4 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 flex items-center justify-between px-4 md:px-6 py-3">
                {/* Left Section - Mobile Menu & Title */}
                <div className="flex items-center gap-4">
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden group relative w-10 h-10 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
                        onClick={onToggleSidebar}
                    >
                        <svg className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* Title - Hidden on mobile */}
                    <div className="hidden md:block">
                        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Dashboard
                        </h1>
                        <p className="text-xs text-gray-600">Welcome back to your workspace</p>
                    </div>
                </div>

                {/* Right Section - Actions */}
                <div className="flex items-center gap-3">
                    {/* Search Button */}
                    <button className="hidden md:flex group relative w-10 h-10 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 items-center justify-center">
                        <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>

                    {/* Notifications */}
                    <button className="hidden sm:flex group relative w-10 h-10 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 items-center justify-center">
                        <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        {/* Notification badge */}
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full text-white text-[10px] font-bold flex items-center justify-center shadow-lg">
                            3
                        </span>
                    </button>

                    {/* Divider */}
                    <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

                    {/* User Dropdown */}
                    <HeaderDropdown
                        avatarUrl="https://i.pravatar.cc/100?img=3"
                        userName="John Doe"
                        onLogout={handleLogout}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;