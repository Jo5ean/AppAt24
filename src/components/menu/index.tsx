import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ITEMS_MENU } from "@/const/menu";
import { menuTypes } from "@/types/menuTypes";

const Menu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileMenuRef]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-[#3E3F3D]">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-400 rounded-lg sm:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  />
                </svg>
              </button>
              <a href="" className="flex ms-2 md:me-24">
                <img
                  src="/logo_color.png"
                  className="h-8 me-3"
                  alt="logo color"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">
                  AT24
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="relative ms-3">
                <button
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  type="button"
                  className="flex text-sm bg-[#3E3F3D] rounded-full focus:ring-4 focus:ring-gray-300"
                  aria-expanded={profileMenuOpen}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/luis.jpg"
                    alt="user photo"
                  />
                </button>
                {profileMenuOpen && (
                  <div
                    ref={profileMenuRef}
                    className="absolute right-0 z-50 mt-2 w-48 bg-[#3E3F3D] rounded-md shadow-lg py-1 border border-white"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <div className="px-4 py-3">
                      <p className="text-sm text-white">Luis Cruz</p>
                      <p className="text-sm font-medium text-gray-300 truncate">
                        luiscruz@gmail.com
                      </p>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                          role="menuitem"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                          role="menuitem"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                          role="menuitem"
                        >
                          Earnings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                          role="menuitem"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-[#3E3F3D] border-r border-gray-700 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-[#3E3F3D]">
          <ul className="space-y-2 font-medium">
            {ITEMS_MENU.map((item: menuTypes) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
                >
                  <span className="ms-3">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Menu;
