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
        <header className="flex items-center justify-between md:justify-end bg-white text-white px-4 py-5 shadow">
            <button
                className="md:hidden"
                onClick={onToggleSidebar}
            >
                ☰
            </button>
           <HeaderDropdown
                avatarUrl="https://i.pravatar.cc/100?img=3"
                userName="John Doe"
                onLogout={handleLogout}
            />
        </header>
    );
};

export default Header;
