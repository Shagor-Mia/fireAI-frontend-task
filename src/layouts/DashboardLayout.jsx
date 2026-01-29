import { AiOutlineHome } from "react-icons/ai";
import logoImg from "../assets/Container.png";
import avtar from "../assets/avtar.png";
import { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { HiMenuAlt1 } from "react-icons/hi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { IoCallOutline, IoSettingsOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";

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
      icon: <IoCallOutline />,
    },
    {
      to: "appointments",
      label: "Appointments",
      icon: <CiCalendar />,
    },
    {
      to: "settings",
      label: "Settings",
      icon: <IoSettingsOutline />,
    },
  ];

  const location = useLocation();

  const pageTitles = {
    "/dashboard": "Dashboard Overview",
    "/dashboard/call-logs": "Call Logs & history",
    "/dashboard/appointments": "Appointments",
    "/dashboard/settings": "Settings",
  };

  const pageTitle = pageTitles[location.pathname] || "Dashboard Overview";

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
            <div className="flex items-center justify-between flex-1">
              <h2 className="md:text-3xl sm:text-2xl px-5 py-3 ">
                {pageTitle}
              </h2>
              <div className="flex justify-center items-center gap-5 md:gap-10">
                <Link className="md:text-2xl" to={"/"}>
                  <span>
                    <FaRegBell />
                  </span>
                </Link>
                <Link to={"/dashboard/settings"}>
                  <span>
                    <img src={avtar} className=" w-12 md:w-16" alt="" />
                  </span>
                </Link>
              </div>
            </div>
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
            <div className="flex items-center justify-between mt-5 px-4 py-4 w-full">
              <div className="flex-1 flex justify-center">
                {!collapsed && (
                  <Link to="/dashboard">
                    <img
                      src={logoImg}
                      className="md:h-15 md:mt-0 mt-10"
                      alt="Logo"
                    />
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
            <ul className="menu px-4 gap-4 flex-1 md:mt-10 overflow-y-auto">
              {Links.map((item, i) => (
                <li key={i}>
                  <NavLink
                    to={item.to}
                    end={item.to === ""}
                    onClick={closeDrawer}
                    className={({ isActive }) =>
                      `
          flex items-center gap-3 w-full
          px-3 py-2 rounded-xl
          text-white font-medium
          transition-all duration-300
          
          ${
            isActive
              ? `
             backdrop-blur-2xl
             border-white/80
            shadow-[0_0_15px_rgba(255,255,255,0.5)]
            hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]
            hover:border-white/90
            active:scale-95
          `
              : ""
          }
          `
                    }
                  >
                    <span className="text-2xl">{item.icon}</span>
                    {!collapsed && <span>{item.label}</span>}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Logout pinned at bottom */}
            <div className="mt-auto px-4 mr-8 py-3 ">
              <Link
                to="/dashboard/settings"
                className="flex items-center gap-2 text-red-500 hover:bg-red-100 p-2 rounded"
              >
                <span>
                  <IoIosLogOut className="text-3xl text-black" />
                </span>
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
