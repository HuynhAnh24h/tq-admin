import React, { useState, useRef, useEffect } from "react";

interface HeaderDropdownProps {
    avatarUrl: string;
    userName: string;
    onLogout: () => void;
}

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ avatarUrl, userName, onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const menuItems = [
        {
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
            label: "Profile",
            onClick: () => {
                console.log("Navigate to profile");
                setIsOpen(false);
            }
        },
        {
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            label: "Settings",
            onClick: () => {
                console.log("Navigate to settings");
                setIsOpen(false);
            }
        },
        {
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            label: "Help & Support",
            onClick: () => {
                console.log("Navigate to help");
                setIsOpen(false);
            }
        }
    ];

    return (
        <div className="relative" ref={dropdownRef}>
            {/* User Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative flex items-center gap-2 md:gap-3 px-2 md:px-3 py-1.5 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
                {/* Avatar */}
                <div className="relative">
                    <img
                        src={avatarUrl}
                        alt={userName}
                        className="w-8 h-8 md:w-9 md:h-9 rounded-lg object-cover ring-2 ring-white/50 group-hover:ring-blue-500/50 transition-all duration-300"
                    />
                    {/* Online indicator */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                </div>

                {/* User info - Hidden on small mobile */}
                <div className="hidden sm:block text-left">
                    <p className="text-sm font-semibold text-gray-800 leading-tight">{userName}</p>
                    <p className="text-xs text-gray-500">Administrator</p>
                </div>

                {/* Dropdown arrow */}
                <svg
                    className={`hidden md:block w-4 h-4 text-gray-600 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 origin-top-right">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl"></div>

                    {/* Menu container */}
                    <div className="relative bg-white/90 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/50 overflow-hidden">
                        {/* User Info Section */}
                        <div className="p-4 border-b border-gray-200/50 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
                            <div className="flex items-center gap-3">
                                <img
                                    src={avatarUrl}
                                    alt={userName}
                                    className="w-12 h-12 rounded-xl object-cover ring-2 ring-white shadow-md"
                                />
                                <div className="flex-1">
                                    <p className="font-semibold text-gray-900">{userName}</p>
                                    <p className="text-xs text-gray-500">john.doe@example.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Menu Items */}
                        <div className="p-2">
                            {menuItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={item.onClick}
                                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-blue-50/50 transition-all duration-200 group/item"
                                >
                                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white group-hover/item:scale-110 transition-transform duration-200">
                                        {item.icon}
                                    </div>
                                    <span className="text-sm font-medium text-gray-700 group-hover/item:text-blue-700">
                                        {item.label}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="mx-2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

                        {/* Logout Button */}
                        <div className="p-2">
                            <button
                                onClick={() => {
                                    onLogout();
                                    setIsOpen(false);
                                }}
                                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-rose-50/50 transition-all duration-200 group/logout"
                            >
                                <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg flex items-center justify-center text-white group-hover/logout:scale-110 transition-transform duration-200">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium text-gray-700 group-hover/logout:text-rose-700">
                                    Logout
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HeaderDropdown;