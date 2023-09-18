import DashboardLayout from "../features/dashboard/DashboardLayout";
import useTitle from "../hooks/useTitle";

function Dashboard() {
  useTitle("Dashboard");
  return <DashboardLayout />;
}

export default Dashboard;
