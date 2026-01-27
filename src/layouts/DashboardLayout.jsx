import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { LuTicketsPlane } from "react-icons/lu";
import { TbTransactionPound } from "react-icons/tb";
import logoImg from "../assets/Container.png";
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { HiMenuAlt1 } from "react-icons/hi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const closeDrawer = () => {
    const checkbox = document.getElementById("dashboard-drawer");
    if (checkbox) checkbox.checked = false;
  };

  const Links = [
    { to: "", label: "Dashboard Overview", icon: <AiOutlineHome /> },
    {
      to: "call-logs",
      label: "Call Logs",
      icon: <TbTransactionPound />,
    },
    {
      to: "appointments",
      label: "Appointments",
      icon: <LuTicketsPlane />,
    },
    {
      to: "settings",
      label: "Settings",
      icon: <CgProfile />,
    },
  ];

  return (
    <>
      {/* <Navbar /> */}

      <div className="drawer lg:drawer-open max-w-7xl bg-[rgb(20,33,80)] mx-auto">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />

        {/* ================= CONTENT ================= */}
        <div className="drawer-content flex flex-col">
          {/* Top Bar */}
          <nav className="navbar bg-[rgb(17,27,60)] text-white sticky top-0 z-20 shadow-sm">
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-ghost btn-square lg:hidden"
            >
              <HiMenuAlt1 className="text-xl" />
            </label>

            <h2 className="text-lg sm:text-2xl  truncate flex justify-between items-center">
              Dashboard Overview
              <span className="lg:hidden block">
                <Link to="/" className="flex items-center gap-2">
                  <img src={logoImg} className="h-10" alt="Logo" />
                </Link>
              </span>
            </h2>
          </nav>

          <div className="md:p-4">
            <Outlet />
          </div>
        </div>

        {/* ================= SIDEBAR ================= */}
        <div className="drawer-side border-r border-gray-700">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

          <aside
            className={`bg-[rgba(17,27,60,0.95)] min-h-full transition-all duration-300
    ${collapsed ? "w-20" : "w-64"}
    flex flex-col
  `}
          >
            {/* Logo */}
            <div className="flex items-center justify-between px-4 py-4 w-full">
              <div className="flex-1 flex justify-center">
                {!collapsed && (
                  <Link to="/dashboard">
                    <img src={logoImg} className="h-10" alt="Logo" />
                  </Link>
                )}
              </div>

              {/* Collapse button */}
              <button
                onClick={() => setCollapsed(!collapsed)}
                className="hidden md:flex btn btn-ghost btn-sm"
              >
                {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
              </button>
            </div>

            {/* Menu */}
            <ul className="menu px-4 gap-1 flex-1 overflow-y-auto">
              {Links.map((item, i) => (
                <li key={i}>
                  <NavLink
                    to={item.to}
                    onClick={closeDrawer}
                    className={({ isActive }) =>
                      `flex items-center gap-3 ${
                        isActive ? "bg-green-100 text-green-700 " : ""
                      }`
                    }
                  >
                    <span className="text-lg">{item.icon}</span>
                    {!collapsed && <span>{item.label}</span>}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Logout pinned at bottom */}
            <div className="mt-auto px-4 py-4 ">
              <Link
                to="/dashboard"
                className="flex items-center gap-2 text-red-500 hover:bg-red-100 p-2 rounded"
              >
                <IoIosLogOut className="text-2xl text-black" />
                {!collapsed && <span>Log Out</span>}
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
