import { createBrowserRouter, Navigate } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";

// pages
import DashboardOverview from "../pages/Dashboard/DashboardOverview";
import CallLogs from "../pages/callLogos/CallLogs";
import Appointments from "../pages/appointments/Appointments";
import Settings from "../pages/settings/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardOverview />,
      },
      {
        path: "call-logs",
        element: <CallLogs />,
      },
      {
        path: "appointments",
        element: <Appointments />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

export default router;
