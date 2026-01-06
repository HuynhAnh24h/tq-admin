import * as React from "react";
import { NavLink } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { FaUser } from "react-icons/fa";



interface HeaderDropdownProps {
    avatarUrl: string;
    userName: string;
    onLogout: () => void;
}

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ avatarUrl, userName, onLogout }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const menuRef = React.useRef<HTMLDivElement>(null);

    // Đóng khi click ra ngoài
    React.useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div className="relative" ref={menuRef}>
            {/* Avatar trigger */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <img
                    src={avatarUrl}
                    alt={userName}
                    className="h-10 w-10 rounded-full shadow-md object-cover"
                />
            </button>

            {/* Dropdown menu */}
            {isOpen && (<div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md shadow-md bg-white shadow-lg animate-in fade-in slide-in-from-top-1 z-50">
                <div className="px-4 py-2 text-sm text-gray-800 font-semibold">Hello: {userName}</div>
                <ul className="py-1">
                    <li> <NavLink to="/profile/edit"
                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-800 font-semibold hover:bg-blue-800 hover:text-white focus:bg-blue-100"
                        onClick={() => setIsOpen(false)} >
                        <FaUser className="h-4 w-4" /> Edit Profile </NavLink>
                    </li>
                    <li>
                        <button onClick={() => { onLogout(); setIsOpen(false); }}
                            className="flex items-center gap-2 w-full px-4 py-2 text-gray-800 font-semibold hover:bg-blue-800 hover:text-white focus:bg-blue-100" >
                            <IoLogOut className="h-4 w-4" /> Logout
                        </button>
                    </li>
                </ul>
            </div>)}
        </div>
    );
};

export default HeaderDropdown;